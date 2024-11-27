import { render, screen } from "@testing-library/react";
import Card, { withPromotedCard } from "../Card";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import MOCK_DATA2 from "../../components/mocks/propCardMock.json";
import { BrowserRouter } from "react-router-dom";
it("should render Card component with props data", () => {
  render(
    <BrowserRouter>
      <Card resCard={MOCK_DATA} />
    </BrowserRouter>
  );
  const name = screen.getByText("Burger King");
  expect(name).toBeInTheDocument();
});
it("should render withPromotedCard component with props data", () => {
  const PromotedCard = withPromotedCard(Card);
  render(
    <BrowserRouter>
      <PromotedCard resCard={MOCK_DATA2} />
    </BrowserRouter>
  );
  const variety = screen.getByText("Veg");
  expect(variety).toBeInTheDocument();
});
