import React, { useState } from "react";

function RememberMeCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      Remember Me
    </label>
  );
}

export default RememberMeCheckbox;
