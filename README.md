# Pisces

## Dépendances de développement

### Environnement de développement

- (Docker)[https://www.docker.com/]
- (Fig)[http://www.fig.sh/]

## Démarrer avec les sources

```

# Récupération des sources
git clone pisces
cd pisces

# Initialisation des conteneurs
./scripts/reset-osm-container.sh
./scripts/download-osm-data.sh
./scripts/import-osm-data.sh

# Lancement des conteneurs
fig up

```
