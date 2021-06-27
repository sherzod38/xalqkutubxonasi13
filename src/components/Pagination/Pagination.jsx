import "./Pagination.scss";

const Pagination = ({ activePage, setActivePage }) => {
  return (
    <div className="pagination container">
      <div className="pagination-inner">
        {/* <button disabled={`${activePage <= 1}`} onClick={() => setActivePage(activePage -1)} className="pagination-btn">orqaga</button> */}
        <button
          onClick={() => {
            console.log("salom");
            setActivePage(activePage + 1);
          }}
          className="pagination-inner-btn"
        >
          Yana
        </button>
      </div>
    </div>
  );
};

export default Pagination;
