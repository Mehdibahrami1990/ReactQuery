const Product = (props: ProductType) => {
  return (
    <>
      <div className="section" >
          <h2>{props.name}</h2>
          <span>{props.price} $</span>
        <div className="btn">
        <button>See More</button>
        </div>
      </div>
    </>
  );
};

export default Product;
