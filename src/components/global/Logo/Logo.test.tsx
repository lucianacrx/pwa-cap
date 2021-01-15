import React from "react";
import { render } from "@testing-library/react";

import LogoStyled from "./LogoStyled";

describe("Logo", () => {
  it("renders without crashing", () => {
    const { container } = render(<LogoStyled className="Logo" />);
    expect(container).toMatchSnapshot();
  });
});
