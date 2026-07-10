import React from "react";
import { render, screen } from "@testing-library/react";

import StatBar from "../StatBar";

describe("StatBar", () => {
  it("renders the value/max text", () => {
    render(<StatBar label="HP" value={80} max={100} />);
    expect(screen.getByText("80/100")).not.toBeNull();
  });

  it("sets the fill width as a percentage of max", () => {
    const { container } = render(<StatBar label="MP" value={25} max={50} />);
    const fill = container.querySelector(".stat-bar-fill");
    expect(fill.style.width).toBe("50%");
  });

  it("derives the modifier class from the label", () => {
    const { container } = render(<StatBar label="HP" value={80} max={100} />);
    expect(container.querySelector(".stat-bar-hp")).not.toBeNull();
  });
});
