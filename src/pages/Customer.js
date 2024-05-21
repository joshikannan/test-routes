import React from "react";
import { Helmet } from "react-helmet";

function Customer() {
  return (
    <div>
      <Helmet>
        <title>Customer | My React App</title>
        <meta
          name="description"
          content="Customer page description for My React App!"
        />
      </Helmet>
      <h1>Customer Page</h1>
      <p>This is the customer page of My React App!</p>
    </div>
  );
}

export default Customer;
