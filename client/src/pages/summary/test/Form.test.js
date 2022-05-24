import { render, screen } from "@testing-library/react";
import Form from "../Form";
import userEvent from "@testing-library/user-event";
import { hover } from "@testing-library/user-event/dist/hover";

describe("Sundaes Order summary test", () => {
    
    test("Intial checkbox state", () => {
        render(<Form />);
        const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
        const confirmBtn = screen.getByRole("button", {
            name: /Confirm order/i
        });
        expect(checkbox).not.toBeChecked();
        expect(confirmBtn).toBeDisabled();
    });
    test("Enable checkbox to enable confirm order button", () => {
        render(<Form />);
        const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
        const confirmBtn = screen.getByRole("button", {
            name: /Confirm order/i
        });
        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(confirmBtn).toBeEnabled();

        userEvent.click(checkbox);
        expect(confirmBtn).toBeDisabled();
    })
    test("Popover response on hover", () => {
        render(<Form />);
        // Popover should be hidden
        const noPopover = screen.queryByText(/no ice cream will be delivered/i);
        expect(noPopover).not.toBeInTheDocument();


        // Popover appears on mouseover of checkbox
        const termsAndConditions = screen.getByText(/terms and conditions/i);
        userEvent.hover(termsAndConditions);
         const popover = screen.getByText(/no ice cream will be delivered/i);
        expect(popover).toBeInTheDocument();
        // Disappear Popover on mouseout
        userEvent.unhover(termsAndConditions);
         const nullPopoverNull = screen.queryByText(/no ice cream will be delivered/i);
        // userEvent.unhover(termsAndConditions);
        expect(nullPopoverNull).not.toBeInTheDocument();
    });

})