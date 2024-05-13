import { describe, test, expect } from "vitest";

// Component
import App from "../src/App";

describe("App", () => {
  test("should render the App component", () => {
    expect(App).toBeDefined();
  });
});
