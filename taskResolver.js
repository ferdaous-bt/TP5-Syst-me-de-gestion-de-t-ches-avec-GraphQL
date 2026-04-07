let tasks = [
  {
    id: '1',
    title: 'Développement Front-end pour Site E-commerce',
    description: 'Créer une interface utilisateur réactive en utilisant React et Redux pour un site e-commerce.',
    completed: false,
    duration: 5,
  },
  {
    id: '2',
    title: 'Développement Back-end pour Authentification Utilisateur',
    description: "Implémenter un système d'authentification et d'autorisation pour une application web en utilisant Node.js, Express, et Passport.js",
    completed: false,
    duration: 7,
  },
  {
    id: '3',
    title: 'Tests et Assurance Qualité pour Application Web',
    description: 'Développer et exécuter des plans de test et des cas de test complets.',
    completed: false,
    duration: 3,
  },
];

const taskResolver = {
  Query: {
    task: (_, { id }) => tasks.find(task => task.id === id),
    tasks: () => tasks,
  },

  Mutation: {

    // ✅ Ajouter une tâche
    addTask: (_, { title, description, completed, duration }) => {
      const task = {
        id: String(tasks.length + 1),
        title,
        description,
        completed,
        duration,
      };
      tasks.push(task);
      return task;
    },

    // ✅ Marquer comme terminée
    completeTask: (_, { id }) => {
      const task = tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
        return task;
      }
      return null;
    },

    // ✅ Modifier description
    changeDescription: (_, { id, description }) => {
      const task = tasks.find(task => task.id === id);
      if (task) {
        task.description = description;
        return task;
      }
      return null;
    },

    // ✅ Supprimer une tâche
    deleteTask: (_, { id }) => {
      const index = tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        const deletedTask = tasks[index];
        tasks.splice(index, 1);
        return deletedTask;
      }
      return null;
    },
  },
};

module.exports = taskResolver;