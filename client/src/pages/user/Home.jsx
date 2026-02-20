import "../../style/ProductCard.css";
import { useEffect, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";

import { getAllCategories, getAllProducts } from "../../services/productService";
import Pagination from "../../components/Pagination";

const BannerCarousel = lazy(() => import("../../components/BannerCarousel"));
const Footer = lazy(() => import("../../components/Footer"));
const ProductCard = lazy(() => import("../../components/ProductCard"));

function HomePage() {

  document.title = "Home | Power House Ecommerce";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 12;
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    getAllCategories()
      .then(res => setCategories(res.data.categories || []))
      .catch(console.error);
  }, []);

 

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(search);
      setPage(1);
    }, 600);

    return () => clearTimeout(timer);
  }, [search]);

  //----------------------------------------------------------------------------- fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await getAllProducts({
          page,
          limit,
          category,
          search: searchQuery
        });

        setProducts(res.data?.products || []);
        setTotalPages(res.data?.totalPages || 1);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, category, searchQuery]);

  return (
    <div className="page-container">

      <Suspense fallback={<div>Loading Banner...</div>}>
        <BannerCarousel />
      </Suspense>

      <main>
        <div className="container-fluid ">

          <input
            type="text"
            className="form-control my-5 search-bar px-4"
            placeholder="Search Products.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="d-flex justify-content-end align-items-center gap-3 mx-0 mb-4 category-dropdown">
            <label className="fw-semibold">Category:</label>
            <select
              className="form-select px-3 py-1"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              style={{ maxWidth: "200px" }}
            >
              <option value="">All</option>
              {categories.map(cat => (
                <option key={cat._id} value={cat._id}>
                  {cat?.name?.length > 20 ? cat.name.slice(0, 20) + ".." : cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <section className="container-fluid">

          {loading ? (
            <div className="text-center p-5 min-vh-100">Loading products...</div>
          ) : products?.length === 0 ? (
            <div className="text-center text-muted p-5 min-vh-100">Products not found</div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-4 ">
              {products?.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="mb-4">
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          </div>

        </section>
      </main>

      <Suspense fallback={<div>...</div>}>
        <Footer />
      </Suspense>

    </div>
  );
}

export default HomePage;