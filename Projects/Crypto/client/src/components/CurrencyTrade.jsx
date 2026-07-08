import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";
import CustomCurrencyButton from "./CurrencyButton";

// type = {
//   currencyType: String,
//   amountToday: String,
//   changeIndex: String,
//   amountTotal: String,
// };

const CustomCurrencyTrade = ({
  currencyType = "Bitcoin",
  amountToday = "$0",
  changeIndex = "0.00",
  amountTotal = "$0",
}) => {
  return (
    <Box>
      <FlexBetween
        sx={{
          marginX: "auto",
          width: "50%",
          textAlign: "right",
          marginY: "35px",
        }}
      >
        <Typography variant="h4">{currencyType}</Typography>
        <Typography variant="h3">{amountToday}</Typography>
        <Typography sx={{ color: "green" }}>{changeIndex}</Typography>
        <Typography variant="h3">{amountTotal}</Typography>
        <CustomCurrencyButton buttonText="Trade" onClick={() => {}} />
      </FlexBetween>
      <Divider
        sx={{
          width: "60%",
          marginX: "auto",
          textAlign: "center",
        //   color: "white",
        }}
        variant="middle"
      />
    </Box>
  );
};

export default CustomCurrencyTrade;
