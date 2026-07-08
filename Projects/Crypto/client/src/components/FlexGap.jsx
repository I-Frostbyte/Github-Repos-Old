const { Box } = require("@mui/material");
const { styled } = require("@mui/system")

const FlexGap = styled(Box)({
    display: "flex",
    gap: "10px",
    fontFamily: "Quicksand",
    alignItems: "center",
})

export default FlexGap