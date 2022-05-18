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
     fireEvent.click(newButtonColor);
    // expect new color to be blue
    expect(newButtonColor).toHaveStyle({ backgroundColor: 'red' });

    // expect new text to be Change to red
    expect(newButtonColor.textContent).toBe("Change to blue");
});
 

test("Button disabled on Checkbox checked", () => {
    render(<ColorAction />);
    const colorButton = screen.getByRole('button', {name: "Change to blue"});
    const checkbox = screen.getByRole('checkbox', {name: "Disable Button"});
    expect(colorButton).toBeEnabled();
    
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(colorButton);
    fireEvent.click(checkbox);

    expect(colorButton.textContent).toBe("Change to red");
    expect(colorButton).toHaveStyle({ background: "grey" });
    fireEvent.click(checkbox);
     expect(colorButton).toHaveStyle({ background: "blue" });
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ background: "grey" });
});



    test("Button has text change on click", () => {
    
    });
