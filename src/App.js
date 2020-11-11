import React from "react";

import Navbar from "./navbar/Navbar";
import Container from "./container/Container";
import Signup from "./signup/Signup";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Signup />
      </Container>
    </div>
  );
};

export default App;
