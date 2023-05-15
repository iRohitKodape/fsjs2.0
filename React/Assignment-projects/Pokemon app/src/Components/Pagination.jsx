import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div className="pagination">
      {gotoPrevPage && (
        <FcPrevious
          onClick={gotoPrevPage}
          size="40px"
          color="black"
          style={{ cursor: "pointer" }}
        />
      )}
      {gotoNextPage && (
        <FcNext
          onClick={gotoNextPage}
          size="40px"
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};
export default Pagination;
