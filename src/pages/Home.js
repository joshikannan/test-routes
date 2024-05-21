import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | My React App</title>
        <meta name="description" content="Welcome to my React App!" />
      </Helmet>
      <h1>Important project</h1>

      <p>
        It holds code of header with routing of pages includes hide the button
        of page
      </p>
    </div>
  );
}
export default Home;
