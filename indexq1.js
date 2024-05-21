const http = require('http');

const hostname = 'localhost';
const PORT = 5005;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to Men & Women Dummy Data");
    } else if (req.url === '/men') {
        res.write(JSON.stringify( {"id": 1, "name": "Men's T-Shirt", "price": 20, "discount": 0.1}));
        res.write(JSON.stringify({"id": 2, "name": "Men's Jeans", "price": 50, "discount": 0.2}));
        res.write(JSON.stringify({"id": 3, "name": "Men's Shoes", "price": 80, "discount": 0.15}));
        res.write(JSON.stringify({"id": 4, "name": "Men's Watch", "price": 100, "discount": 0.25}));
        res.write(JSON.stringify({"id": 5, "name": "Men's Backpack", "price": 30, "discount": 0.12}));
        res.write(JSON.stringify({"id": 6, "name": "Men's Sunglasses", "price": 40, "discount": 0.18}));
        res.write(JSON.stringify({"id": 7, "name": "Men's Belt", "price": 25, "discount": 0.1}));
        res.write(JSON.stringify({"id": 8, "name": "Men's Hat", "price": 15, "discount": 0.05}));
        res.write(JSON.stringify({"id": 9, "name": "Men's Wallet", "price": 20, "discount": 0.08}));
        res.write(JSON.stringify({"id": 10, "name": "Men's Jacket", "price": 120, "discount": 0.3}));
        res.end(); 
    } else if (req.url === '/women') {
        res.write(JSON.stringify( {"id": 1, "name": "Women's Dress", "price": 40, "discount": 0.15}));
        res.write(JSON.stringify({"id": 2, "name": "Women's Handbag", "price": 60, "discount": 0.2}));
        res.write(JSON.stringify( {"id": 3, "name": "Women's Shoes", "price": 70, "discount": 0.1}));
        res.write(JSON.stringify({"id": 4, "name": "Women's Earrings", "price": 25, "discount": 0.05}));
        res.write(JSON.stringify({"id": 5, "name": "Women's Necklace", "price": 35, "discount": 0.12}));
        res.write(JSON.stringify({"id": 6, "name": "Women's Sunglasses", "price": 30, "discount": 0.08}));
        res.write(JSON.stringify( {"id": 7, "name": "Women's Scarf", "price": 20, "discount": 0.1}));
        res.write(JSON.stringify({"id": 8, "name": "Women's Watch", "price": 50, "discount": 0.25}));
        res.write(JSON.stringify({"id": 9, "name": "Women's Skirt", "price": 45, "discount": 0.18}));
        res.write(JSON.stringify({"id": 10, "name": "Women's Blouse", "price": 35, "discount": 0.15}));
        res.end(); 
    } else {
        res.end("Page not found");
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}/`);
});
