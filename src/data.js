const hotels = [
    {
        _id: "1",
        name: "Shangri-La Colombo",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        location: "Colombo",
        rating: 4.7,
        reviews: ["K", "L"],
        price: 65000,
    },
    {
        _id: "2",
        name: "Cinnamon Grand Colombo",
        image:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        location: "Colombo",
        rating: 4.8,
        reviews: ["A", "M"],
        price: 55000,
    },
    {
        _id: "3",
        name: "Cinnamon Lakeside Colombo",
        image:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        location: "Colombo",
        rating: 4.6,
        reviews: ["S", "R"],
        price: 48000,
    },
    {
        _id: "4",
        name: "Galle Face Hotel",
        image:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
        location: "Colombo",
        rating: 4.5,
        reviews: ["D", "N"],
        price: 50000,
    },
    {
        _id: "5",
        name: "Jetwing Blue",
        image:
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        location: "Negombo",
        rating: 4.6,
        reviews: ["P", "T"],
        price: 42000,
    },
    {
        _id: "6",
        name: "Heritance Kandalama",
        image:
            "https://images.unsplash.com/photo-1582610116397-edb318620f90",
        location: "Dambulla",
        rating: 4.7,
        reviews: ["J", "A"],
        price: 60000,
    },
    {
        _id: "7",
        name: "Cinnamon Bentota Beach",
        image:
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        location: "Bentota",
        rating: 4.6,
        reviews: ["N", "K"],
        price: 45000,
    },
    {
        _id: "8",
        name: "Shangri-La Hambantota",
        image:
            "https://images.unsplash.com/photo-1540541338287-41700207dee6",
        location: "Hambantota",
        rating: 4.7,
        reviews: ["R", "S"],
        price: 58000,
    },
];

const locations = [
    { _id: 0, name: "ALL" },
    { _id: 1, name: "Colombo" },
    { _id: 2, name: "Negombo" },
    { _id: 3, name: "Dambulla" },
    { _id: 4, name: "Bentota" },
    { _id: 5, name: "Hambantota" },
];

export { hotels, locations };