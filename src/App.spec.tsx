import { render } from "@testing-library/react";
import AppContainer from "./containers/AppContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

describe("Renders App", () => {
  it("Renders App", () => {
    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  });
});
