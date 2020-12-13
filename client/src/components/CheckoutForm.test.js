import React from "react";
import { findByTestId, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    getByText(/checkout form/i);
});

test("form shows success message on submit with form details", async () => {
    const { getByText, findByTestId } = render(<CheckoutForm />);
    const button = screen.getByRole("button");

    userEvent.click(button);
    const success = await findByTestId(/successmessage/i);
    expect(success.toExist);
});
