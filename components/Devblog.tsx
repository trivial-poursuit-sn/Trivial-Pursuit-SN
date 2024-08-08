import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type DevblogEntry = {
  titre: string;
  contenu: string;
  date: string;
  developpeur: "Erwan" | "Gabriel" | "Eric" | "Faran" | "Mathéo" | "Corentin";
};

const devblogEntries: DevblogEntry[] = [
  {
    titre: "Début du design du plateau de jeu",
    contenu: "Nous avons commencé à travailler sur le design du plateau de jeu.",
    date: "2023-05-01",
    developpeur: "Mathéo",
  },
  {
    titre: "Création des questions/réponses du jeu",
    contenu: "Nous avons créé les premières questions et réponses du jeu.",
    date: "2023-05-15",
    developpeur: "Erwan",
  },
  {
    titre: "Début du développement de l'application mobile pour l'année 2024/2025",
    contenu: "Nous allons commencé à travailler sur l'application mobile pour l'année 2024/2025.",
    date: "2023-05-30",
    developpeur: "Corentin",
  },
];

export function Devblog() {
  return (
    <div id="devblog" className="bg-background p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Devblog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {devblogEntries.map((entry, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{entry.titre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{entry.contenu}</p>
              <p className="text-sm text-muted-foreground mb-2">{entry.date}</p>
              <Badge variant="secondary">{entry.developpeur}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
