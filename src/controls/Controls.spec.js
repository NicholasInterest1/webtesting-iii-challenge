import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";

test("The Controls component that shows the buttons to toggle locked & closed states", () => {
  const { getAllByRole } = render(<Controls />);
  getAllByRole("button");
});

test("The Controls component that changes the text to reflect the state the door will be in if clicked", () => {
  expect(true).toBe(false);
});

test("The Controls component that disables the closed button when the gate is locked", () => {
  const control = render(<Controls lock={true} closed={true} />);
  const btn = control.getByText(/open gate/i);
  expect(btn.disabled).toBe(true);
});

test("The Controls component that disables the locked button when the gate is open", () => {
  const control = render(<Controls lock={false} closed={false} />);
  const btn = control.getByText(/lock gate/i);
  expect(btn.disabled).toBe(true);
});
