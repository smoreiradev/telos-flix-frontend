import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Video() {
  const { id } = useParams();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      Video {id}
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          background: "blue",
          padding: "10px",
          borderRadius: "5px",
          maxWidth: "70px",
        }}
        to="/"
      >
        Home
      </Link>
    </div>
  );
}
