import React from "react";
import SecondaryGradientButton from "../secondaryGrandientButton";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

export default function CreateAccountButton() {
  return <SecondaryGradientButton text="Criar Conta" icon={<AddBoxOutlinedIcon />} />;
}
