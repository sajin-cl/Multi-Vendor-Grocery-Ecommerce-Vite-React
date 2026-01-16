import "../../style/ProductDetails.css";

function ProductDetails() {
  return (
    <div className="container p-4">
      <div className="row align-items-start gy-4">
        
        <div className="col-12 col-md-5 text-center">
          <img
            src="/src/assets/images/beauty-category3.webp"
            alt="Facial Cream"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
        </div>

        <div className="col-12 col-md-7 p-4">
          <h2 className="fw-semibold mb-1">Facial Cream</h2>
          <div className="text-muted small mb-2">Beauty &amp; Skincare</div>

          <div className="mb-2">
            Availability: <span className="fw-bold text-success">50 In Stock</span>
          </div>

          <div className="d-flex align-items-end mb-3">
            <span className="fw-bold fs-3">₹199.00</span>
            <span className="text-muted text-decoration-line-through ms-2 fs-6">
              ₹299.00
            </span>
          </div>
          
          <div className="d-flex flex-column flex-sm-row align-items-start">
            <div className="d-flex border rounded overflow-hidden me-sm-3 mb-2 mb-sm-0">
              <button className="btn btn-light px-3">-</button>
              <span className="px-3 d-flex align-items-center">1</span>
              <button className="btn btn-light px-3">+</button>
            </div>

            <button className="btn btn-primary px-4">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
