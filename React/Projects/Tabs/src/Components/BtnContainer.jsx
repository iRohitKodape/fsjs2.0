const BtnContainer = ({ details }) => {
  return (
    <div className="btn-container">
      {details.map((item) => {
        return (
          <button className="job-btn" key={item.id}>
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
