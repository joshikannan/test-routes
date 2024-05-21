import React from "react";
import { Helmet } from "react-helmet";

function Deliveries() {
  return (
    <div>
      <Helmet>
        <title>Deliveries | My React App</title>
        <meta
          name="description"
          content="Deliveries page description for My React App!"
        />
      </Helmet>
      <h1>Deliveries Page</h1>
      <p>This is the deliveries page of My React App!</p>
    </div>
  );
}

export default Deliveries;
