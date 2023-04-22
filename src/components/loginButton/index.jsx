import React from "react";
import PrimaryGradientButton from "../primaryGrandientButton";
import { PersonOutline } from "@mui/icons-material";

export default function LoginButton() {
  return <PrimaryGradientButton text="Fazer Login" icon={<PersonOutline />} />;
}
