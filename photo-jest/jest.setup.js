// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import React from "react";

jest.mock("*.svg", () => ({
  __esModule: true,
  default: React.forwardRef((props, ref) => <svg ref={ref} {...props} />),
}));
