import React from "react";
import * as jose from "jose";
import {
  Box,
  Button,
  Container,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LaunchIcon from "@mui/icons-material/Launch";
import EastIcon from "@mui/icons-material/East";
import FlexBetween from "components/FlexBetween";
import FlexGap from "components/FlexGap";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import { Image } from "mui-image";
import phone from "../../assets/buy-and-sell-2.jpg";
import secondPhone from "../../assets/earn-phone-1.jpg";
import backgroundImage from "../../assets/home-background-image.jpg";
import defiPhone from "../../assets/defi-phone.jpg"
import cryptoLogo from "../../assets/crypto-logo.jpg"
import cryptoLogoBg from "../../assets/crypto-logo-bg.jpg"
import CustomCurrencyTrade from "components/CurrencyTrade";
import jwt_decode from "jwt-decode";
// import jwt from "jsonwebtoken";
const Buffer = require("buffer/").Buffer;

const Dashboard = () => {
  const theme = useTheme();

  const buttonSX = {
    "&:hover": {
      backgroundColor: theme.palette.primary[400],
      textTransform: "none",
      borderColor: theme.palette.white[0],
    },
    // alignItems: "center",
    // marginX: "auto",
    color: "White",
    textTransform: "none",
    borderColor: theme.palette.white[0],
    paddingX: "20px",
    paddingY: "12px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const defiButtonSX = {
    "&:hover": {
      backgroundColor: theme.palette.primary[400],
      textTransform: "none",
      borderColor: "white",
    },
    // alignItems: "center",
    // marginX: "auto",
    backgroundColor: theme.palette.primary[600],
    textTransform: "none",
    borderColor: "white",
    paddingX: "20px",
    paddingY: "12px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  let jwtCode = `eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcl9uYW1lIjoiQWtvbmVoIiwiYW1vdW50IjoiMTAiLCJ0aWNrZXRfbm8iOiIiLCJoYWxsX25vIjowLCJvcmRlcl9ubyI6IiIsInNlYXRfbm8iOjAsInRpY2tldF9uYW1lIjoiR29sZCIsIm51bWJlcl9vZl90aWNrZXRzIjoiMSIsInBob25lX251bWJlciI6IjIzNzY4MTA5OTIzOCIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiand0LmlvIiwiYXVkIjoiY2xpcWtldHMuY29tIn0.qtc_oUvwk1u84YozVway1bD0c7-JxI-BE88Kzs8jIp-lC2ZcveXL7JHRzLtcaz29OhbwnR80o_Rs0PU2aKXHrQ`;

  const verifyJWT = async () => {
    const alg = "ES256";
    const spki = `-----BEGIN PUBLIC KEY-----
    MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9
    q9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==
    -----END PUBLIC KEY-----`;
    const publicKey = await jose.importSPKI(spki, alg);

    // const jwtDecoded = async (token) => {
    //   // const jwtBytes = Buffer.from(token, "utf8");
    //   const decodedToken = jwt_decode(token);
    //   return decodedToken;
    // }

    const verifiedJwt = await jose
      .jwtVerify(jwtCode, publicKey, {
        issuer: "jwt.io",
        audience: "cliqkets.com",
      })
      // .then(() => {
      //   console.log("====================================");
      //   console.log("Ticket Verified");
      //   console.log("====================================");
      // });

    console.log(verifiedJwt);
    // console.log(payload);
  };

  // const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      {/* Dashboard
      <Button
        variant="contained"
        onClick={() => {
          verifyJWT();
        }}
        sx={{ marginX: "12px" }}
      >
        Generate JWT
      </Button> */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          mx: "auto",
          width: "full",
          mt: "200px",
          mb: "40px",
          width: "50%",
          textAlign: "center",
          fontSize: "60px",
        }}
      >
        The World's Leading Cryptocurrency Platform
      </Typography>
      <FlexGap sx={{ mx: "auto", width: "47%", my: "10px" }}>
        <CheckCircleIcon sx={{ color: "blue" }} />
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
          Trusted by more than 80M users world-wide
        </Typography>
      </FlexGap>
      <FlexGap sx={{ mx: "auto", width: "47%", my: "10px" }}>
        <CheckCircleIcon sx={{ color: "blue" }} />
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
          Leader in regulatory compliance and security certifications
        </Typography>
      </FlexGap>
      <FlexGap sx={{ mx: "auto", width: "47%", my: "10px" }}>
        <CheckCircleIcon sx={{ color: "blue" }} />
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
          The industry's most comprehensive insurance coverage and proof of
          reserves
        </Typography>
      </FlexGap>
      <Box
        sx={{
          mt: "750px",
          backgroundColor: theme.palette.secondary[600],
          padding: "200px",
          borderRadius: "150px",
          width: "50%",
          mx: "auto",
          filter: "blur(300px)",
          mb: "100px",
        }}
      ></Box>
      <Image
        src={phone}
        style={{
          marginX: "auto",
          width: "25%",
          height: "100%",
          position: "absolute",
          marginBottom: "750px",
        }}
      />
      {/* <img src={phone} alt="" /> */}
      <Typography
        variant="h4"
        sx={{
          marginTop: "400px",
          marginX: "auto",
          width: "29%",
          color: theme.palette.secondary[400],
          textAlign: "center",
        }}
      >
        SECURELY BUY, SELL, STORE, SEND AND TRACK
      </Typography>
      <Typography
        variant="h1"
        sx={{
          marginY: "20px",
          marginX: "auto",
          width: "40%",
          fontWeight: "bold",
          justifyContent: "center",
          fontSize: "60px",
          textAlign: "center",
        }}
      >
        Buy crypto at true cost
      </Typography>
      <Typography
        variant="h4"
        sx={{
          marginX: "auto",
          marginY: "10px",
          width: "35%",
          textAlign: "center",
        }}
      >
        Buy and sell 250+ crytpocurrencies with 20+ fiat currencies using bank
        transfers or your credit/debit card
      </Typography>
      <Box sx={{ marginTop: "60px" }}>
        <CustomCurrencyTrade
          currencyType="Bitcoin"
          amountToday="$30,726.64"
          changeIndex="+0.80%"
          amountTotal="$596,511,320,894.19"
        />
        <CustomCurrencyTrade
          currencyType="Ethereum"
          amountToday="$1,875.10"
          changeIndex="-0.82%"
          amountTotal="$225,361,191,152.12"
        />
        <CustomCurrencyTrade
          currencyType="Cardano"
          amountToday="$0.281745"
          changeIndex="-2.69%"
          amountTotal="$9,843,645,291.46"
        />
        <CustomCurrencyTrade
          currencyType="Dogecoin"
          amountToday="$0.064998"
          changeIndex="-1.68%"
          amountTotal="$9,095,818,190.64"
        />
        <CustomCurrencyTrade
          currencyType="Polkadot"
          amountToday="$5.08"
          changeIndex="-2.08%"
          amountTotal="$6,302,875,819.27"
        />

        <Box sx={{ width: "10%", marginX: "auto", marginY: "60px" }}>
          <Button
            variant="outlined"
            sx={buttonSX}
            endIcon={<ArrowForwardIcon />}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: "150px" }}>
        <Box
          sx={{
            mt: "200px",
            position: "absolute",
            backgroundColor: theme.palette.secondary[600],
            padding: "200px",
            borderRadius: "250px",
            width: "30%",
            // mx: "auto",
            marginLeft: "200px",
            filter: "blur(115px)",
          }}
        ></Box>
        <FlexGap>
          <Box>
            <Image
              src={secondPhone}
              style={{
                // marginX: "auto",
                marginLeft: "300px",
                marginTop: "30px",
                width: "50%",
                height: "100%",
                // position: "absolute",
                // marginBottom: "750px",
                // marginTop: "200px",
                // bottom: 0,
              }}
            />
          </Box>
          <Box
            sx={{
              justifyContent: "flex-start",
              marginLeft: "150px",
              marginBottom: "75px",
              width: "40%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: theme.palette.secondary[600] }}
            >
              CRYPTO EARN
            </Typography>
            <Typography
              variant="h1"
              sx={{ marginTop: "15px", fontWeight: "bold", fontSize: "45px" }}
            >
              Get the most out of your assets, safely
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "45px", fontSize: "20px", marginBottom: "70px" }}
            >
              Choose from 21+ cryptocurrencies and stablecoins.
            </Typography>
            <Button
              variant="outlined"
              sx={buttonSX}
              endIcon={<ArrowForwardIcon />}
            >
              Calculate Rewards
            </Button>
          </Box>
        </FlexGap>
      </Box>
      <Box sx={{ marginY: "100px" }}>
        <Image
          src={backgroundImage}
          style={{
            // marginX: "auto",
            // marginLeft: "300px",
            // marginTop: "30px",
            // width: "50%",
            // height: "100%",
            // position: "absolute",
            // marginBottom: "750px",
            // marginTop: "200px",
            // bottom: 0,
            objectFit: "cover",
            position: "absolute",
            marginTop: "1500px",
            height: "150%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            backgroundColor: theme.palette.primary[600],
            paddingX: "200px",
            paddingY: "665px",
            opacity: 0.7,
            marginTop: "70px",
            zIndex: 1,
            // objectFit: "cover",
          }}
        ></Box>
        <Box sx={{ zIndex: 0, position: "absolute", bottom: "-3550px" }}>
          <Box sx={{ width: "50%", mx: "auto", textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: theme.palette.secondary[600] }}
            >
              CRYPTO.COM EXCHANGE
            </Typography>
            <Typography
              variant="h1"
              sx={{ marginTop: "15px", fontWeight: "bold", fontSize: "45px" }}
            >
              Trade with confidence on the world’s fastest and most secure
              crypto exchange
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              width: "50%",
              position: "absolute",
              marginTop: "300px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ marginBottom: "20px", fontWeight: "bold" }}
              color={theme.palette.secondary[600]}
            >
              DESKTOP
            </Typography>
            <Button variant="outlined" sx={buttonSX} endIcon={<LaunchIcon />}>
              Go to Crypto.com Exchange
            </Button>
          </Box>
          <Box
            sx={{
              width: "70%",
              mx: "auto",
              position: "absolute",
              marginTop: "850px",
              left: "300px",
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h2"
                sx={{ marginBottom: "20px", fontWeight: "bold" }}
              >
                Liquidity
              </Typography>
              <Typography variant="h4" sx={{ width: "100%" }}>
                Deep order book liquidity in all market conditions
              </Typography>
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h2"
                sx={{ marginBottom: "20px", fontWeight: "bold" }}
              >
                Speed
              </Typography>
              <Typography variant="h4" sx={{ my: "10px" }}>
                2.7m TPS matching engine
              </Typography>
              <Typography variant="h4" sx={{ my: "10px" }}>
                50 micro second core latency
              </Typography>
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h2"
                sx={{ marginBottom: "20px", fontWeight: "bold" }}
              >
                Security
              </Typography>
              <Typography variant="h4" sx={{ my: "10px" }}>
                SOC2 Type 1 Compliance
              </Typography>
              <Typography variant="h4" sx={{ my: "10px" }}>
                PCI:DSS 3.2.1 Level 1 compliance
              </Typography>
              <Typography variant="h4" sx={{ my: "10px" }}>
                ISO/IEC 27001:2013
              </Typography>
              <Typography variant="h4" sx={{ my: "10px" }}>
                ISO/IEC 27701:2019
              </Typography>
              <Typography variant="h4" sx={{ my: "10px" }}>
                ISO 22301:2019
              </Typography>
              <Typography variant="h4" sx={{ my: "10px" }}>
                Singapore Data Protection Trust Mark
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        backgroundColor={theme.palette.white[0]}
        sx={{ py: "125px" }}
      >
        <Box
          sx={{
            width: "75%",
            mx: "auto",
            textAlign: "left",
            display: "flex",
            // gap: "200px",
          }}
        >
          <Box sx={{width: "100%", mt: "150px"}}>
            <Typography
              variant="h4"
              color={theme.palette.secondary[600]}
              sx={{ fontWeight: "bold" }}
            >
              CRYPTO.COM DEFI
            </Typography>
            <Typography
              variant="h1"
              sx={{
                marginTop: "10px",
                marginBottom: "35px",
                fontWeight: "bold",
              }}
              color={theme.palette.primary[600]}
            >
              DeFi Made Simple
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "end",
                my: "10px",
              }}
            >
              <Typography
                variant="h3"
                color={theme.palette.primary[600]}
                sx={{ fontWeight: "bold" }}
              >
                DeFi Wallet.
              </Typography>
              <Typography
                color={theme.palette.white[700]}
                sx={{ fontWeight: "bold" }}
                variant="h3"
              >
                Your Keys, Your Crypto.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "end",
                my: "10px",
              }}
            >
              <Typography
                variant="h3"
                color={theme.palette.primary[600]}
                sx={{ fontWeight: "bold" }}
              >
                DeFi Earn.
              </Typography>
              <Typography
                color={theme.palette.white[700]}
                sx={{ fontWeight: "bold" }}
                variant="h3"
              >
                No lock-up period and stable returns.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "end",
                my: "10px",
              }}
            >
              <Typography
                variant="h3"
                color={theme.palette.primary[600]}
                sx={{ fontWeight: "bold" }}
              >
                DeFi Swap.
              </Typography>
              <Typography
                color={theme.palette.white[700]}
                sx={{ fontWeight: "bold" }}
                variant="h3"
              >
                Swap DeFi coins and earn Triple Yield.
              </Typography>
            </Box>
            <FlexGap sx={{ mt: "100px", mb: "50px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  py: "15px",
                  px: "30px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: theme.palette.primary[100] },
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Get DeFi Wallet
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  py: "15px",
                  px: "30px",
                  textTransform: "none",
                  backgroundColor: theme.palette.primary[600],
                  "&:hover": { backgroundColor: theme.palette.primary[600] },
                }}
                endIcon={<EastIcon />}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Explore DeFi Features
                </Typography>
              </Button>
            </FlexGap>
          </Box>
          <Image
            src={defiPhone}
            style={{
              // marginX: "auto",
              // marginLeft: "300px",
              // marginTop: "30px",
              width: "75%",
              height: "100%",
              // position: "absolute",
              // marginBottom: "750px",
              // marginTop: "200px",
              // bottom: 0,
            }}
          />
        </Box>
      </Box>

      <Box alignItems="center" textAlign="center" sx={{mt: "100px"}}>
        <Box>
          <Typography variant="h3" sx={{textTransform: "uppercase", fontWeight: "bold", my: "10px"}} color={theme.palette.secondary[600]}>Our Vision</Typography>
          <Typography variant="h1" sx={{width: "30%", mx: "auto", fontWeight: "bold", fontSize: "50px", mb: "30px"}}>Cryptocurrency in Every Wallet</Typography>
        </Box>
        <Box
          sx={{
            mt: "95px",
            position: "absolute",
            backgroundColor: theme.palette.secondary[1000],
            py: "85px",
            borderRadius: "250px",
            width: "9%",
            // mx: "auto",
            marginLeft: "797px",
            filter: "blur(5px)",
          }}
        ></Box>
        <Image src={cryptoLogoBg} style={{width: "25%", opacity: 0.5}} />
        <Box display="flex" alignItems="center" justifyContent="space-between" width="40%" mx="auto" mb="125px">
          <Box>
            <Typography variant="h3" fontWeight="bold" my="10px">
              Founded in
            </Typography>
            <Typography variant="h1" fontWeight="bold" color={theme.palette.secondary[600]}>2023</Typography>
          </Box>
          <Box>
            <Typography variant="h3" fontWeight="bold" my="10px">
              Users
            </Typography>
            <Typography variant="h1" fontWeight="bold" color={theme.palette.secondary[600]}>2M</Typography>
          </Box>
        </Box>
        <Button
              variant="outlined"
              sx={buttonSX}
              endIcon={<ArrowForwardIcon />}
            >
              About Us
            </Button>
      </Box>
    </ScrollContainer>
  );
};

export default Dashboard;
