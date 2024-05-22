import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  handlePageClick: (pageNum: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  handlePageClick,
}) => {
  return (
    <div className="pages">
      {currentPage > 1 && (
        <>
          <span
            className="d-flex p-12px cursor-pointer"
            onClick={() => handlePageClick(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.414"
              height="8.829"
              viewBox="0 0 13.414 8.829"
            >
              <g transform="translate(1 1.414)">
                <path
                  d="M12,12,9,9l3-3"
                  transform="translate(-1 -6)"
                  style={{
                    fill: "none",
                    stroke: "rgb(253, 65, 0)",
                    strokeLinecap: "round",
                    strokeWidth: "2px",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <path
                  d="M12,12,9,9l3-3"
                  transform="translate(-6 -6)"
                  style={{
                    fill: "none",
                    stroke: "rgb(253, 65, 0)",
                    strokeLinecap: "round",
                    strokeWidth: "2px",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <line
                  y2="6"
                  transform="translate(0)"
                  style={{
                    fill: "none",
                    stroke: "rgb(253, 65, 0)",
                    strokeLinecap: "round",
                    strokeWidth: "2px",
                  }}
                ></line>
              </g>
            </svg>
          </span>
          <span
            className="d-flex p-12px cursor-pointer"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5.414"
              height="8.829"
              viewBox="0 0 5.414 8.829"
            >
              <path
                d="M12,12,9,9l3-3"
                transform="translate(-8 -4.586)"
                style={{
                  fill: "none",
                  stroke: "rgb(253, 65, 0)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></path>
            </svg>
          </span>
        </>
      )}
      {[...Array(totalPage)].map((_, idx) => {
        const pageNumber = idx + 1;
        let startPage = 1;
        if (currentPage > 4) {
          startPage = currentPage - 3;
        }
        if (currentPage < totalPage - 3 && startPage + 6 > totalPage) {
          startPage = totalPage - 6;
        }
        if (pageNumber >= startPage && pageNumber < startPage + 7) {
          return (
            <button
              className={`buttons${
                pageNumber === currentPage ? " active" : ""
              }`}
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        }
        return null;
      })}
      {currentPage < totalPage && (
        <>
          <span
            className="d-flex p-12px cursor-pointer"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5.414"
              height="8.829"
              viewBox="0 0 5.414 8.829"
            >
              <path
                d="M9,12l3-3L9,6"
                transform="translate(-7.586 -4.586)"
                style={{
                  fill: "none",
                  stroke: "rgb(253, 65, 0)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></path>
            </svg>
          </span>
          <span
            className="d-flex p-12px cursor-pointer"
            onClick={() => handlePageClick(totalPage)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.414"
              height="8.829"
              viewBox="0 0 13.414 8.829"
            >
              <g transform="translate(-1134.586 -2682.586)">
                <path
                  d="M9,12l3-3L9,6"
                  transform="translate(1127 2678)"
                  style={{
                    fill: "none",
                    stroke: "rgb(253, 65, 0)",
                    strokeLinecap: "round",
                    strokeWidth: "2px",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <path
                  d="M9,12l3-3L9,6"
                  transform="translate(1132 2678)"
                  style={{
                    fill: "none",
                    stroke: "rgb(253, 65, 0)",
                    strokeLinecap: "round",
                    strokeWidth: "2px",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <line
                  y2="6"
                  transform="translate(1147 2684)"
                  style={{
                    fill: "none",
                    stroke: "rgb(253, 65, 0)",
                    strokeLinecap: "round",
                    strokeWidth: "2px",
                  }}
                ></line>
              </g>
            </svg>
          </span>
        </>
      )}
    </div>
  );
};

export default Pagination;
