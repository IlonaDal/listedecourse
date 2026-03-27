# Gestionnaire d'Articles en Ligne de Commande

Un petit programme Node.js interactif permettant de gérer une liste d'articles vestimentaires directement depuis le terminal.

---

## 📋 Description

Ce projet propose un menu interactif en ligne de commande pour consulter, ajouter, rechercher des articles et calculer le total d'un panier.

---

## Prérequis

- [Node.js](https://nodejs.org/) version 12 ou supérieure

---

## ▶️ Lancement

```bash
node index.js
```

---

## Articles par défaut

| Article         | Prix    |
|----------------|---------|
| T-shirt         | 19.99 € |
| Pantalon        | 39.99 € |
| Chaussures      | 59.99 € |
| Casquette       | 14.99 € |
| Sweat à capuche | 49.99 € |

---

## Fonctionnalités

```
=== MENU ===
1. Afficher les articles
2. Ajouter un article
3. Chercher un article
4. Calculer le total
5. Quitter
============
```

| Option | Description |
|--------|-------------|
| **1**  | Affiche la liste complète des articles avec leurs prix |
| **2**  | Ajoute un nouvel article et son prix à la liste |
| **3**  | Recherche un article par son nom exact |
| **4**  | Calcule et affiche le total de tous les articles |
| **5**  | Quitte le programme |

---

## Structure du projet

```
projet/
└── index.js   # Point d'entrée principal
```

---

## Notes

- La recherche d'un article est **sensible à la casse** (`T-shirt` ≠ `t-shirt`).
- Les données ne sont **pas persistantes** : les articles ajoutés sont perdus à la fermeture du programme.
- Le module utilisé (`readline`) est natif à Node.js, **aucune installation de dépendance n'est nécessaire**.
