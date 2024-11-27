import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuContainer from "../RestaurantMenuContainer";
import MOCK_DATA_NAME from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it("should load restaurantMenu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Navbar />
          <RestaurantMenuContainer />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordianBtn = screen.getByText("Burgers (15)");
  fireEvent.click(accordianBtn);
  expect(screen.getAllByTestId("food-item").length).toBe(15);
  const addBtns = screen.getAllByRole("button", { name: "Add" });
  expect(screen.getByText("Cart : 0")).toBeInTheDocument();
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart : 2")).toBeInTheDocument();
});
