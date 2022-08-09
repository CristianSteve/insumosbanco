import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";

const Alertas = ({
  position,
  status = "success",
  message,
  show = false,
  hidden,
  left,
  bottom,
}) => {
  const styleAlert = {
    position: position || "initial",
    left: left || "1%",
    bottom: bottom || "1%",
    borderRadius: "10px",
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        hidden((e) => !e);
      }, 3000);
    }
  }, [show, hidden]);

  if (!show) return;
  else
    return (
      <Alert style={styleAlert} severity={status}>
        {message}
      </Alert>
    );
};

export default Alertas;
