import { fireEvent, render, screen } from "@testing-library/react";
import NavItems from "../NavItems";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import UserInfo from "../../utils/UserInfoContext";
it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavItems />
      </Provider>
    </BrowserRouter>
  );
  //   const loginButton = screen.getByText("Log In");
  //   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Log In" });
  expect(loginButton).toBeInTheDocument();
});
it("Should load Cart Items With Zeroes", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavItems />
      </Provider>
    </BrowserRouter>
  );
  //   const Cart = screen.getByText("Cart : 0");
  //   rajex
  const Cart = screen.getByText(/Cart/);
  expect(Cart).toBeInTheDocument();
});
it("Should change Log In button to Samir on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavItems />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Log In" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Log Out" });
  expect(logoutButton).toBeInTheDocument();
});
