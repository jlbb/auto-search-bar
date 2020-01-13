import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders SearchBox app", () => {
    const app = render(<App />);
    console.log("App", app);

    expect(app).toBeDefined();
  });
});
