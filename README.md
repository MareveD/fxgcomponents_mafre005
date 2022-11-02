# fxgcomponents_mafre005

## Description

Bibliothèque de 10 composantes React réutilisables basées sur Bootstrap, Ant Design et MUI. 

**Liste des composantes :**
- [ButtonColor](#buttoncolor)
- [ButtonSize](#buttonsize)
- [ButtonType](#buttontype)
- [Card](#card)
- [DisplayFlex](#displayflex)
- [DropDownMenu](#dropdownmenu)
- [Height](#height)
- [Rating](#rating)
- [Select](#select)
- [Width](#width)

--------------------------------

## Version courante & versions antérieures

**Version courante :**
- Version 1.0.4 : Ajustements aux readme.md.

**Versions antérieures :**
- Version 1.0.3 : Ajout du readme.md relatif aux composantes.
- Version 1.0.2 : Ajout du .gitignore
- Version 1.0.1 : Test d'incrementation de la version

--------------------------------

## Installation

Vous pouvez installer le package via npm :

```
npm i fxgcomponents_mafre005
```

Entrez la commande suivante dans le terminal afin d'installer les packages npm nécessaires :

```
npm install
```

--------------------------------

## Composantes
### ButtonColor
**Description sommaire :**
- À l’aide de la bibliothèque **react-bootstrap**, nous pouvons changer la couleur d’un bouton. 

**Propriété(s) déterminée(s) :**
- variantType : string /// ajuste la propriété 'variant' prédéterminée de Bootstrap.

**Exemple :**
```
export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  variantType: "primary",
}
```

**Résultats :**
- variant : 'primary' /// résultat : bleu
- variant : 'success' /// résultat : vert
- variant : 'warning' /// résultat : jaune

![ButtonColor_Primary](https://user-images.githubusercontent.com/93406912/199367497-4743c224-5778-4030-bfb1-45e8b0aa8c72.PNG) ![ButtonColor_Success](https://user-images.githubusercontent.com/93406912/199367516-2ac3aa65-324c-4f67-8014-3616a56bd418.PNG) ![ButtonColor_warning](https://user-images.githubusercontent.com/93406912/199367528-b3a711af-b7ba-4a52-a388-50f4dc0fefdf.PNG)

--------------------------------

### ButtonSize
**Description sommaire :**
- À l’aide de la bibliothèque react-bootstrap, nous pouvons changer la grandeur d’un bouton. 
- Il est possible d'appliquer également la propriété variantType ci-haut expliquée.

**Propriété(s) déterminée(s) :**
- variantType : string /// ajuste la propriété 'variant' prédéterminée de Bootstrap.
- sizeType : string /// ajuste la propriété 'size' prédéterminée de Bootstrap.

**Exemple :**
```
export const SmallButton = Template.bind({})
SmallButton.args = {
  variantType: "primary",
  sizeType: "sm"
}
```

**Résultats :**
- size : 'sm' /// résultat : small
- size : 'md' /// résultat : medium
- size : 'lg' /// résultat : large

--------------------------------

### ButtonType
**Description sommaire :**
- À l’aide de la bibliothèque react-bootstrap, nous pouvons changer le type et la valeur d'un bouton. 

**Propriété(s) déterminée(s) :**
- typeType : string /// ajuste la propriété 'type' prédéterminée de Bootstrap.
- valueType : string /// ajuste la propriété 'value' prédéterminée de Bootstrap.

**Exemple :**
```
export const ResetButton = Template.bind({})
ResetButton.args = {
  typeType: "reset",
  valueType: "reset"
}
```

**Résultats :**
- type & value : 'button' /// résultat : default button (style de bouton par défaut)
- type & value : 'submit' /// résultat : submit button (style de bouton d'envoi)
- type & value : 'reset' /// résultat : reset button (style de bouton de remise à zéro)

--------------------------------

### Card
**Description sommaire :**
Carte Ant Design présentée en taille par défaut, en taille petite et en taille par défaut sans l'entête.
Si les propriétés *title* et *extra* sont absentes, la carte n'aura pas d'entête.

**Propriété(s) déterminée(s) :**
- size : string /// ajuste la propriété 'size' prédéterminée de Bootstrap. Il ne peut être paramétré qu'avec "small", sinon il sera paramétré par défaut.
- title : string /// détermine le titre dans le header.
- extra : string /// permet d'ajouter un lien *href*.
- width : number /// permet d'ajuster la largeur de la carte en pixels.

**Exemple :**
```
export const SmallSize = Template.bind({});
SmallSize.args = {
    size: "small",
    title: "Small Size",
    extra: <a href="#">More</a>,
    width: 300
}
```

**Résultats :**
- size : 'small' /// résultat : la taille de la carte sera petite
- size : '' /// résultat : la taille de la carte sera par défaut
- title & extra : '' /// résultat : La carte n'aura pas de header
--------------------------------

### DisplayFlex
**Description sommaire :**
Cadre de taille ajustable pouvant contenir plusieurs images. Le cadre est présenté avec des images de petites, moyennes et de grandes tailles.

**Propriété(s) déterminée(s) :**
- imagesurl : array /// affiche les images.
- width : number /// ajuste la largeur des images.
- height : number /// ajuste la hauteur des images.
- size : string //// ajuste la largeur du cadre


**Exemple :**
```
export const Medium = Template.bind({});
Medium.args = {
  imagesurl: img,
  width: 300,
  height: 200,
  size: "md"
};
```

**Résultats :**
- width : 300 /// résultat : largeur des images de 300 pixels
- height : 200 /// résultat : hauteur des images de 300 pixels
- size : 'md' /// résultat : largeur du cadre de 1rem

--------------------------------

### DropDownMenu
**Description sommaire :**
Menu de liens Ant Design déroulable (dropdown). Présenté avec des liens fonctionnels, des liens non fonctionnels et des liens en rouge pour avertir d'un danger.

**Propriété(s) déterminée(s) :**
- text : string /// détermine le titre du menu.
- linkDisabled : boolean /// si à true, les liens sont non fonctionnels.
- dangerEnable : boolean //// si à true, les liens et le menu seront rouges.

**Exemple :**
```
export const LinksEnabled = Template.bind({});
LinksEnabled.args = {
  text: "Links Enabled",
  linkDisabled: false,
  dangerEnable: false
};
```

**Résultats :**
- text : "Links Enabled" /// résultat : le nom du menu sera *Links Enabled*
- linkDisabled : false /// résultat : les liens seront fonctionnels
- dangerEnable : false /// résultat : le menu et ses liens seront à la couleur par défaut

--------------------------------

### Height
**Description sommaire :**
- Gestion de la hauteur d'images, grâce à Ant Design. Trois tailles sont préprogrammées (La largeur est proportionnelle).

**Propriété(s) déterminée(s) :**
- height : number /// ajuste la hauteur de l'image.
- imagesurl : array /// affiche les images.

**Exemple :**
```
export const MediumH = Template.bind({});
MediumH.args = {
  imagesurl: img,
  height: 300
};
```

**Résultats :**
- height : 150 /// résultat : hauteur de 150 pixels
- height : 300 /// résultat : hauteur de 300 pixels
- height : 450 /// résultat : hauteur de 450 pixels

--------------------------------

### Rating
**Description sommaire :**
Stack MUI d'icônes d'étoiles dynamiques pour évaluer un produit. Présenté en 3 tailles différentes (petite, par défaut et grande)

**Propriété(s) déterminée(s) :**
- name : string /// détermine le nom du rating
- size : string /// détermine la taille du rating. Si vide, la taille sera par défaut.

**Exemple :**
```
export const Small = Template.bind({});
Small.args = {
    name: "small",
    size: "small"
};
```

**Résultats :**
- name : "small" /// résultat : le nom du rating est *small*
- size : "small" /// résultat : la taille du rating sera petite

--------------------------------

### Select
**Description sommaire :**
Champ de type select par MUI. Le premier est désactivé, le second est en rouge et signale une erreur et le troisième est un champ requis.

**Propriété(s) déterminée(s) :**
- disabled : boolean /// détermine si le champ est activé
- error : boolean /// détermine si le champ signale une erreur
- text : string /// détermine le texte en dessous du champ
- label : string /// détermine le label du champ

**Exemple :**
```
export const Error = Template.bind({});
Error.args = {
    disabled: false,
    error: true,
    text: "Error",
    label: "Age"
};
```

**Résultats :**
- disabled : false /// résultat : le champ sera activé
- error : true /// résultat : le champ signale une erreur
- text : "Error" /// résultat : le texte dessous le champ est *Error*
- label : "Age" /// résultat : le label au dessus du champ sera *Age*

--------------------------------

### Width
**Description sommaire :**
- Gestion de la largeur d'images, grâce à Ant Design. Trois tailles sont préprogrammées (La hauteur est proportionnelle).

**Propriété(s) déterminée(s) :**
- width : number /// ajuste la largeur de l'image.
- imagesurl : array /// affiche les images.

**Exemple :**
```
export const LargeW = Template.bind({});
LargeW.args = {
  imagesurl: img,
  width: 450,
};
```

**Résultats :**
- width : 150 /// résultat : largeur de 150 pixels
- width : 300 /// résultat : largeur de 300 pixels
- width : 450 /// résultat : largeur de 450 pixels

--------------------------------
