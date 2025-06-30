import { Restaurant, TrainRoute, User, Agent } from './types';

export const MOCK_USERS: User[] = [
    { id: 100, mobile: '1111111111', role: 'vendor', name: 'Sattvik Rasoi Manager', restaurantId: 1 },
    { id: 101, mobile: '2222222222', role: 'vendor', name: 'Jainam Kitchen Manager', restaurantId: 2 },
    { id: 200, mobile: '5555555555', role: 'agent', name: 'Raju Kumar', agentId: 1 },
    { id: 201, mobile: '6666666666', role: 'agent', name: 'Sunita Sharma', agentId: 2 },
    { id: 300, mobile: '9999999999', role: 'admin', name: 'Super Admin' },
    { id: 400, mobile: '1234567890', role: 'customer', name: 'Test Customer', email: 'customer@test.com' },
];

export const MOCK_AGENTS: Agent[] = [
    { id: 1, name: 'Raju Kumar' },
    { id: 2, name: 'Sunita Sharma' },
    { id: 3, name: 'Anil Singh' },
];

export const MOCK_RESTAURANTS: Restaurant[] = [
    {
        id: 1,
        name: "Sattvik Rasoi",
        station: "New Delhi (NDLS)",
        stationCode: "NDLS",
        deliveryTime: "30-45 min",
        rating: 4.8,
        cuisine: "North Indian, Jain",
        image: "https://picsum.photos/seed/jainthali/400/300",
        menu: [
            { id: 101, name: "Jain Shahi Paneer", description: "Creamy cashew gravy without onion or garlic.", price: 360, veg: true, image: "https://picsum.photos/seed/jainpaneer/200/200" },
            { id: 102, name: "Kele ki Sabzi", description: "Spicy raw banana curry, a perfect Jain dish.", price: 280, veg: true, image: "https://picsum.photos/seed/jainbanana/200/200" },
            { id: 103, name: "Jain Dal Tadka", description: "Yellow lentils tempered with cumin and tomato.", price: 240, veg: true, image: "https://picsum.photos/seed/jaindal/200/200" },
            { id: 104, name: "Tawa Roti", description: "Simple whole wheat flatbread.", price: 40, veg: true, image: "https://picsum.photos/seed/roti/200/200" },
        ],
    },
    {
        id: 2,
        name: "Jainam Kitchen",
        station: "Mumbai Central (BCT)",
        stationCode: "BCT",
        deliveryTime: "25-35 min",
        rating: 4.9,
        cuisine: "Gujarati, Kathiyawadi, Jain",
        image: "https://picsum.photos/seed/pavbhaji/400/300",
        menu: [
            { id: 201, name: "Jain Pav Bhaji", description: "Vegetable mash with spices, no root vegetables.", price: 250, veg: true, image: "https://picsum.photos/seed/jainpavbhaji/200/200" },
            { id: 202, name: "Jain Thali", description: "2 sabzis, dal, rice, roti - all Jain style.", price: 380, veg: true, image: "https://picsum.photos/seed/jainthali2/200/200" },
            { id: 203, name: "Gatte ki Sabzi", description: "Gram flour dumplings in a tangy yogurt gravy.", price: 300, veg: true, image: "https://picsum.photos/seed/gatte/200/200" },
            { id: 204, name: "Masala Khichdi (Jain)", description: "Rice and lentils with mild spices and vegetables.", price: 220, veg: true, image: "https://picsum.photos/seed/jainkhichdi/200/200" },
        ],
    },
    {
        id: 3,
        name: "Parampara Pure Veg",
        station: "Chennai Central (MAS)",
        stationCode: "MAS",
        deliveryTime: "20-30 min",
        rating: 4.7,
        cuisine: "South Indian, Jain",
        image: "https://picsum.photos/seed/jaindosa/400/300",
        menu: [
            { id: 301, name: "Jain Masala Dosa", description: "Crispy crepe with a raw banana filling.", price: 180, veg: true, image: "https://picsum.photos/seed/jainmasaladosa/200/200" },
            { id: 302, name: "Jain Sambar Idli", description: "Steamed rice cakes in Jain sambar (no root veg).", price: 150, veg: true, image: "https://picsum.photos/seed/jainidli/200/200" },
            { id: 303, name: "Jain Uttapam", description: "Thick pancake with tomato, capsicum, and coriander.", price: 200, veg: true, image: "https://picsum.photos/seed/jainuttapam/200/200" },
            { id: 304, name: "Lemon Rice", description: "Flavorful rice tempered with lemon and spices.", price: 160, veg: true, image: "https://picsum.photos/seed/lemonrice/200/200" },
        ],
    },
     {
        id: 4,
        name: "Shuddh Bhojan",
        station: "New Delhi (NDLS)",
        stationCode: "NDLS",
        deliveryTime: "35-45 min",
        rating: 4.6,
        cuisine: "Jain, Thali",
        image: "https://picsum.photos/seed/pureveg/400/300",
        menu: [
            { id: 401, name: "Jain Chana Masala", description: "Chickpeas in tomato gravy, no onion or garlic.", price: 320, veg: true, image: "https://picsum.photos/seed/jainchana/200/200" },
            { id: 402, name: "Bhindi Masala (Jain)", description: "Okra stir-fried with spices, Jain style.", price: 290, veg: true, image: "https://picsum.photos/seed/jainbhindi/200/200" },
        ],
    },
];

export const MOCK_TRAIN_ROUTES: TrainRoute[] = [
    {
        trainNo: '12951', // Mumbai - New Delhi Rajdhani
        stations: [
            { id: 1, name: "Mumbai Central", code: "BCT", arrivalTime: "17:00", hasService: true },
            { id: 2, name: "Surat", code: "ST", arrivalTime: "19:43", hasService: false },
            { id: 3, name: "Vadodara", code: "BRC", arrivalTime: "21:06", hasService: false },
            { id: 4, name: "Kota", code: "KOTA", arrivalTime: "02:15", hasService: false },
            { id: 5, name: "New Delhi", code: "NDLS", arrivalTime: "08:30", hasService: true },
        ]
    },
    {
        trainNo: '12345', // A generic train for PNR search demo
        stations: [
            { id: 1, name: "Howrah Jn", code: "HWH", arrivalTime: "08:00", hasService: false },
            { id: 2, name: "Asansol Jn", code: "ASN", arrivalTime: "10:30", hasService: false },
            { id: 3, name: "Patna Jn", code: "PNBE", arrivalTime: "15:00", hasService: false },
            { id: 4, name: "Mughal Sarai", code: "MGS", arrivalTime: "18:30", hasService: false },
            { id: 5, name: "New Delhi", code: "NDLS", arrivalTime: "04:00", hasService: true },
        ]
    },
    {
        trainNo: '22691', // Bengaluru - Delhi Rajdhani
        stations: [
            { id: 1, name: "KSR Bengaluru", code: "SBC", arrivalTime: "20:00", hasService: false },
            { id: 2, name: "Secunderabad Jn", code: "SC", arrivalTime: "07:55", hasService: false },
            { id: 3, name: "Nagpur", code: "NGP", arrivalTime: "15:15", hasService: false },
            { id: 4, name: "Bhopal Jn", code: "BPL", arrivalTime: "21:10", hasService: false },
            { id: 5, name: "Chennai Central", code: "MAS", arrivalTime: "05:30", hasService: true },
        ]
    }
];