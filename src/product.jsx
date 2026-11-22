function Product(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.brand}</p>
            <p>KSh {props.price}</p>
            <button>Buy Now</button>
        </div>
    );
}

export default Product;