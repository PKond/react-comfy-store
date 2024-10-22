import { useLoaderData, useLocation, useNavigate } from "react-router-dom";


const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({length: pageCount}, (_, index) => {
	return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
	const searchParams = new URLSearchParams(search);
	searchParams.set('page', pageNumber);
	navigate(`${pathname}?${searchParams.toString()}`)
  }

  if(pageCount < 2) return null;

  return <div className="mt-16 flex justify-end">
	<div className="join">
		<button className="btn btn-xs sm:btn-md join-item bg-gray-200 text-gray-900 border-base-300 border-2 rounded-none hover:bg-gray-400 hover:text-gray-900" onClick={() => {
			let prevPage = page - 1;
			if(prevPage < 1) prevPage = pageCount;
			handlePageChange(prevPage);
		}}>
			Prev
		</button>
		{pages.map((pageNumber) => {
			return (
				<button
					key={pageNumber}
					onClick={() => handlePageChange(pageNumber)}
					className={`btn btn-xs sm:btn-md join-item border-base-300 border-2 rounded-none
					${pageNumber === page ? 'bg-accent text-base-300 hover:bg-accent hover:text-base-100' : 'bg-gray-200 text-gray-900 hover:bg-gray-400 hover:text-gray-900'}`}
				>
					{pageNumber}
				</button>
			);
		})}

		<button className="btn btn-xs sm:btn-md join-item bg-gray-200 text-gray-900 border-base-300 border-2 rounded-none hover:bg-gray-400 hover:text-gray-900" onClick={() => {
			let nextPage = page + 1;
			if(nextPage > pageCount) nextPage = pageCount;
			handlePageChange(nextPage);
		}}>
			Next
		</button>
	</div>
  </div>;
};
export default PaginationContainer;
