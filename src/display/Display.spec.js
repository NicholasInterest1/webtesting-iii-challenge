import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("The Display component that displays if the gate is open or closed & or if it is locked or unlocked", () => {
  const display = render(<Display />);
  expect(display.getByText(/open/i));
  expect(display.getByText(/unlock/i));
});

test("The Display component that displays if the gate is closed, if closed prop is true", () => {
  const display = render(<Display closed={true} />);
  expect(display.getByText(/closed/i));
});

test("The Display component that displays if the gate is open, if closed prop is false", () => {
  const display = render(<Display closed={false} />);
  expect(display.getByText(/open/i));
});

test("The Display component that displays if the gate is locked, if closed prop is true", () => {
  const display = render(<Display locked={true} />);
  expect(display.getByText(/locked/i));
});

test("The Display component that displays if the gate is unlocked, if closed prop is false", () => {
  const display = render(<Display locked={true} />);
  expect(display.getByText(/unlocked/i));
});

test("The Display component that uses the red-led class when it is locked", () => {
    const control = render(<Display locked={true} />);
    const locked = control.getByText(/locked/i);
    expect(locked.classList.contains("red-led")).toBe(true);
})

test("The Display component that uses the red-led class when it is closed", () => {
    const control = render(<Display closed={true} />);
    const closed = control.getByText(/closed/i);
    expect(closed.classList.contains("red-led")).toBe(true);
})

test("The Display component that uses the green-led when it is unlocked", () => {
    const control = render(<Display locked={false} />);
    const unlocked = control.getByText(/unlocked/i);
    expect(unlocked.classList.contains("green-led")).toBe(true);
})

test("The Display component that uses the green-led when it is open", () => {
    const control = render(<Display closed={false} />);
    const open = control.getByText(/open/i);
    expect(open.classList.contains("green-led")).toBe(true);
})