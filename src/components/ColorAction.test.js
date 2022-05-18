import { render, screen, fireEvent  } from "@testing-library/react";
import { ColorAction } from "./ColorAction";

test("Button has correct initial Color", () => {
    render(<ColorAction />);
    const colorButton = screen.getByRole('button', { name: "Change to blue" })
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test("Button has color change on click", () => {
    render(<ColorAction />);
    const newButtonColor = screen.getByRole('button', {
        name: "Change to blue"
    });
    expect(newButtonColor).toHaveStyle({ backgroundColor: 'red' });
    fireEvent.click(newButtonColor);
    // expect new color to be blue
    expect(newButtonColor).toHaveStyle({ backgroundColor: 'blue' });

    // expect new text to be Change to red
    expect(newButtonColor.textContent).toBe("Change to red");
});
 
test("Checkbox unchecked initially", () => {
    render(<ColorAction />);
    const colorButton = screen.getByRole('button', {
        name: "Change to blue"
    });
    expect(colorButton).toBeEnabled();

    // checkbox initial state

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

});
test("Button disabled on Checkbox checked", () => {
    render(<ColorAction />);
    const colorButton = screen.getByRole('button', {
        name: "Change to blue"
    });
    expect(colorButton).toBeEnabled();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
    expect(checkbox).not.toBeChecked();

});



test("Button has text change on click", () => {
    
})
