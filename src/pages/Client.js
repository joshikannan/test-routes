import React from "react";
import { Helmet } from "react-helmet";

function Client() {
  return (
    <div>
      <Helmet>
        <title>using helmet </title>
        <meta
          name="description"
          content="Client page description for My React App!"
        />
      </Helmet>
      <h1>Client Page</h1>
      <p>This is the client page of My React App!</p>
    </div>
  );
}

export default Client;
