import React from 'react'
import Button from "@mui/material/Button";
import { cyan } from "@mui/material/colors";

export default function RegisterButton() {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#1E7887",
          width: "220px",
          height: "48px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: cyan[800],
            boxShadow: "none",
          },
        }}
      > 
        Register
      </Button>
    </>
  );
}
