import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export function CircularLading(props) {
  const style = {
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={style} className="container">
      <CircularProgress />
    </div>
  );
}
