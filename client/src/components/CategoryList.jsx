function CategoryList({ category }) {
  return (
    <div className="bg-light py-4 px-3 rounded d-flex flex-column justify-content-center align-items-center h-100 cursor-pointer">
      <i
        className={`${category.icon} mb-3 text-light-green`}
        style={{ fontSize: "30px" }}
      ></i>
      <span className="text-success small text-center">
        {category.name}
      </span>
    </div>
  );
}

export default CategoryList;