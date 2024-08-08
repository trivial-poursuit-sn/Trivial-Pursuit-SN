import React from "react";
import Image from "next/image";

export function Presentation() {
  return (
    <div className="bg-background p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Présentation du Plateau de Jeu</h2>
      <div className="flex justify-center">
        <Image
          src="/assets/images/devblog/plateau_jeux.png"
          alt="Plateau de jeu Trivial Pursuit SN"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-4 text-center text-lg">
        Découvrez notre plateau de jeu Trivial Pursuit spécialement conçu pour les élèves de Première et Terminale SN.
      </p>
    </div>
  );
}