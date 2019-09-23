import React from "react";
import { render } from "@testing-library/react";

import Controls from "../controls/Controls";
import Display from "../display/Display";
import Dashboard from "./Dashboard";

test("should if correct match the snapshot", () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})

test("The Gate default is unlocked & open", () => {
    const dashboard = render(<Dashboard />);
    expect(dashboard.getByText(/open/i));
    expect(dashboard.getByText(/unlocked/i));
})

test("The Gate can't be opened or closed when it is locked", () => {
    const control = render(<Controls locked={true} closed={true} />);
    expect(control.queryByText(/close gate/i)).toBe(null);

    const button = control.getByText(/open gate/i);
    expect(button.disabled).toBe(true);
})

test("The dashboard has controls", () => {
  render(<Controls />);
});

test("The dashboard has a display", () => {
  render(<Display />);
});
