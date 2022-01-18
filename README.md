# étape

[DONE] je récupère mes questions et mes réponses
[DONE] je tri les données récupérés via l'API, et les ajoute au state
[DONE] j'envoi les réponses (correcte et incorrecte) dans mon component <Answer />
[DONE] j'ajoute ces réponses d'un un même objet et les enregistre dans le state de chaque component (A REFLECHIR, CAR JE SAIS PAS SI OK D'AVOIR UN STATE DIFFERENT PAR COMPONENT, PEUT ETRE JE DEVRAIS TOUS AVOIR DANS LE STATE DE INDEX ET REPARTIR ENSUITE VIA LES PROPS) === UPDATE (EFFECTIVEMENT LE FAIT D'AVOIR UN STATE PAR COMPONENT ETAIT UN SOUCIS AU MOMENT DE VALIDER LES REPONSES, J4AI DU MONTER LE STATE DANS LE COMPONENT PARENT ET RENDRE CHAQUE INFO AVEC CHAQUE CHILDREN COMPOMENT)

[DONE] actuellement, les questions (ok et pas ok), sont dans un tableau, et je les affiches via le component <Answer />, le soucis est que pour le moment la bonne réponse est toujours à l'index [0]. TROUVER UN SOLUTION POUR "MELANGER" CE TABLEAU AVANT DE RENDER LES REPONSES ?

[DONE] faire un peu de style avant de passer à la validation des questions.

# etape pour valider les reponses

[] permettre à l'utilisateur de cliquer sur une réponse

- [] la mettre en surbrillance
- [] enregistrer son choix (isHeld ?)
