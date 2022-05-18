import React, { useState} from 'react'

export const ColorAction = () => {
    const [btnColor, setBtnColor] = useState("red");
    const [disabled, setDisabled] = useState(false);

    const newBtnColor = btnColor === "red" ? "blue" : "red";
    return (
        <div>
            <button
                onClick={() => setBtnColor(newBtnColor)}
                style={{ background: btnColor }}
                disabled = {disabled}
            >
                Change to {newBtnColor}
            </button>
            <input 
                type="checkbox"
                id="enable-button-checkbox"
                defaultChecked={disabled}
                aria-checked={disabled}
                onChange={({ target }) => setDisabled(target.checked)}
            />
        </div>
    )
}

