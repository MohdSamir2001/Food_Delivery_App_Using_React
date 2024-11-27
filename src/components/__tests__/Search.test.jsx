import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestaurantData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should render the body component with Search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = await waitFor(() =>
    screen.getAllByTestId("resCard")
  );
  expect(cardsBeforeSearch.length).toBe(20);
  // Wait for the search input to appear
  const searchInput = await waitFor(() => screen.getByTestId("searchInp"));
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "burger" } });

  // Wait for the search button and then click it
  const searchBtn = await waitFor(() =>
    screen.getByRole("button", { name: "Discover" })
  );
  fireEvent.click(searchBtn);

  // Wait for cards to appear
  const cardsAfterSearch = await waitFor(() =>
    screen.getAllByTestId("resCard")
  );
  expect(cardsAfterSearch.length).toBe(2); // Adjust this based on your mock data
});

it("Should render the body component with Top Rated Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = await waitFor(() =>
    screen.getAllByTestId("resCard")
  );
  expect(cardsBeforeSearch.length).toBe(20);
  // Wait for the search input to appear
  const RatedBtn = await waitFor(() => screen.getByTestId("RatedButton"));

  fireEvent.click(RatedBtn);

  // Wait for cards to appear
  const cardsAfterClickTopRatedButton = await waitFor(() =>
    screen.getAllByTestId("resCard")
  );
  expect(cardsAfterClickTopRatedButton.length).toBe(1); // Adjust this based on your mock data
});
