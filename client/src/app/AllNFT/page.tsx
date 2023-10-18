import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"; 
import styles from "../styles/AllNFT.module.css"; 

enum Category {
  Men = "men",
  Women = "women",
  Kids = "kids",
  Other = "other",
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: Category;
  UserId: number;
}

const AllNFT = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <div className={styles.nav}>{/* NavBar component */}</div>
      <div id="allNftPage" className={styles.container}>
        <div className={styles.sideBar}>
          {/* Sidebar content */}
        </div>
        {/* Main content */}
        <div className={styles.content}>
          {/* Content */}
          <div className={styles.top}>
            <h6 className={styles.results}>23,344,420 items</h6>
            <div className={styles.sort}>
              <button className={styles.allBtn}>All Items</button>
              <select>
                {/* Categories options */}
              </select>
            </div>
          </div>
          <div className={styles.cards}>
            {products.map((product) => (
              <ProductCard key={product.id} prod={product} />
            ))}
          </div>
        </div>
      </div>
      {/* Footer component */}
    </div>
  );
};

export default AllNFT;
