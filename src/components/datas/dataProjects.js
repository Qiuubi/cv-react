const dataProjects = {
    proTitle: "Projets professionnels",
    pro: [
        {
            number: 1,
            title: "Occitech",
            description: "Développement d'une application de gestion et de logistique qui vise à organiser et optimiser les tournées de livraison de marchandises pour les entreprises de transport et de livraison",
            tasks: [
                { id: 1, content: "Communication avec une API externe pour recueillir les données et conversion en données intelligibles pour la base de données interne" },
                { id: 2, content: "Mécanisme d’évènements pour notifier le changement de statut d’une commande et celui d’une livraison" },
                { id: 3, content: "Mise à jour du système permettant de prendre au moins deux photos d’une marchandise au moment de la réception" },
                { id: 4, content: "Création d’une instance et environnement pour un nouveau transporteur : création d’un site, mise en place authentification A2F et mise en place de Mailhog et de base de données (préproduction et production)" },
                { id: 5, content: "Amélioration de l’interface visuelle de l’application (affichage et ajouts des statuts des commandes" },
                { id: 6, content: "Tests unitaires effectués sur PHPUnit" },
                { id: 7, content: "Tests mails effectués sur MailHog" },
                { id: 8, content: "Versionnage effectué sur GitHub" },
                { id: 9, content: "Intégration continue, tests et déploiements sur Jenkins" },
                { id: 10, content: "Suivi des logs et erreurs sur Sentry" },
            ],
            techs: [
                { id: 1, name: "Langages", content: "PHP, JavaScript" },
                { id: 2, name: "Frameworks", content: "CakePHP, React JS (modules Mui, Formik)" },
                { id: 3, name: "BDD/Serveur", content: "MySQL, MariaDB, Apache" },
                { id: 4, name: "Intégration continue", content: "Jenkins, Docker" },
                { id: 5, name: "Outils/Système", content: "VSCode, Git, Linux Manjaro" },
            ]
        },
        {
            number: 2,
            title: "Fragrances et Beauté Françaises",
            description: "Création et maintenance de sites e-commerce Shopify",
            tasks: [
                { id: 1, content: "Mise à jour des pages produits (contenu et images)" },
                { id: 2, content: "Mécanisme d’évènements pour notifier le changement de statut d’une commande et celui d’une livraison" },
                { id: 3, content: "Mise en place de bannières de cookies" },
                { id: 4, content: 'Création d’un nouveau site Shopify de vente' }
            ],
            techs: [
                { id: 1, name: "Langages", content: "HTML CSS JavaScript, Ruby, Liquid" },
                { id: 2, name: "Frameworks", content: "Shopify" },
                { id: 3, name: "Outils/Système", content: "VSCode, Git, MacOS" },
            ]
        },
        {
            number: 3,
            title: null,
            description: "Développement d'une application servant de registre RGPD pour cartographier tous les traitements de données personnelles au sein de l'entreprise ",
            tasks: [
                { id: 1, content: "Affichage d’un registre RGPD sous forme d’un tableau" },
                { id: 2, content: "Ajout d’un traitement de données personnelles et mise à jour du contenu par voie de fomulaires" },
                { id: 3, content: "Système de création et de gestion de comptes pour gérer le contenu" },
                { id: 4, content: "Tests unitaires effectués sur PHPUnit" }
            ],
            techs: [
                { id: 1, name: "Langages", content: "HTML CSS JavaScript, PHP" },
                { id: 2, name: "Frameworks", content: "Symfony" },
                { id: 3, name: "Outils/Système", content: "VSCode, Git, MacOS, MAMP" },
            ]
        },
        {
            number: 4,
            title: null,
            description: "Développement d'une contrathèque pour avoir aperçu global en une page sur toutes les relations commerciales entre entreprises",
            tasks: [
                { id: 1, content: "Affichage d’un dashboard pour vue d’ensemble des contrats et leur durée de vie" },
                { id: 2, content: "Ajout d’un contrat, mise à jour du contenu, notification en cas d’approche du terme" },
                { id: 3, content: "Système d’authentification pour permettre au juriste ou à un responsable d’ajouter un contrat ou modifier les informations relatives à son contenu" },
                { id: 4, content: "Tests unitaires effectués sur PHPUnit" }
            ],
            techs: [
                { id: 1, name: "Langages", content: "HTML CSS JavaScript, PHP" },
                { id: 2, name: "Frameworks", content: "Symfony" },
                { id: 3, name: "Outils/Système", content: "VSCode, Git, MacOS, MAMP" },
            ]
        },
    ],
    persoTitle: "Projets personnels",
    perso: [
        {
            number: 1,
            title: "Galerie d'art",
            description: "Étant illustrateur et passionné d’art initialement, le projet vise à exposer mes dessins de la même manière qu’une galerie d’art ou de musée.Chaque dessin a une histoire et est rapporté à plusieurs thèmes qui se rejoignent à celui du voyage(aérien, sous- marin, spatial).Le projet est également un prétexte pour approfondir ma formation sur Symfony et React.js",
            tasks: [
                { id: 1, content: "Maquettes et illustrations en cours de création" },
                { id: 2, content: "Création et gestion de la base de données" },
                { id: 3, content: "Utilisation d’un carrousel" },
                { id: 4, content: "Affichage de l’avancement du dessin (« work in progress »)" },
                { id: 5, content: "Mise en place système de messagerie entre l’artiste et le client" }
            ],
            techs: [
                { id: 1, name: "Langages", content: "HTML CSS, PHP, JavaScript" },
                { id: 2, name: "Frameworks", content: "Symfony, React.js<" },
                { id: 3, name: "BDD/Serveur", content: "MySQL, MariaDB, Apache" },
                { id: 4, name: "Intégration continue", content: "Jenkins, Docker" },
                { id: 5, name: "Outils/Système", content: "VSCode, Git, MacOS, Linux ultérieurement" },
            ]
        },
        {
            number: 2,
            title: "Vidéoludothèque",
            description: "Étant un passionné de jeux vidéo, le projet vise à avoir une vue d’ensemble de sa vidéoludothèque, la progression dans chaque jeu, les statistiques et l’évolution des personnages dont la gestion se fera par la casuistique.Le projet est également un prétexte pour approfondir ma formation sur Laravel et React.js. ",
            tasks: [
                { id: 1, content: "Maquettes et illustrations en cours de création" },
                { id: 2, content: "Création et gestion de la base de données" },
                { id: 3, content: "Affichage de l’avancement du jeu" },
                { id: 4, content: "Mise en place système de communication avec une API externe pour obtenir des données statistiques" },
            ],
            techs: [
                { id: 1, name: "Langages", content: "HTML CSS, PHP, JavaScript" },
                { id: 2, name: "Frameworks", content: "Laravel, React.js" },
                { id: 3, name: "BDD/Serveur", content: "MySQL, MariaDB, Apache" },
                { id: 4, name: "Intégration continue", content: "Jenkins, Docker" },
                { id: 5, name: "Outils/Système", content: "VSCode, Git, MacOS, Linux ultérieurement" },
            ]
        },
    ]
}

export default dataProjects;