import React from "react";
import { Helmet } from "react-helmet";

function Products() {
  return (
    <div>
      <Helmet>
        <title>Products | My React App</title>
        <meta
          name="description"
          content="Products page description for My React App!"
        />
      </Helmet>
      <h1>Products Page</h1>
      <p>This is the products page of My React App!</p>
    </div>
  );
}

export default Products;
