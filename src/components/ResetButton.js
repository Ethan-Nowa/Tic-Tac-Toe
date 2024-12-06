import React from 'react'

// Creates the Reset Button.
export const ResetButton = ({ resetBoard }) => {
    return (
      <button className="reset-btn" onClick={resetBoard}>Reset</button>
    )
}

export default ResetButton;
