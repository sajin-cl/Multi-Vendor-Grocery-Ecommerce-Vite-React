import "../../style/ProductCard.css";
import { useEffect, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ShimmerPostList } from 'react-shimmer-effects';

import { getAllCategories, getAllProducts } from "@/services/productService";
import Pagination from "@/components/Pagination";
import Hero from "@/components/Hero";
import CategoryList from "@/components/CategoryList";
import { categoryListData,testimonialsData } from "@/data/data";


const Footer = lazy(() => import("@/components/Footer"));
const ProductCard = lazy(() => import("@/components/ProductCard"));
const Testimonials = lazy(() => import("@/components/Testimonials"))


function HomePage() {

  document.title = "Home | Power House Ecommerce";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);

  const limit = 12;


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
        setLoading(false)
      }
    };

    fetchProducts();
  }, [page, category, searchQuery]);


  return (
    <div className="page-container">

      <Hero />

      <main>
        <div className="container-fluid ">

          <input
            type="text"
            className="form-control my-5 search-bar px-4"
            placeholder="Search Products.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/*  Category List bar */}
          <div className="container mb-5">
            <div className="category-list-container row g-4 justify-content-center">
              {categoryListData.map((category, id) => (
                <div key={id} className="col-12 col-sm-6 col-md-3 col-lg-2">
                  <CategoryList category={category} />
                </div>
              ))}
            </div>
          </div>

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

        <section className="container-fluid" id="product-section">

          {loading ? (
            <div className="text-center p-2 min-vh-100">
              <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={3} gap={30} />
            </div>
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

          <div className="mb-4">
            <Testimonials testimonials={testimonialsData}/>
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