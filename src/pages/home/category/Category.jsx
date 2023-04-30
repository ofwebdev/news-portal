import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Category() {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  console.log(id);
  return (
    <div>
      This is a Category : {id} {categoryNews.length}
    </div>
  );
}

export default Category;
