const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let products = [
    { pId: 101, pName: "Mobile", pPrice: 10000 },
    { pId: 102, pName: "Pc", pPrice: 20000 },
    { pId: 103, pName: "Laptop", pPrice: 30000 },
    { pId: 104, pName: "Tv", pPrice: 40000 },
    { pId: 105, pName: "Tablet", pPrice: 30000 }
];

// GET all products
app.get('/product', (req, res) => {
    res.json(products);
});

// POST a new product
app.post('/product', (req, res) => {
    const newProduct = {
        pId: req.body.pId,
        pName: req.body.pName,
        pPrice: req.body.pPrice
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update an existing product by ID
app.put('/product/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productToUpdate = products.find(p => p.pId === id);

    if (!productToUpdate) {
        return res.status(404).json({ message: 'Product not found' });
    }

    productToUpdate.pName = req.body.pName;
    productToUpdate.pPrice = req.body.pPrice;

    res.json(productToUpdate);
});

// DELETE a product by ID
app.delete('/product/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.pId === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const deletedProduct = products.splice(index, 1)[0];
    res.json({ message: 'Product deleted successfully', product: deletedProduct });
});



// Start the server
app.listen(port, () => {
    console.log(`API SERVER RUNNING AT http://localhost:${port}`);
});