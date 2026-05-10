# TP5 - Système de gestion de tâches avec GraphQL

API GraphQL pour la gestion de tâches, construite avec **Apollo Server**, **Express** et **Node.js**.

## Fonctionnalités

- Lister toutes les tâches (`tasks`)
- Récupérer une tâche par ID (`task`)
- Ajouter une tâche (`addTask`)
- Marquer une tâche comme terminée (`completeTask`)
- Modifier la description d'une tâche (`changeDescription`)
- Supprimer une tâche (`deleteTask`)

## Stack technique

- Node.js
- Express 5
- Apollo Server 5
- GraphQL

## Installation

```bash
npm install
```

## Lancement

```bash
node index.js
```

Le serveur démarre sur `http://localhost:5000/graphql`.

## Schéma GraphQL

```graphql
type Task {
  id: ID!
  title: String!
  description: String!
  completed: Boolean!
  duration: Int!
}

type Query {
  task(id: ID!): Task
  tasks: [Task]
}

type Mutation {
  addTask(title: String!, description: String!, completed: Boolean!, duration: Int!): Task
  completeTask(id: ID!): Task
  changeDescription(id: ID!, description: String!): Task
  deleteTask(id: ID!): Task
}
```

## Exemples de requêtes

### Lister toutes les tâches

```graphql
query {
  tasks {
    id
    title
    description
    completed
    duration
  }
}
```

### Ajouter une tâche

```graphql
mutation {
  addTask(
    title: "Nouvelle tâche"
    description: "Description de la tâche"
    completed: false
    duration: 4
  ) {
    id
    title
  }
}
```

### Marquer une tâche comme terminée

```graphql
mutation {
  completeTask(id: "1") {
    id
    completed
  }
}
```

### Modifier la description

```graphql
mutation {
  changeDescription(id: "1", description: "Nouvelle description") {
    id
    description
  }
}
```

### Supprimer une tâche

```graphql
mutation {
  deleteTask(id: "1") {
    id
    title
  }
}
```

## Captures d'écran

Voir le dossier [`capture/`](./capture/) pour les démonstrations de l'interface Apollo Sandbox.
