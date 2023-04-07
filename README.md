# Super-Simon

![readme_docs/img.png](readme_docs/img.png)

## Source

Justine Martin
https://github.com/justine-martin-dev/SuperSimon

## Régles

**Simon** est un jeu de société électronique de forme circulaire comportant quatre grosses touches de couleurs différentes, rouge, vert, bleu et jaune.

Le jeu, électronique, éclaire une des quatre couleurs et produit un son toujours associé à cette couleur.

Le joueur doit alors appuyer sur la touche de la couleur qui vient de s'allumer dans un délai assez court.

Le jeu répète la même couleur et le même son, puis ajoute au hasard une nouvelle couleur.

Le joueur doit reproduire cette nouvelle séquence.

Chaque fois que le joueur reproduit correctement la séquence, le jeu ajoute une nouvelle couleur.

## Algorithme

* Au départ tous les boutons sont éteints.
* On définit une séquence vide (tableau vide)

* Quand on commence (appui sur start)
  * Tour de l'ordinateur
    * L'ordinateur génère une séquence aléatoire de X étapes (séquence est un tableau d'entiers)
      * sequence = X, X, X, ....
      * sequence = bleu, jaune, bleu, rouge....
    * On lance la séquence
      * Parcours le tableau de séquence
      * On allume la couleur correspondante pour chaque case pendant une durée courte et ensuite on la ré éteint

  * Tour de l'utilisateur
    * On écoute les clics de l'utilisateur et à chaque fois on les compare avec la séquence de l'ordinateur
    * A chaque clic réussi (correspondance avec l'étape de la séquence), on observe l'étape suivante

    * si l'utilistateur se trompe --> Game Over
    * si l'utilisateur réussi -> étape suivante
    * si l'utilisateur réussit toute la séquance, gagné


## Améliorations

- Design
- Jeu à 2 joueurs
- Mémorisation des scores en LocalStorage