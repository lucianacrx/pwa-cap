import React from "react";
import { render } from "@testing-library/react";

import Pokemon from "./Pokemon";

describe("Pokemon", () => {
  it("renders with default props", () => {
    render(<Pokemon />);
  });
});