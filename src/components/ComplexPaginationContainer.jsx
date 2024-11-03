import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md join-item border-base-300 border-2 rounded-none
			${
        activeClass
          ? "bg-accent text-base-300 hover:bg-accent hover:text-base-100"
          : "bg-gray-200 text-gray-900 hover:bg-gray-400 hover:text-gray-900"
      }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    //dots
    if (page > 2) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md border-base-300 border-2 rounded-none
			bg-gray-200 text-gray-900 hover:bg-gray-400 hover:text-gray-900" key="dots-1">
          ...
        </button>
      );
    }

    // active/current page

    if (page !== 1 && page !== pageCount) {
      pageButtons.push(
        addPageButton({ pageNumber: page, activeClass: true })
      );
    }

    //dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md border-base-300 border-2 rounded-none
			bg-gray-200 text-gray-900 hover:bg-gray-400 hover:text-gray-900" key="dots-2">
          ...
        </button>
      );
    }

    // last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item bg-gray-200 text-gray-900 border-base-300 border-2 rounded-none hover:bg-gray-400 hover:text-gray-900"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item bg-gray-200 text-gray-900 border-base-300 border-2 rounded-none hover:bg-gray-400 hover:text-gray-900"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = pageCount;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default ComplexPaginationContainer;
