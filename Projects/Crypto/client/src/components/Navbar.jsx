import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.jpeg";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  InputBase,
  InputLabel,
  Menu,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Select,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Check from "@mui/icons-material/Check";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [products, setProducts] = useState("");

  const handleProducts = (event) => {
    setProducts(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: theme.palette.primary[1000],
        boxShadow: "none",
        height: "70px",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", width: "65%", mx: "auto" }}
      >
        {/* LEFT SIDE */}
        {/* <FlexBetween>
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween> */}
        <h2>Crypto Trading</h2>

        {/* RIGHT SIDE */}
        <FlexBetween gap="0.5rem">
          <FlexBetween gap="2.5rem">
            <Typography variant="h4">NFT</Typography>
            <Typography variant="h4">Prices</Typography>
            {/* <Typography variant="h4">Products</Typography> */}
            {/* <InputLabel id="products-label">Products</InputLabel> */}
            {/* <Select
              labelId="products-label"
              id="products"
              value={products}
              label="Products"
              onChange={handleProducts}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              variant="outlined"
            >
              <MenuItem value="">
                <em>Products</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}
            <Typography
              variant="h4"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
              // onMouseOut={() => {setAnchorEl(null)}}
              sx={{
                textTransform: "none",
                fontFamily: "Quicksand",
                cursor: "pointer",
              }}
              cursor="pointer"
            >
              Products
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{alignItems: "center"}}
            >
              <MenuList sx={{backgroundColor: theme.palette.white[0], padding: "15px"}}>
                <Box display="flex" alignItems="center" gap="10px" sx={{color: theme.palette.primary[600]}}>
                  <Typography variant="h1" fontWeight="bold" color={theme.palette.white[800]}>Get Started</Typography>
                  <MenuItem>
                    <ListItemText inset>Single</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText inset>1.15</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText inset>Double</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    {/* <ListItemIcon color={theme.palette.primary[600]}>
                      <Check />
                    </ListItemIcon> */}
                    Custom: 1.2
                  </MenuItem>
                </Box>
                <Divider color={theme.palette.primary[600]} />
                <MenuItem sx={{color: theme.palette.primary[600]}}>
                  <ListItemText>Add space before paragraph</ListItemText>
                </MenuItem>
                <MenuItem sx={{color: theme.palette.primary[600]}}>
                  <ListItemText>Add space after paragraph</ListItemText>
                </MenuItem>
                <Divider color={theme.palette.primary[600]} />
                <MenuItem sx={{color: theme.palette.primary[600]}}>
                  <ListItemText>Custom spacing...</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
            <Typography variant="h4">Company</Typography>
            <Typography variant="h4">Learn</Typography>
          </FlexBetween>
          <IconButton>
            <FlexBetween gap="0.5rem">
              <LanguageIcon sx={{ fontSize: "25px" }} />
              <h5>English</h5>
            </FlexBetween>
          </IconButton>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
