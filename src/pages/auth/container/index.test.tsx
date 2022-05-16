import React from "react";
import { render, screen } from "@testing-library/react";
import AuthComponent from "./index";

describe("Tests", () => {
  it("render", () => {
    render(<AuthComponent />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});