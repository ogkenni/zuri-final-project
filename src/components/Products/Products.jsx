import ProductsCard from '../Products-Card/ProductsCard';
import FeaturedProduct from '../../../product';
import styles from './Products.module.css';

const Products = () => {
  return (
    <section className="container mb-5 pb-5">
      <h1>Featured products</h1>
      <div className={styles.card}>
        {FeaturedProduct.map((item, id) => {
          return (
            <ProductsCard
              key={id}
              img={item.img}
              product={item.product}
              price={item.price}
            />
          );
        })}
      </div>
      <div>
        <p className="btn btn-secondary btn-lg">Order Now!</p>
      </div>
    </section>
  );
};

export default Products;
