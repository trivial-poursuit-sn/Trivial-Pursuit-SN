import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const membres = [
  { nom: "Erwan Sagnardon", role: "Développeur Web et Mobile", email: "erwan.sagnardon@campus-la-chataigneraie.org" },
  { nom: "Corentin Nollet-Barray", role: "Responsable", email: "corentin.nollet-barray@campus-la-chataigneraie.org" },
  { nom: "Eric Ung", role: "Responsable en second", email: "eric.ung@campus-la-chataigneraie.org" },
  { nom: "Faran Lazar", role: "Design", email: "faran.lazar@campus-la-chataigneraie.org" },
  { nom: "Mathéo Fontaine", role: "Design", email: "matheo.fontaine@campus-la-chataigneraie.org" },
  { nom: "Gabriel Charpentier", role: "Développeur Application Mobile", email: "gabriel.charpentier@campus-la-chataigneraie.org" },
];

export function Equipes() {
  return (
    <div id="equipe" className="bg-background p-4">.
        <h2 className="text-2xl font-bold text-center">Notre Équipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {membres.map((membre, index) => (
            <Card key={index}>
            <CardHeader>
                <CardTitle>{membre.nom}</CardTitle>
            </CardHeader>
            <CardContent>
                <Badge variant="outline">{membre.email}</Badge>
            </CardContent>
            <CardContent>
                <Badge variant="secondary">{membre.role}</Badge>
            </CardContent>
            </Card>
        ))}
        </div>
    </div>
  );
}
