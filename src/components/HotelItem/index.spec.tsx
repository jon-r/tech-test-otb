import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import HotelItem from ".";
import { HotelsProvider } from "../../state/hotels";

import hotelData from "../../../data/hotelData.json";

describe("HotelItem", () => {
  const hotel = hotelData[0];
  const overviewText = /an excellent location in the south of Tenerife/;

  describe("component render", () => {
    it("renders as we expect", () => {
      render(<HotelItem hotel={hotel} />);

      expect(screen.getByText("Iberostar Grand Salome")).toBeInTheDocument();
      expect(screen.getByText("3 July 2019")).toBeInTheDocument();
      expect(screen.getByText("£1,136.50")).toBeInTheDocument();
      expect(screen.getByText("Rated 5 stars")).toBeInTheDocument();

      // overview hidden by default
      expect(screen.queryByText(overviewText)).not.toBeInTheDocument();
    });
  });

  describe("interaction", () => {
    it('clicking the "read more" button toggles the overview', () => {
      render(<HotelItem hotel={hotel} />);

      expect(screen.queryByText(overviewText)).not.toBeInTheDocument();

      // toggle open
      fireEvent.click(screen.getByText("Read more"));
      expect(screen.getByText(overviewText)).toBeInTheDocument();

      // toggle close
      fireEvent.click(screen.getByText("Read less"));
      expect(screen.queryByText(overviewText)).not.toBeInTheDocument();
    });

    it('clicking the "book now" button will attempt to book the hotel', () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {
        /* noop */
      });

      render(
        <HotelsProvider>
          <HotelItem hotel={hotel} />
        </HotelsProvider>
      );

      fireEvent.click(screen.getByText("Book Now"));
      expect(consoleSpy).toBeCalledWith("user booked hotel 1!");
    });
  });
});
