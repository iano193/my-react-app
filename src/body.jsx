import Product from "./Product";
function Body() {
    return (
        <section>
            <h2>FEATURED PRODUCTS</h2>

            {/* JEANS */}
            <h2>JEANS</h2>

            <Product name="Slim Fit Jeans" brand="Levi's" price={3500} />
            <Product name="Baggy Jeans" brand="Nike" price={4000} />
            <Product name="Classic Denim" brand="Zara" price={3000} />

            {/* SHIRTS */}
            <h2>SHIRTS</h2>

            <Product name="Classic T-Shirt" brand="Nike" price={1500} />
            <Product name="Graphic T-Shirt" brand="Supreme" price={2500} />
            <Product name="Polo Shirt" brand="Lacoste" price={2800} />

            {/* JACKETS */}
            <h2>JACKETS</h2>

            <Product name="Bomber Jacket" brand="Adidas" price={4500} />
            <Product name="Denim Jacket" brand="Levi's" price={5000} />
            <Product name="Hooded Jacket" brand="Nike" price={5500} />

            {/* SHOES */}
            <h2>SHOES</h2>

            <Product name="Air Max" brand="Nike" price={6500} />
            <Product name="Superstar" brand="Adidas" price={5000} />
            <Product name="Classic Sneakers" brand="Puma" price={4000} />

        </section>
    );
}

export default Body;
