import image1 from './assets/Brioche_Cat.png'
import image2 from './assets/Burger_Cat.png'
import image4 from './assets/Shakshuka_Cat.png'
import image5 from './assets/Duo_Bowl.png'
import image6 from './assets/Brunch.png'
import Brioche1 from './assets/Brioche_gambas.png'
import Brioche2 from './assets/Brioche_Truffe.png'
import Brioche3 from './assets/Brioche_viande.png'
import Tacos1 from './assets/Tacos_Chicken.png'
import Tacos2 from './assets/Tacos_Viande.png'
import Tacos3 from './assets/Tacos_Gambas.png'
import Shakshuka1 from './assets/Red_Shakshuka.png'
import Shakshuka2 from './assets/Shakshuka_yaourt.png'
import Clasique from './assets/Clasique.png'
import Beldi from './assets/Beldi.png'
import Kids from './assets/Kids.png'
import Gourmand from './assets/Gourmand.png'



const productsList = [
    {
        product_name : 'BRIOCHE AVOCAT GAMBAS',
        product_description : 'Pain biroché, Gambas, avocat, Oeaufs brouillés, emmental et sauce maison',
        product_category : 'BRIOCHE',
        product_image : Brioche1,
        product_price : 'DH79'
    },
    {
        product_name : 'BRIOCHE TRUFFE',
        product_description : 'Pain brioché, Champignons, sautes à la truffe Oeufs brouillés et Créme de truffe',
        product_category : 'BRIOCHE',
        product_image : Brioche2,
        product_price : 'DH69'
    },
    {
        product_name : 'BRIOCHE JAMBON',
        product_description : 'Pain brioché, Jambon, Oeufs brouillés, Cheddar, Sauce maison',
        product_category : 'BRIOCHE',
        product_image : image1,
        product_price : 'DH69'
    },
    {
        product_name : 'BRIOCHE VIANDE',
        product_description : 'Pain brioché, Oeufs au plat, viande hachée, Cheddar, Sauce maison',
        product_category : 'BRIOCHE',
        product_image : Brioche3,
        product_price : 'DH79'
    },
    {
        product_name : 'BURGER VIANDE',
        product_description : '2 Minis burgers, Oignons caramélisés, Cheddar, Viande hachée, Sauce hollandaise',
        product_category : 'BURGER',
        product_image : image2,
        product_price : 'DH65'
    },
    {
        product_name : 'BURGER CHICKEN',
        product_description : '2 Minis burgers, Poulet frit, Cheddar, Sauce Fromagère',
        product_category : 'BURGER',
        product_image : image2,
        product_price : 'DH65'
    },
    {
        product_name : 'TACOS CHICKEN FRIT',
        product_description : 'Poulet Frit, Coleslaw, Radis, Sauce Maison, Cheddar Fondu',
        product_category : 'TRES TACOS',
        product_image : Tacos1,
        product_price : 'DH69'
    },
    {
        product_name : 'TACOS VIANDE',
        product_description : 'Emincé de boeuf mariné, duxelles de tomate et salade verte, Sauce yahourt',
        product_category : 'TRES TACOS',
        product_image : Tacos2,
        product_price : 'DH79'
    },
    {
        product_name : 'TACOS GAMBAS',
        product_description : 'Guacamole, Sauce maison, Gambas mariné',
        product_category : 'TRES TACOS',
        product_image : Tacos3,
        product_price : 'DH79'
    },
    {
        product_name : 'GREEN SHAKSHUKA',
        product_description : "Deux oeufs au plat - Servis dans une poêl accompagnés d'épinards, Champignons et fromage grec",
        product_category : 'SHAKSHUKA',
        product_image : image4,
        product_price : 'DH69'
    },
    {
        product_name : 'RED SHAKSHUKA',
        product_description : 'Deux Oeufs au plat Servis dans une poêl accompagnés de tomates, poivrons et herbes fromage grec',
        product_category : 'SHAKSHUKA',
        product_image : Shakshuka1,
        product_price : 'DH59'
    },
    {
        product_name : 'YAOURT SHAKSHUKA',
        product_description : "Oeuf frit servi dans une poêl accompagné d'une sauce yahourt et fromage grec et une sauce maison",
        product_category : 'SHAKSHUKA',
        product_image : Shakshuka2,
        product_price : 'DH59'
    },
    {
        product_name : 'DUO BOWL',
        product_description : 'Tomate cerise, Mesclun de salades, Champignons sautes, Pommes de terre sautees, Avocat, Saumon, Oeufs Brouilles au Fromage',
        product_category : 'DUO BOWL',
        product_image : image5,
        product_price : 'DH90'
    },
    {
        product_name : 'LE DUO BREAKFAST',
        product_description : '2 Oeuf brouilles au fromage, Pain toaste, Pancake nutella, Galettes de pomme de terre, Fruits de saison decoupes',
        product_category : 'BREAKFAST',
        product_image : image6,
        product_price : 'DH55'
    },
    {
        product_name : 'GOURMAND BREAKFAST',
        product_description : 'Omlette espagnole, Pain toaste, Pancake caramel, Galettes de pomme de terre, Fruits de saison decoupes',
        product_category : 'BREAKFAST',
        product_image : Gourmand,
        product_price : 'DH59'
    },
    {
        product_name : 'BELDI BREAKFAST',
        product_description : '2Oeufs au khlii, 1 msemen, 1 Harcha, Fromage et miel',
        product_category : 'BREAKFAST',
        product_image : Beldi,
        product_price : 'DH49'
    },
    {
        product_name : 'CLASSIQUE BREAKFAST',
        product_description : '2Oeufs au plat, Pancake au sucre glace, Pain toaste, Galettes de pomme de terre, Fruits de saison decoupes',
        product_category : 'BREAKFAST',
        product_image : Clasique,
        product_price : 'DH45'
    },
    {
        product_name : 'MENU KIDS',
        product_description : 'Pancakes Nutella avec Lait au chocolat et surprise',
        product_category : 'BREAKFAST',
        product_image : Kids,
        product_price : 'DH30'
    },
    {
        product_name : 'PANCAKES DUO',
        product_description : '',
        product_category : 'BREAKFAST',
        product_image : image6,
        product_price : 'DH30'
    },

]
export default productsList