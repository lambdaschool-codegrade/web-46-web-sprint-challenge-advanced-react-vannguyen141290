import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    //arrange
    render(<CheckoutForm/>);

    //act
    //focus on input boxes and type in information
    const fnInput = screen.getByLabelText(/first name:/i);
    userEvent.type(fnInput, "thi");
    const lnInput = screen.getByLabelText(/last name:/i);
    userEvent.type(lnInput, "nguyen");
    const addressInput = screen.getByLabelText(/address:/i);
    userEvent.type(addressInput, "1234 hallo str");
    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, "san jose");
    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, "CA");
    const zipInput = screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, "90000");
    //hit submit button
    const submitBtn = screen.getByRole("button");
    userEvent.click(submitBtn);
    //find the information submitted
    const submittedName = await screen.getByText(/thi nguyen/i);
    const submittedAdd1 = await screen.getByText(/1234 hallo str/i);
    const submittedAdd2 = await screen.getByText(/san jose, ca 90000/i);

    //assert
    expect(submittedName).toBeInTheDocument();
    expect(submittedAdd1).toBeInTheDocument();
    expect(submittedAdd2).toBeInTheDocument();
});
