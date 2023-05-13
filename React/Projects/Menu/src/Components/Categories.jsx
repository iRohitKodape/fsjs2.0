const Categories = ({ categories, filterCategories }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            onClick={() => filterCategories(category)}
            className="btn"
            type="button"
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
