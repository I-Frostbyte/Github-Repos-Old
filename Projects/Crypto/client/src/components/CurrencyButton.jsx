import { Button, Typography, useTheme } from "@mui/material";


const CustomCurrencyButton = ({ buttonText = "Trade", onClick = () => {} }) => {
  const theme = useTheme();
  
  const buttonSX = {
    "&:hover": {
      borderColor: theme.palette.secondary[400],
      backgroundColor: theme.palette.primary[600],
      color: theme.palette.white[0],
      textTransform: "none",
    },
    backgroundColor: theme.palette.white[0],
    color: "black",
    borderRadius: "100px",
    paddingX: "20px",
    paddingY: "10px",
    textTransform: "none",
  };

  return (
    <Button sx={buttonSX} variant="outlined" onClick={onClick}>
     <Typography variant="h5" sx={{fontWeight: "bold"}}> {buttonText}</Typography>
    </Button>
  );
};

export default CustomCurrencyButton;