import React from "react";
import { Helmet } from "react-helmet";

function Orders() {
  return (
    <div>
      <Helmet>
        <title>Orders | My React App</title>
        <meta
          name="description"
          content="Orders page description for My React App!"
        />
      </Helmet>
      <h1>Orders Page</h1>
      <p>This is the orders page of My React App!</p>
    </div>
  );
}

export default Orders;
