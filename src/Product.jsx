function Product({ name, aviable, number }) {
    const buyProduct = (name) => {
        console.log("تو خریدیش",name,number);
    }
    return (
        <div>
            <h1>{name}</h1>
            <h2>{number > 0 ? "موجود" : "ناموجود"}</h2>
            <h2>{number}</h2>
            <button onClick={() => buyProduct(name,number)}>خرید</button>
        </div>
    )
};
export default Product;
