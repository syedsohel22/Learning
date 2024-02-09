export const ProductCard = ({ el }) => {
 // console.log(el);
  return (
    <div className="product-card">
      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
      <img src={el.images[0]} alt={el.title} className="product-image" />
      <p className="product-title">{el.title}</p>
      <p className="product-brand">{el.brand}</p>
      <p className="product-price">{el.price}</p>
      <p className="product-discount">{el.discountPercentage}</p>
      <button className="add-to-cart">add to cart</button>
    </div>
  );
};
