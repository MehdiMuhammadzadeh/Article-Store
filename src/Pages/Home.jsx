import React from "react";

const Home = () => {
  return (
    <>
      <img
        src={require("../images/showcase.jpg")}
        style={{ width: "100%", height: "100vh", overflow: "hidden" }}
        alt="Landing Page"
      />
      <div className="container mt-5 text-center p-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-4">Article</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              illo quos, aliquam quisquam sit quis dignissimos vitae! Suscipit
              reiciendis, ipsa, commodi, ratione rem est repellat amet iure odio
              nisi quasi. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Dolore illo quos, aliquam quisquam sit quis dignissimos
              vitae! Suscipit reiciendis, ipsa, commodi, ratione rem est
              repellat amet iure odio nisi quasi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dolore illo quos, aliquam quisquam
              sit quis dignissimos vitae! Suscipit reiciendis, ipsa, commodi,
              ratione rem est repellat amet iure odio nisi quasi. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dolore illo quos,
              aliquam quisquam sit quis dignissimos vitae! Suscipit reiciendis,
              ipsa, commodi, ratione rem est repellat amet iure odio nisi quasi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
