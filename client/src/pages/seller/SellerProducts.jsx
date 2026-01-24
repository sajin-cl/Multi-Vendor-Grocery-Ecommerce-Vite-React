import { Link } from "react-router-dom";

function SellerProducts() {

  const products = [
    { id: 1, name: "Red T-Shirt", image: "https://picsum.photos/200/200?random=1", stock: 10, price: 20 },
    { id: 2, name: "Blue Jeans", image: "https://picsum.photos/200/200?random=2", stock: 0, price: 40 },
    { id: 3, name: "Sneakers", image: "https://picsum.photos/200/200?random=3", stock: 5, price: 60 },
    { id: 4, name: "Hat", image: "https://picsum.photos/200/200?random=5", stock: 2, price: 15 },
    { id: 4, name: "bat", image: "https://picsum.photos/200/200?random=12", stock: 2, price: 15 },
    { id: 4, name: "sat", image: "https://picsum.photos/200/200?random=6", stock: 2, price: 15 },
    { id: 4, name: "dot", image: "https://picsum.photos/200/200?random=7", stock: 2, price: 15 },
    { id: 4, name: "pot", image: "https://picsum.photos/200/200?random=8", stock: 2, price: 15 },
    { id: 4, name: "seat", image: "https://picsum.photos/200/200?random=9", stock: 2, price: 15 },
    { id: 4, name: "heat", image: "https://picsum.photos/200/200?random=10", stock: 2, price: 15 },
    { id: 4, name: "rat", image: "https://picsum.photos/200/200?random=11", stock: 2, price: 15 }
  ];


  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id + '-' + index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.name}</h6>
                <p className="card-text text-muted">description</p>
                <p className={`card-text ${product.stock === 0 ? "text-danger" : "text-success"}`}>
                  {product.stock === 0 ? "Out of Stock" : `Stock: ${product.stock}`}
                </p>
                <p className="card-text">${product.price}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <Link to={'/seller/update-product'} className="btn btn-purple px-3 py-1"><small>Edit</small></Link>
                  <button className="btn btn-danger px-4 py-0"><small>Delete</small></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/seller/add-product"
        className="btn btn-purple rounded-circle shadow d-flex align-items-center justify-content-center add-popup-btn"
      >
        +
      </Link>
    </div>
  )
};

export default SellerProducts;