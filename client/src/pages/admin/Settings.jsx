import { getPendingSellers as getPendingSellersApi, approveSellers as approveSellersApi, deleteSeller as deleteSellerApi } from '@/services/adminService'
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

function Settings() {

  document.title = ('Admin Permission | Power House Ecommerce');

  const [loading, setLoading] = useState(true);
  const [sellers, setSellers] = useState([]);


  useEffect(() => {
    fetchPendingSellers();
  }, []);

  const fetchPendingSellers = async () => {
    try {
      setLoading(true);
      const response = await getPendingSellersApi();
      setSellers(response.data);
    }
    catch (err) {
      console.error(err);
    }
    finally {
      setLoading(false)
    }
  };

  const approveSeller = async (id) => {
    await approveSellersApi(id);
    fetchPendingSellers();
  };

  const deleteSeller = async (id) => {
    try {
      await deleteSellerApi(id)
      fetchPendingSellers();
    }
    catch (err) {
      console.error(err);
    }
  }

  /*........................................................................................................................... */
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <HashLoader color="#1dd74b" size={70} />

      </div>
    )
  }

  if (sellers.length === 0) {
    return (
      <div className="container py-4"> </div>
    )
  };


  return (
    <div className="container py-4">

      <h3 className='border-bottom mb-4 pb-2'>Pending Seller Approvals</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Shop</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {sellers.map(seller => (
            <tr key={seller._id}>
              <td>{seller.fullName}</td>
              <td>{seller.email}</td>
              <td>{seller.shopName}</td>
              <td>{new Date(seller.createdAt).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short"
              })}</td>

              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => approveSeller(seller._id)}
                >
                  Approve
                </button>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => deleteSeller(seller._id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Settings;