import { Link } from "react-router-dom";

function SellerOrders() {
  const orders = [
    { id: 101, buyer: "John Doe",totalAmount:1000, status: "Pending" },
    { id: 102, buyer: "Jane Smith",totalAmount:200, status: "Shipped" },
    { id: 103, buyer: "Alice Johnson",totalAmount:1500, status: "Delivered" },
  ];



  return (
    <div className="container mt-4">
      <h3>Orders</h3>

      <div className="card shadow-sm mt-3">
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Buyer</th>
                <th>Order Date</th>
                <th>Total amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.buyer}</td>
                  <td>-</td>
                  <td>${order.totalAmount}</td>
                  <td>{order.status} </td>
                  <td>
                    <Link to={'/seller/update-order'}>
                      <i className="fa fa-eye text-dark"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SellerOrders;
