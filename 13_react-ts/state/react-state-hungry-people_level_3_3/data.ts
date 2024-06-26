type MenuItem = {
    category: string;
    name: string;
    price: string;
    description?: string;
};

const hungryData: MenuItem[] = [

    {
        category: "pizza",
        name: "Pizza Margherita",
        price: "4,70 €",
        description: "Tomaten und Käse",
    },
    {
        category: "pizza",
        name: "Pizza Salami",
        price: "6,00 €",
        description: "Salami",
    },
    {
        category: "pizza",
        name: "Pizza Prosciutto",
        price: "6,50 €",
        description: "Vorderschinken",
    },
    {
        category: "pizza",
        name: "Pizza Spinaci",
        price: "6,50 €",
        description: "Spinat",
    },
    {
        category: "pizza",
        name: "Pizza Stagione",
        price: "8,50 €",
        description: "Vorderschinken, Spinat, Champignons, Thunfisch",
    },
    {
        category: "pizza",
        name: "Pizza Tonno",
        price: "8,50 €",
        description: "Thunfisch",
    },
    {
        category: "pizza",
        name: "Pizza Inferno",
        price: "7,50 €",
        description: "Paprika, Salami, scharf",
    },
    {
        category: "pizza",
        name: "Pizza Diavolo",
        price: "7,50 €",
        description: "Paprika, Zwiebeln, Oliven",
    },
    {
        category: "pizza",
        name: "Pizza Bolognese",
        price: "7,50 €",
        description: "Sauce Bolognese",
    },
    {
        category: "pizza",
        name: "Pizza Valentino",
        price: "8,70 €",
        description: "Paprika, Champignons, Thunfisch, Eier",
    },
    {
        category: "pizza",
        name: "Pizza Cipolla",
        price: "6,50 €",
        description: "Zwiebeln",
    },
    {
        category: "pizza",
        name: "Pizza Carciofi",
        price: "6,50 €",
        description: "Artischocken",
    },
    {
        category: "pasta",
        name: "Spaghetti Gorgonzola",
        price: "8,50 €",
        description: "Zucchini und Gorgonzola in feiner Sahnesauce",
    },
    {
        category: "pasta",
        name: "Spaghetti Bolognese",
        price: "7,00 €",
        description: "Würzige Hackfleischsauce mit frischen Tomaten",
    },
    {
        category: "pasta",
        name: "Spaghetti Carbonara",
        price: "7,00 €",
        description: "Vorderschinken",
    },
    {
        category: "pasta",
        name: "Tortellini Bolognese",
        price: "8,00 €",
        description: "Gehacktessauce",
    },
    {
        category: "pasta",
        name: "Penne „ai formaggi“",
        price: "8,50 €",
        description: "verschiedene Käsesorten",
    },
    {
        category: "pasta",
        name: "Spa. Aglio Olio Peperoncino",
        price: "7,00 €",
        description: "Öl, Knoblauch, Peperoni",
    },
    {
        category: "dessert",
        name: "Tiramisu",
        price: "5,60 €",
    },
    {
        category: "dessert",
        name: "Panna cotta",
        price: "5,60 €",
    },
    {
        category: "getränke",
        name: "Peroni",
        price: "3,10 €",
        description: "0,33l",
    },
    {
        category: "getränke",
        name: "San Pellegrino oder Acqua Panna",
        price: "6,10 €",
        description: "0,75l",
    },
    {
        category: "getränke",
        name: "Coca Cola",
        price: "2,70 €",
        description: "1,00 l Coffeinhaltig",
    },
    {
        category: "getränke",
        name: "Mineralwasser",
        price: "2,10 €",
        description: "0,20l",
    },
    {
        category: "getränke",
        name: "Cola Zero oder Fanta",
        price: "3,10 €",
        description: "Cola Zero Coffeinhaltig",
    },
];

export default hungryData;