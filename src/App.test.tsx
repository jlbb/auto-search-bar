import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "./App";

const mockedStore = {
  planets: {}
};

const mockStore = configureMockStore([]);

let store: any;
let app: any;

beforeAll(() => {
  store = mockStore(mockedStore);
  app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
test("loads and displays App component", async () => {
  expect(app).toBeDefined();
});
