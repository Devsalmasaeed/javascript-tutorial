const products = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' }
    ];
    
    const renderProducts = products => {
        const container = document.getElementById('productContainer');
        products.forEach(product => {
            container.innerHTML += `
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: ${product.price}</p>
                </div>
            `;
        });
    }
    
    renderProducts(products);