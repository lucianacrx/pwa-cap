import React from "react";
import { render } from "@testing-library/react";

import Error from "./Error";

describe("Error page", () => {
  it("renders without crashing", () => {
    render(<Error />);
  });
});
