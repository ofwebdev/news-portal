import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LeftSidebar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="py-5">
      <h4>All Category</h4>

      {category.map((catalog) => (
        <div key={catalog.id} className="p-2">
          <Link
            to={`/category/${catalog.id}`}
            className="text-decoration-none table-hover table"
          >
            {catalog.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LeftSidebar;
