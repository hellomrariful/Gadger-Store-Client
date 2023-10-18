import { useLoaderData } from "react-router-dom";

const Cart = () => {

    const products = useLoaderData()
    
    console.log(products);
    
    return (
        <div>
            <h2>Hello, This is cart {products.length}</h2>
            <div>
                {
                    products.map(product => <div key={product._id}>
                        <h2>hello this is {product.name}</h2>
                        <img src={product.photo} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;