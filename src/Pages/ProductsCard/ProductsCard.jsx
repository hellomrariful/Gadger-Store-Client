const ProductsCard = ({product}) => {
    const {_id, name} = product
    return (
        <div>
            <h1>This is id:{_id}</h1>
        </div>
    );
};

export default ProductsCard;