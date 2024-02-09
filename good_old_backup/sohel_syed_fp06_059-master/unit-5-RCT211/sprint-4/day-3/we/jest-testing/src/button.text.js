import { render, screen } from "@testing-library/react";
import App from "./App";

import Button from "./Button";

describe("Testing Button Component", () => {
  it("button should reander on DOM", () => {
    render(
      <Button color={"teal"} size={"large"}>
        Click Me
      </Button>
    );
    screen.debug();
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("Button should be present on Button", () => {});
});
