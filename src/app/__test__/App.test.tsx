import { render } from "@testing-library/react";
import App from "../App";

test("renders App login page", () => {
  window.history.pushState({}, "Test Page", "/");
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
