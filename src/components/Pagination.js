import "../styles/pagination.css";

const Pagination = ({
  totalStories,
  storiesPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  // iterates and stores a pages number for how many pages are required
  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            data-qa-id={`button-pagination-${index}`}
            key={index}
            // sets the page number clicked to be the current page
            onClick={() => setCurrentPage(page)}
            // adds a classname of active if the button click is the current page
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
