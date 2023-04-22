import React from "react";

export default function AppBarActions({ actions,texts }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
         {actions.map((element) => element)}
    </div>
  );
}
