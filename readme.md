<!-- Besoin exprimé par le client
Logiciel de tri BigData:
Un client dispose d’une grosse base de donnée statique et souhaite
effectuer des opérations sur celle-ci.

Contraintes techniques
• Développement en Javascript et node.
• Ne pas utiliser de fonction de tri ou de recherche disponible en
NodeJS ni Library externe
• Commentaire et/ou code self-explanatory.
• Le code doit être mis sur Github.

Recommandations organisationnelles
• Utilisation d’un Trello.
• Groupe de 3 personnes, voir les groupes sur Blackboard.
• Des commits réguliers, 1 par story par exemple.

Notation

Des points sont donnés pour chaque story remplie.
Une partie de la notation sera faite sur son temps d’exécution de chaque story sur
différents échantillons (échelle logarithmique pour le temps et les échantillons (1s,
10s,100s,1,10,100 etc…)

Des points seront enlevés pour chaque bug constaté lors de la démo.
Le plagia évident (j’ai accès au Github n’oubliez pas) et les discordes de groupe si j’ai
besoin d’intervenir) seront pénalisés.
Points complémentaires seront attribués sur:
1) Clarté du code. (Utilisation de fonctions, commentaires etc…)
2) Clarté des commits. (Commentaire de commits. Pas tous les commits au dernier
moment)
La notation pourra être ajustée mais cela vous donne un ordre d’idée.
Ce qui est attendu
45
1) Préparer la démo de chaque story que vous aurez réalisée (~20 min par
groupe) pour vendredi.
2) Le lien vers le GitHub du projet.
3) Uploader le zip de votre projet sur Blackboard (au cas où je n’aie pas
accès a github).



Stories


Story 1: CMD application
47
EN TANT QUE Client
JE VEUX avoir une application en ligne de commande qui me permette d’effectuer des opérations
AFIN DE pouvoir effectuer des benchmarks simplement.

Definition of Done
L’application se ferme après avoir effectué l’action demandée.
Une application en lignes de commande au format suivant:
« node index.js –action <une_action> »


Story 2: File management
48
EN TANT QUE Client
JE VEUX avoir une application en lignes de commande qui me permette de transformer un fichier json donné au format movies.json
AFIN DE pouvoir ajouter l’année de parution dans le titre en utilisant l’information « realease_date » en secondes dans le fichier JSON.
Definition of Done
Une application en ligne de commande au format suivant:
« node index.js –action transform ./movies.json movies.out.json»
Format json entrée et sortie:
[{"title":"The Fraudulent Beggar 1","release_date": 1553299200}]
[{"title":"The Fraudulent Beggar 1 (1901)","release_date": 1553299200}]


Story 3: Benchmark
49
EN TANT QUE Client
JE VEUX que l’application affiche des informations de benchmark
AFIN DE pouvoir avoir des informations sur la rapidité du programme
Definition of Done
Log de benchmark après chaque action. Afficher le temps d’exécution en
ms dans la console.


Story 4: Trier les données
50
EN TANT QUE Client
JE VEUX trier les données de mon fichier json par date croissante ou par ordre
alphabétique sur le titre.
AFIN DE pouvoir visualiser rapidement des données de manière ordonnée
Definition of Done
On attend en sortie un fichier JSON trié
« node index.js –action sort_date ./movies.json ./movies.sort.date.json»
« node index.js –action sort_titre ./movies.json ./movies.sort.titre.json»
Utilisez les algorithmes de tri que vous avez implémentés


Story 5: Trouver des films par date
51
EN TANT QUE Client
JE VEUX trouver tout les films d’une année donnée.
AFIN DE pouvoir afficher rapidement mes données dans un gros fichier JSON.
Definition of Done
Ecrit les titres des films correspondant au résultat dans la console.
« node index.js –action search_date ./movies.json <year> <sorted>»
<sorted> valeur « true » si le fichier est trié ou « false »
Le programme doit pouvoir prendre en compte le fait qu’un fichier json est trié ou non
Utilisez le fait que le fichier json soit trié si tel est le cas
Dans le cas où les données sont triées, l’algorithme attendu est O(log(N)). Dans le cas où les données ne
sont pas triées l’algorithme attendu O(N). Comparez les temps.
Dans le cas où les données sont triées vous pouvez utiliser une recherche dichotomique pour
améliorer votre algorithme.


Story 6 : Trouver un mot clé dans la description
52
EN TANT QUE Client
JE VEUX trouver le film le plus récent dans un genre donné dont la description
contient un mot clé donné.
AFIN DE pouvoir afficher rapidement mes données dans un gros fichier JSON.
Definition of Done
Ecrit les titres des films correspondant au résultat dans la console.
« node index.js –action search_key_word ./movies.json <key_word> <genre> »
L’algorithme attendu ne doit pas être plus que O(N).  -->