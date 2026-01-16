function UpdateOrder() {


  return (
    <div className="container mt-4">
      <h3>Update Order </h3>
      <form >
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"

          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <button className="btn btn-primary">Update Status</button>
      </form>
    </div>
  );
}

export default UpdateOrder;
