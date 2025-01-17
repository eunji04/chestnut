import "../atoms/Pagenation.css";

function Pagenation({
  currentPage,
  totalPages,
  onPageChange,
  upPageChange,
  downPageChange,
}) {

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // 보여줄 페이지 수 설정 (여기서는 5로 설정)
    const maxPageNumbers = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
        key={i}
        className={`NumberBorder PaginationBtn ${currentPage === i ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          <div className="NumberContent">{i}</div>
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="PagenationPage">

      <div className="PaginationBtn FirstBorder" onClick={() => onPageChange(1)}>
        <div className="PageBorder">
          {"|<"}
        </div>
      </div>
      
      <div
        className="PaginationBtn PreNextBtn NumberBorder"
        onClick={() => downPageChange(currentPage)}
        style={{ visibility: "visible" }}
      > 
        <div className="NumberContent"> {"<"} </div>
      </div>

      {renderPageNumbers()}
      
      <div
        className="PaginationBtn PreNextBtn NumberBorder"
        onClick={() => upPageChange(currentPage)}
        style={{ visibility: "visible" }}
      >
        <div className="NumberContent">{">"}</div>
      </div>
      
      <div className="PaginationBtn LastBorder" onClick={() => onPageChange(totalPages)}>
        <div className="PageBorder">
        {">|"}
        </div>
      </div>

    </div>
  );
}

export default Pagenation;
