import React, { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

import { LandingPage } from "../pages/LandingPage";

function App() {
  useEffect(() => {
    ReactPixel.init("TEST_PIXEL", undefined, {
      autoConfig: true,
      debug: true,
    });

    ReactPixel.pageView();
  }, []);
  return <LandingPage />;
}

export default App;
