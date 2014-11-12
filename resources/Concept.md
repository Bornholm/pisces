![](images/pisces-logo.png)

## Problématique

Le modèle fédéral et la fragmentation de l'information rendent la pratique de la pêche de loisir complexe en France.

## Objectifs

- Créer une carte interactive du territoire français représentant les différents parcours de pêche.
- Y associer les informations de législation (maille, période de pêche et coordonnées de l'[A.A.P.P.M.A.](http://fr.wikipedia.org/wiki/Association_agr%C3%A9%C3%A9e_de_p%C3%AAche_et_de_protection_des_milieux_aquatiques) responsable du site)
- Créér un moteur de recherche pour trouver rapidement ces informations.
- Créer une interface de contribution afin que les pêcheurs et les A.A.P.P.M.A. puissent ajouter/corriger les éléments contenus dans la base de données.

## Contraintes

- La carte devra être utilisable depuis un terminal mobile, avec potentiellement un mode de fonctionnement hors ligne.
- Les données devront être mises à jour régulièrement.

## Statut

Concept / Prototype

## Technologies

- PostgreSQL / PostGIS (Base de données géospatiale)
- NodeJS (Application Web)
- MongoDB (Base de données applicative)

## Données

- [OpenStreetMap](http://www.openstreetmap.org) (fond de carte + données géospatiales)
- Base de données Carthage ?

## Sources

Les sources de l'application sont disponibles sur le [dépôt GIT](https://github.com/Bornholm/pisces).

## Licence

Le code de l'application sera sous licence [AGPL](https://gnu.org/licenses/agpl.html).
