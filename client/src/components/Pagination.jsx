const Pagination = ({ page, totalPages, setPage }) => {

  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">

      <button
        className="btn btn-sm btn-outline-violet"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      {pages.map(p => (
        <button
          key={p}
          className={`btn btn-sm ${p === page ? "btn-violet" : "btn-outline-violet"}`}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}

      <button
        className="btn btn-sm btn-outline-violet"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;