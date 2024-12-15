import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import xlsx from 'xlsx';

// Nécessaire pour gérer __dirname dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

let games = []; // Liste des parties disponibles
let players = {}; // Stocke les pseudos des joueurs

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Charger les questions depuis le fichier Excel
function loadQuestions() {
    const workbook = xlsx.readFile('/mnt/data/questions_reponse.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    return data; // Retourne les questions sous forme de tableau
}

const questions = loadQuestions();

io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté');

    // Gérer le pseudo
    socket.on('set-username', (username) => {
        players[socket.id] = username;
        socket.emit('update-games', games); // Envoyer la liste des parties disponibles
        console.log(`${username} a rejoint la session.`);
    });

    // Gérer la création d'une nouvelle partie
    socket.on('create-game', () => {
        const gameId = `game-${games.length + 1}`;
        games.push({ id: gameId, players: [players[socket.id]], started: false });
        socket.join(gameId);
        io.emit('update-games', games); // Met à jour la liste des parties pour tous les joueurs
        console.log(`Nouvelle partie créée: ${gameId}`);
    });

    // Gérer la déconnexion
    socket.on('disconnect', () => {
        const username = players[socket.id];
        console.log(`${username} s'est déconnecté.`);

        // Supprimer le joueur des parties
        games.forEach((game) => {
            game.players = game.players.filter(player => player !== username);
        });

        games = games.filter(game => game.players.length > 0); // Supprimer les parties vides
        io.emit('update-games', games);

        delete players[socket.id];
    });

    // Gérer la demande de rejoindre une partie
    socket.on('join-game', (gameId) => {
        const game = games.find(g => g.id === gameId);
        if (game && !game.started) {
            game.players.push(players[socket.id]);
            socket.join(gameId);
            io.emit('update-games', games);
            console.log(`${players[socket.id]} a rejoint la partie ${gameId}`);

            // Vérifier si la partie peut commencer
            if (game.players.length === 2) {
                io.to(gameId).emit('ready-to-start', { gameId });
                console.log(`La partie ${gameId} est prête à démarrer.`);
            }
        }
    });

    // Gérer le démarrage de la partie
    socket.on('start-game', (gameId) => {
        const game = games.find(g => g.id === gameId);
        if (game && game.players.length === 2 && !game.started) {
            game.started = true;
            io.to(gameId).emit('game-started');
            console.log(`La partie ${gameId} a démarré`);
            // Envoyer la première question
            io.to(gameId).emit('question', questions[0]);
        } else {
            socket.emit('error', "La partie ne peut pas démarrer. Assurez-vous qu'il y a exactement 2 joueurs.");
        }
    });
});

server.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});