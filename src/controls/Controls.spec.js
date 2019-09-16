import React from "react";
import { render,fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("Controls the Component that provides the btns the abilty to change between 'locked' & 'closed' states", () => {
    const { getAllByRole } = render(<Controls />);
    getAllByRole('btn');
  });
  
  test('Controls the component that changes the btn text to reflect the state of when unlocked is clicked', () => {
    const controls = render(<Controls locked={false} />);
  
    const closeGate = controls.getByText(/close gate/i);
    fireEvent.click(closeGate);
    controls.findByText(/closed/i);
  
    const lockGate = controls.getByText(/lock gate/i);
    fireEvent.click(lockGate);
    controls.findByText(/locked/i);
  });
  
  test('Controls the component that changes the btn text to reflect the state of when locked is clicked', () => {
    const controls = render(<Controls locked={true} />);
  
    const unlockGate = controls.getByText(/unlock gate/i);
    fireEvent.click(unlockGate);
    controls.findByText(/unlocked/i);
  });
  
  test('Controls the component that changes the btn text to reflect the state of when closed is clicked', () => {
    const controls = render(<Controls closed={true} />);
  
    const openGate = controls.getByText(/open gate/i);
    fireEvent.click(openGate);
    controls.findByText(/opened/i);
  });
  
  test('Controls the component that disables the closed btn if the gate is locked', () => {
    const component = render(<Controls locked={true} closed={true} />);
    const btn = component.getByText(/open gate/i);
    expect(btn.disabled).toBe(true);
  });
  
  test('Controls the component that disables the locked btn if gate is open', () => {
    const component = render(<Controls locked={false} closed={false} />);
    const btn = component.getByText(/lock gate/i);
    expect(btn.disabled).toBe(true);
  });