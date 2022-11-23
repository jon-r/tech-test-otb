import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Sidebar from ".";
import * as sortUtils from "../../util/sort";
import { HotelsProvider } from "../../state/hotels";
import { SortTypes } from "../../enums/hotels";

describe("Sidebar", () => {
  describe("component render", () => {
    it("renders how we expect", () => {
      render(<Sidebar />);

      // two of each for accessability
      expect(screen.getAllByText("alphabetically").length).toEqual(2);
      expect(screen.getAllByText("price").length).toEqual(2);
      expect(screen.getAllByText("star rating").length).toEqual(2);
    });
  });

  describe("interaction", () => {
    it('clicking the "sort by X" buttons will resort the data', () => {
      const sortSpy = vi.spyOn(sortUtils, "sortHotels");

      render(
        <HotelsProvider>
          <Sidebar />
        </HotelsProvider>
      );

      fireEvent.click(screen.getAllByText("alphabetically")[0]);
      expect(sortSpy).toBeCalledWith(expect.any(Array), SortTypes.AToZ);

      fireEvent.click(screen.getAllByText("price")[0]);
      expect(sortSpy).toBeCalledWith(expect.any(Array), SortTypes.Price);

      fireEvent.click(screen.getAllByText("star rating")[0]);
      expect(sortSpy).toBeCalledWith(expect.any(Array), SortTypes.Rating);
    });
  });
});
