import React from 'react';

function ShoppingList() {
    const Products = [
        { pId: 101, pName: 'Laptop', pType: 'Electronics', pPrice: 20098, pIsInstock: true },
        { pId: 102, pName: 'Headphones', pType: 'Electronics', pPrice: 20098, pIsInstock: true },
        { pId: 103, pName: 'Mobile', pType: 'Electronics', pPrice: 60000, pIsInstock: false },
        { pId: 104, pName: 'Mouse', pType: 'Electronics', pPrice: 20098, pIsInstock: true },
        { pId: 105, pName: 'CPU', pType: 'Electronics', pPrice: 50000, pIsInstock: false }
    ];

    return (
        <div>
            <h1>Shopping List</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price (₹)</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map(product => (
                        <tr key={product.pId}>
                            <td>{product.pId}</td>
                            <td>{product.pName}</td>
                            <td>{product.pType}</td>
                            <td>{product.pPrice}</td>
                            <td>{product.pIsInstock ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShoppingList;