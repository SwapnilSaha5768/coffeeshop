import coffee1 from '../assets/coffee-1.png';
import coffee2 from '../assets/coffee-2.png';
import coffee3 from '../assets/coffee-3.png';
import coffee4 from '../assets/coffee-4.png';
import coffee5 from '../assets/coffee-5.png';
import coffee6 from '../assets/coffee-6.png';
import coffee7 from '../assets/coffee-7.png';
import coffee8 from '../assets/coffee-8.png';
import coffee9 from '../assets/coffee-9.png';
import coffee10 from '../assets/coffee-10.png';
import tea1 from '../assets/tea1.png';
import tea2 from '../assets/tea2.png';
import tea3 from '../assets/tea3.png';
import juice1 from '../assets/juice1.png';
import juice2 from '../assets/juice2.png';
import juice3 from '../assets/juice3.png';

export const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'juice', name: 'Juice' },
    { id: 'cake', name: 'Cake' },
];

export const products = [
    {
        id: 1,
        name: 'Espresso',
        category: 'coffee',
        description: 'A concentrated coffee shot, the base for many drinks.',
        price: 3.50,
        rating: 4.8,
        reviews: 1045,
        image: coffee1
    },
    {
        id: 2,
        name: 'Latte',
        category: 'coffee',
        description: 'Espresso with steamed milk and a little foam, often flavored.',
        price: 4.50,
        rating: 4.7,
        reviews: 850,
        image: coffee2
    },
    {
        id: 3,
        name: 'Cappuccino',
        category: 'coffee',
        description: 'Equal parts espresso, steamed milk, and foamed milk.',
        price: 4.50,
        rating: 4.6,
        reviews: 600,
        image: coffee3
    },
    {
        id: 4,
        name: 'Mocha',
        category: 'coffee',
        description: 'A latte with chocolate added.',
        price: 5.00,
        rating: 4.9,
        reviews: 750,
        image: coffee4
    },
    {
        id: 5,
        name: 'Americano',
        category: 'coffee',
        description: 'Espresso diluted with hot water.',
        price: 3.00,
        rating: 4.5,
        reviews: 400,
        image: coffee5
    },
    {
        id: 6,
        name: 'Macchiato',
        category: 'coffee',
        description: 'Espresso "spotted" with a dash of milk or foam.',
        price: 3.80,
        rating: 4.7,
        reviews: 520,
        image: coffee6
    },
    {
        id: 7,
        name: 'Flat White',
        category: 'coffee',
        description: 'Espresso with velvety, steamed milk.',
        price: 4.20,
        rating: 4.8,
        reviews: 300,
        image: coffee7
    },
    {
        id: 8,
        name: 'Cold Brew',
        category: 'coffee',
        description: 'Coffee steeped in cold water for hours, known for smoothness.',
        price: 4.80,
        rating: 4.9,
        reviews: 900,
        image: coffee8
    },
    {
        id: 9,
        name: 'Dalgona Coffee',
        category: 'coffee',
        description: 'Whipped coffee with milk, a viral sensation.',
        price: 5.50,
        rating: 4.6,
        reviews: 1500,
        image: coffee9
    },
    {
        id: 10,
        name: 'Irish Coffee',
        category: 'coffee',
        description: 'Coffee with Irish whiskey, sugar, and cream.',
        price: 6.50,
        rating: 4.8,
        reviews: 200,
        image: coffee10
    },
    // Teas
    {
        id: 11,
        name: 'Roasted Corn Tea',
        category: 'tea',
        description: 'A light, mild, and nutty caffeine-free tea popular in Korea.',
        price: 3.50,
        rating: 4.6,
        reviews: 120,
        image: tea1
    },
    {
        id: 12,
        name: 'Yuzu Citron Tea',
        category: 'tea',
        description: 'Sweet-tart traditional Korean tea made with yuzu citrus and honey.',
        price: 4.00,
        rating: 4.8,
        reviews: 200,
        image: tea2
    },
    {
        id: 13,
        name: 'Rooibos Tea',
        category: 'tea',
        description: 'Full-bodied, nutty, naturally caffeine-free tea from South Africa.',
        price: 4.20,
        rating: 4.7,
        reviews: 150,
        image: tea3
    },
    // Juices
    {
        id: 14,
        name: 'CCA Juice',
        category: 'juice',
        description: 'Cabbage, Carrot, and Apple blend for gut health and energy.',
        price: 5.50,
        rating: 4.7,
        reviews: 80,
        image: juice1
    },
    {
        id: 15,
        name: 'Green Power Juice',
        category: 'juice',
        description: 'Pineapple, Kale, and Cilantro. Tropical sweetness with vitamin punch.',
        price: 5.80,
        rating: 4.6,
        reviews: 95,
        image: juice2
    },
    {
        id: 16,
        name: 'Watermelon Mint',
        category: 'juice',
        description: 'Cooling refresher with watermelon, cucumber, and mint.',
        price: 5.00,
        rating: 4.8,
        reviews: 110,
        image: juice3
    }
];
