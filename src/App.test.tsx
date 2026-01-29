import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders the greeting text", () => {
    const { getByText } = render(<App />);
    expect(getByText("Prueba Issue")).toBeInTheDocument();
  });
});
