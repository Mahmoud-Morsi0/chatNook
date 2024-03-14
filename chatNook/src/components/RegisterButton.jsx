import React from "react";
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
          marginLeft: "10px",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: cyan[800],
            boxShadow: "none",
          },
        }}
      >
        Sign Up
      </Button>
    </>
  );
}
