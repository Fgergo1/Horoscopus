import RegistrationForm from "./pages/registration/RegistrationForm.tsx";
import {render} from "./utils/test-utils.ts";
import {screen, fireEvent} from "@testing-library/react";
import {vi} from "vitest";
import userEvent from '@testing-library/user-event';


describe("test all of the html elements", () => {

    it("wrapper div exist", () => {
        render(<RegistrationForm onSave={vi.fn()}/>)

        const wrapperDiv = screen.getByTestId("wrapper")
        expect(wrapperDiv).toBeInTheDocument()
    })

    it("test registration text is exist", () => {
        render(<RegistrationForm onSave={vi.fn()}/>)

        const registrationText = screen.getByRole("heading", {
            level: 2
        })
        expect(registrationText).toBeInTheDocument()
    })

    it("username input box is exist", () => {
        render(<RegistrationForm onSave={vi.fn()}/>)

        const usernameInput = screen.getByPlaceholderText("Enter your name")
        expect(usernameInput).toBeInTheDocument()

    })

    it("email input box is exist", () => {
        render(<RegistrationForm onSave={vi.fn()}/>)

        const emailInput = screen.getByPlaceholderText("Enter your email")
        expect(emailInput).toBeInTheDocument()

    })

    it("password input box is exist", () => {
        render(<RegistrationForm onSave={vi.fn()}/>)

        const passwordInput = screen.getByPlaceholderText("Create password")
        expect(passwordInput).toBeInTheDocument()

    })

    it("password re-enter input box is exist", () => {
        render(<RegistrationForm onSave={vi.fn()}/>)

        const reEnteredPasswordInput = screen.getByPlaceholderText("Confirm password")
        expect(reEnteredPasswordInput).toBeInTheDocument()
    })

    it("policy div is appear", () => {
        render(<RegistrationForm onSave={vi.fn()}/>)
        const policyDiv = screen.getByTestId("policy")
        expect(policyDiv).toBeInTheDocument()
    })

    it("policy checkbox is present in the document", () =>{
        render(<RegistrationForm onSave={vi.fn()}/>)
        const checkbox = screen.getByRole("checkbox")
        expect(checkbox).toBeInTheDocument()
    })

    it(" checkbox text is present in the document", () =>{
        render(<RegistrationForm onSave={vi.fn()}/>)
        const checkboxText = screen.getByText("I accept all terms & condition")
        expect(checkboxText).toBeInTheDocument()
    })

    it("submit div is in the document", () =>{
        render(<RegistrationForm onSave={vi.fn()}/>)
        const submitDiv = screen.getByTestId("submit-div")
        expect(submitDiv).toBeInTheDocument()
    })

    it("submit input is present in document", () =>{
        render(<RegistrationForm onSave={vi.fn()}/>)
        const submitInput = screen.getByText("Register Now")
        expect(submitInput).toBeInTheDocument()
    })

    it("wrapper div is for href is present", () =>{
        render(<RegistrationForm onSave={vi.fn()}/>)
        const hrefDiv = screen.getByTestId("text")
        expect(hrefDiv).toBeInTheDocument()
    })

    it("hrefText is appear on the screen", () =>{
        render(<RegistrationForm onSave={vi.fn()}/>)
        const hrefText = screen.getByText("Already have an account?")
        expect(hrefText).toBeInTheDocument()
    })

    it("href is present and navigate to other page", () =>{
        render(<RegistrationForm onSave={vi.fn()}/>)
        const hrefElement = screen.getByRole("link")
        expect(hrefElement).toBeInTheDocument()
        expect(hrefElement).toHaveAttribute("href","/login")

    })








        it('should call onSave with correct user data on submit and handle errors', async () => {
            const mockOnSave = vi.fn().mockResolvedValue(undefined);
            const username = 'test_user';
            const email = 'test@example.com';
            const password = 'secure_password';
            const rePassword = password; // Valid passwords match

            render(<RegistrationForm onSave={mockOnSave} />);

            const usernameInput = screen.getByPlaceholderText("Enter your name");
            const emailInput = screen.getByPlaceholderText("Enter your email");
            const passwordInput = screen.getByPlaceholderText("Create password");
            const rePasswordInput = screen.getByPlaceholderText("Confirm password");
            const submitButton = screen.getByRole('button', { name: /register now/i });

            await userEvent.type(usernameInput, username);
            await userEvent.type(emailInput, email);
            await userEvent.type(passwordInput, password);
            await userEvent.type(rePasswordInput, rePassword);

            fireEvent.submit(submitButton);

             expect(mockOnSave).toHaveBeenCalledTimes(1);

            const expectedUser = {
                username,
                email,
                password,
                rePassword,
            };
            expect(mockOnSave).toHaveBeenCalledWith(expectedUser, expect.any(Function));

        });



})