import { Button } from "@mui/material";
import React from "react";
import "./index.css";
import { ArrowForward, QuestionAnswer, QuestionMark, QuestionMarkRounded, Settings } from "@mui/icons-material";
function DontKnowWhatToWatch() {
  const categories = [
    { title: "Categoria 1" },
    { title: "Categoria 2" },
    { title: "Categoria 3" },
    { title: "Categoria 4" },
    { title: "Categoria 5" },
    { title: "Categoria 6" },
    { title: "Categoria 7" },
    { title: "Categoria 8" },
    { title: "Categoria 9" },
  ];
  return (
    <div className="dontKnowWhatToWatch">
      <div className="labelSection">
        <QuestionMarkRounded /> Ainda não sabe o que assistir?
      </div>
      <div className="dontKnowWhatToWatchgrid">
        {categories.map((category) => (
          <Button className="categoryButton">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Settings />
              {category.title}
            </div>
            <ArrowForward />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default DontKnowWhatToWatch;
