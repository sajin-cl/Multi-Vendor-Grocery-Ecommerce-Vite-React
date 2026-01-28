import { useEffect, useState, useMemo } from "react";
import BannerCarousel from "../../components/BannerCarousel";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import "../../style/ProductCard.css";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));

    axios.get("http://localhost:4000/api/categories")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.error("Failed to fetch categories", err));
  }, []);

  const filteredProducts = useMemo(() => {
    if (!category) return products;
    return products.filter((prod) => prod.category === category);
  }, [products, category]);

  return (
    <div className="page-container">

      <BannerCarousel />

      <main>
        <section className="product-section">
          <div className="ms-3 me-3 mb-3 d-flex align-items-center justify-content-between">
            <h4 className="mb-0">All Products</h4>

            <div className="d-flex align-items-center gap-3 ">
              <label className="mb-0 fw-semibold">Category:</label>
              <select
                className="form-select w-auto px-5 py-1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name.length > 20 ? cat.name.slice(0, 20) + ".." : cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product._id + "-" + index}
                    product={product}
                  />
                ))
              ) : (
                <div className="text-center text-muted p-5">
                  Products not found
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default HomePage;
