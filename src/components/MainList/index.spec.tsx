import React from "react";
import { render, screen } from "@testing-library/react";

import MainList from ".";
import { HotelsProvider } from "../../state/hotels";

describe("MainList", () => {
  describe("component render", () => {
    it("renders how we expect", async () => {
      render(
        <HotelsProvider>
          <MainList />
        </HotelsProvider>
      );

      // data is fetched asyncronously
      const [title1, title2, title3] = await Promise.all([
        screen.findByText("Iberostar Grand Salome"),
        screen.findByText("Aquamarina Gold Hotel"),
        screen.findByText("Las Piramides Resort"),
      ]);

      expect(title1).toBeInTheDocument();
      expect(title2).toBeInTheDocument();
      expect(title3).toBeInTheDocument();
    });
  });
});
