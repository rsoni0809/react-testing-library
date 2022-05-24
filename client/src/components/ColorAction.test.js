import { render, screen, fireEvent } from "@testing-library/react";
import { ColorAction, replaceCamelWithSpace } from "./ColorAction";

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
    expect(newButtonColor).toHaveTextContent("Change to red");
     fireEvent.click(newButtonColor);
    // expect new color to be blue
    expect(newButtonColor).toHaveStyle({ backgroundColor: 'red' });

    // expect new text to be Change to red
    expect(newButtonColor).toHaveTextContent("Change to blue");
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

    expect(colorButton).toHaveTextContent("Change to red");
    expect(colorButton).toHaveStyle({ background: "grey" });
    fireEvent.click(checkbox);
     expect(colorButton).toHaveStyle({ background: "blue" });
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ background: "grey" });
});

describe("Create spaces for multiple function to deal with string camelcase", () => {
    test("Works for when no inner capital letter", () => {
        expect(replaceCamelWithSpace("Brown")).toBe("Brown");
    });

    test("Works for when one inner capital letter", () => {
        expect(replaceCamelWithSpace("BrownColor")).toBe("Brown Color");
    });

    test("Works for when multiple capital letter", () => {
        expect(replaceCamelWithSpace("ChocolateIsBrownColor")).toBe("Chocolate Is Brown Color");
    })
    
})





  
