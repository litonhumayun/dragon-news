import { useEffect, useState } from "react";
import { Link } from "react-router";

const LeftNavigation = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2>All Categories</h2>
      <div>
        {categories.map((category) => (
          <Link
            className="block p-2 m-2 text-bold font-large"
            key={category.id}
            to={`category/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNavigation;
