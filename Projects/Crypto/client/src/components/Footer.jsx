import React, { useState } from "react";
import { Box, Divider, Grid, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import Faq from "react-faq-component";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const data = {
    rows: [
      {
        title: "What is crypto?",
        content: `Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank.
        Unlike traditional currencies, cryptocurrencies are not backed by a physical commodity or government, and their value is determined by market demand and supply. Cryptocurrencies can be used to buy goods and services, transfer funds, and trade in markets. Popular cryptocurrencies include Bitcoin, Ethereum, Litecoin, Ripple, and Cronos.
        Many cryptocurrencies, like Bitcoin, are created through a process called mining, which involves solving complex mathematical equations to validate and record transactions on a blockchain. This mechanism is also called Proof of Work (PoW). Another consensus mechanism that has increased in popularity — as it is more energy efficient — is Proof of Stake (PoS). Instead of mining, PoS relies on network participants validating transactions. Ethereum, the second-largest cryptocurrency, uses this consensus mechanism.`,
      },
      {
        title: "What is Bitcoin?",
        content: `Bitcoin is a cryptocurrency that operates on a peer-to-peer (P2P) network. It was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto. Bitcoin is the first and most well-known cryptocurrency, and it has gained significant popularity and value since its creation.
          Unlike traditional fiat currency, which is controlled by central banks and governments, Bitcoin operates independently of any central authority. Transactions are verified and recorded on the blockchain, which is a distributed ledger that maintains a permanent and transparent record of all transactions.
          Bitcoin can be bought, sold, and exchanged on various cryptocurrency exchanges, and it can be used to purchase goods and services from merchants that accept Bitcoin as a form of payment. The supply of bitcoins is limited to 21 million units, and new bitcoins are created through mining, which involves using specialized computer hardware to solve complex mathematical equations.
          Bitcoin is known for its high volatility, and its value can fluctuate rapidly in response to market conditions, news events, and other factors. Many traders, including institutional investors, see Bitcoin as a store of value and a way to participate in the growing cryptocurrency ecosystem.`,
      },
      {
        title: "Where to buy crypto?",
        content: `There are several ways to buy cryptocurrencies, including:
        Brokerage services: Crypto brokers allow users to simply buy and sell cryptocurrencies. A popular example is the Crypto.com App, trusted by over 80 million users. It is available at the Apple Store and on Google Play.
        Cryptocurrency exchanges: These are online platforms where users can buy, sell, and trade cryptocurrencies using fiat currency or other cryptocurrencies. They offer more complex functions compared to a crypto brokerage, adding trading instruments like crypto derivatives. The Crypto.com Exchange is an example of a popular crypto exchange.
        Peer-to-peer (P2P) marketplaces: These are platforms where buyers and sellers can directly trade cryptocurrencies without the involvement of a third-party exchange. This is also known as DeFi, short for decentralized finance. Multiple P2P crypto marketplaces can be accessed all in one app via the Crypto.com DeFi Wallet.
        It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com DeFi Wallet. `,
      },
      {
        title: "How to buy crypto?",
        content: `To buy crypto, follow these general steps:
        1. Choose a crypto platform to use, like the Crypto.com Exchange or Crypto.com App.
        2. Create an account on the chosen platform by providing personal information and ID verification, also known as ‘Know Your Customer’ (KYC) procedures.
        3. Deposit fiat currency or another cryptocurrency into the newly created account. The Crypto.com App supports bank transfers, credit cards, debit cards, and cryptocurrency transfers to buy crypto, depending on region.
        4. Navigate to the ‘Buy’ section of the Crypto.com Exchange or App and select the crypto to buy.
        5. Enter the amount of cryptocurrency to buy and confirm the transaction.
        6. The crypto will be deposited into the account. From here, it can be transferred to other crypto wallets or converted back to fiat currency and paid out to a bank account.
        It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com DeFi Wallet.`,
      },
      {
        title: "How to buy Bitcoin?",
        content: `Users can buy Bitcoin from a cryptocurrency exchange, a crypto brokerage service like the Crypto.com App, or a peer-to-peer (P2P) marketplace like those found in the Crypto.com DeFi Wallet. Here are some general steps to buying bitcoin from an exchange or brokerage service:
        1. Choose a reputable cryptocurrency platform that supports Bitcoin trading. Popular options include the Crypto.com App and the Crypto.com Exchange.
        2. Create an account on the chosen platform and complete the KYC verification process, which may require providing personal identification documents.
        3. Fund an account using a bank transfer, credit/debit card, or other cryptocurrency, depending on region.
        4. Navigate to the ‘Buy’ section of the platform and select Bitcoin as the cryptocurrency to buy.
        5. Enter the amount of bitcoin to buy, or the amount of fiat or cryptocurrency to spend.
        6. Review the transaction details and confirm the purchase.
        7. Once the transaction is complete, the bitcoin will be deposited into the chosen account. From here, the funds can be transferred to other crypto wallets or converted back to fiat currency and paid out to a bank account.
        It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com DeFi Wallet.`,
      },
      {
        title: "How to trade crypto?",
        content: `To trade cryptocurrency, follow these general steps:
        1. Choose a cryptocurrency exchange that supports trading. A popular option is the Crypto.com Exchange.
        2. Create an account on the chosen platform and perform ID verification, known as KYC (‘Know Your Customer’).
        3. Deposit funds into the newly created account using a supported payment method. The Crypto.com Exchange supports bank transfers and credit/debit cards.
        4. Navigate to the trading section of the platform and select the cryptocurrency pair to trade.
        5. Choose whether to buy or sell the cryptocurrency, and enter the amount to trade.
        6. Set the preferred price and order type. There are several types of orders, including market orders, limit orders, stop orders, and crypto options, which allow users to buy or sell at a specific price or under certain conditions.
        7. Submit the trade order and wait for it to be executed. Depending on market conditions, the trade may be filled immediately, or it may take time to be filled.
        8. Monitor trades and adjust strategies as necessary.
        Here is an introduction to trading on the Crypto.com Exchange.
        It is crucial to note that trading cryptocurrency carries risk, and it is important to trade only what you can afford to lose.`,
      },
      {
        title: "How to earn crypto?",
        content: `There are several ways to earn cryptocurrency, including:
        1. Mining: Cryptocurrency mining involves using specialized computer hardware to solve complex mathematical equations that validate transactions on a blockchain network. Successful miners are rewarded with newly minted cryptocurrency for their efforts.
        2. Staking/Lockups: Staking and lockups involve holding or locking up a certain amount of cryptocurrency in a wallet or on a platform to support the operations of the blockchain network. Stakers are rewarded with new cryptocurrency as a form of interest for their support.
        3. Trading: Trading cryptocurrency involves buying and selling cryptocurrencies on exchanges or other trading platforms. Those who have a good understanding of market trends and are able to make informed trading decisions can earn profits through trading.
        4. Airdrops: Airdrops are free distributions of cryptocurrency to users who meet certain criteria or participate in promotional activities.
        5. Crypto Projects: Some blockchain projects offer rewards or bounties for users who contribute to their development or community. This can include activities like bug bounties, testing, or content creation.
        It's important to note that each method of earning cryptocurrency carries its own risks and rewards. It is recommended to carefully research cryptocurrencies and understand the process before buying. Learn more about the crypto market at Crypto.com University.`,
      },
      {
        title: "How to earn rewards on crypto?",
        content: `Users can earn rewards on their cryptocurrency holdings through various products that offer rewards-bearing accounts or lending services. Here are some ways to earn rewards on cryptocurrency:
        1. The Crypto.com App, Exchange, and DeFi Wallet all offer different ways to earn rewards on crypto, called Crypto Earn.
        2. Create an account on the chosen platform and deposit cryptocurrency holdings into the rewards account.
        3. Depending on the platform, users may earn rewards through lending their cryptocurrency to other users or by locking up their cryptocurrency for a period of time.
        4. Some products offer fixed reward rates (e.g., the Crypto.com Visa Card), while others may offer variable rates that depend on market conditions (e.g., the 'Earn' feature in the Crypto.com DeFi Wallet).
        5. Monitor rewards and adjust strategies as necessary.
        It's important to note that earning interest and rewards on cryptocurrency carries risks, including fluctuations in market conditions that may affect interest rates. Make sure to carefully research and understand terms and conditions before depositing cryptocurrency.`,
      },
    ],
  };

  const styles = {
    bgColor: theme.palette.background,
    titleTextColor: theme.palette.white[200],
    rowTitleTextSize: "25px",
    rowTitleColor: theme.palette.white[200],
    rowContentColor: theme.palette.white[200],
    arrowColor: theme.palette.white[200],
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
    expandIcon: "+",
    collapseIcon: "-",
  };

  return (
    <Box mt="150px" sx={{ backgroundColor: theme.palette.primary[1000] }}>
      <Box
        display="flex"
        width="75%"
        mx="auto"
        pt="200px"
        alignItems="start"
        ml="300px"
      >
        <Typography variant="h2" width="30%" fontWeight="bold" mt="50px">
          Frequently Asked Questions
        </Typography>
        <Box width="55%">
          <Faq data={data} styles={styles} config={config} />
          <Box display="flex" gap="5px" alignItems="center" my="30px">
            <Typography variant="h5" fontWeight="bold">
              Have more questions?{" "}
            </Typography>
            <Typography
              variant="h5"
              color={theme.palette.secondary[600]}
              fontWeight="light"
            >
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ width: "100%", mx: "auto", mt: "200px", alignItems: "start", textAlign: "left", px: "300px" }}
      >
        <Grid item xs={10} spacing={4} sx={{display: "flex"}}>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <Typography variant="h4" fontWeight="bold" my="12px">
              App
            </Typography>
            <Typography variant="h5">Buy and Sell</Typography>
            <Typography variant="h5">Crypto Earn</Typography>
            <Typography variant="h5">Crypto.com Pay</Typography>
            <Typography variant="h4" fontWeight="bold" my="12px">
              Cards
            </Typography>
            <Typography variant="h5">Metal Visa Cards</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight="bold" my="12px">
              Exchange
            </Typography>
            <Typography variant="h5">Exchange Home</Typography>
            <Typography variant="h5">Margin Trading</Typography>
            <Typography variant="h5">Derivatives Trading</Typography>
            <Typography variant="h5">The Syndicate</Typography>
            <Typography variant="h5">Supercharger</Typography>
            <Typography variant="h5">Trading Arena</Typography>
            <Typography variant="h4" fontWeight="bold" my="16px">
              Commerce
            </Typography>
            <Typography variant="h5">Pay for Business</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight="bold" my="12px">
              DeFi
            </Typography>
            <Typography variant="h5">Wallet</Typography>
            <Typography variant="h5">Swap</Typography>
            <Typography variant="h5">Earn</Typography>
            <Typography variant="h5">Dashboard</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight="bold" my="12px">
              Resources
            </Typography>
            <Typography variant="h5">Prices</Typography>
            <Typography variant="h5">Site Widgets</Typography>
            <Typography variant="h5">Tax</Typography>
            <Typography variant="h5">Support</Typography>
            <Typography variant="h5">Proof of Reserves</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight="bold" my="12px">
              Learning
            </Typography>
            <Typography variant="h5">What's Trending</Typography>
            <Typography variant="h5">Product News</Typography>
            <Typography variant="h5">Events</Typography>
            <Typography variant="h5">University</Typography>
            <Typography variant="h5">Research</Typography>
            <Typography variant="h5">Market Updates</Typography>
            <Typography variant="h5">NFT Deep Dives</Typography>
            <Typography variant="h5">What is Bitcoin</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" fontWeight="bold" my="12px">
              Company
            </Typography>
            <Typography variant="h5">About</Typography>
            <Typography variant="h5">Careers</Typography>
            <Typography variant="h5">News</Typography>
            <Typography variant="h5">Security</Typography>
            <Typography variant="h5">Contact</Typography>
            <Typography variant="h5">Capital</Typography>
            <Typography variant="h5">Climate</Typography>
            <Typography variant="h5">Affiliate</Typography>
            <Typography variant="h5">Partners</Typography>
            <Typography variant="h5">NFT</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} spacing={2} sx={{display: "flex", mt: "10px", justifyContent: "space-between"}}>
          <Grid item xs={3}>
            <IconButton aria-label="twitter">
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="facebook">
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="instagram">
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="linkedIn">
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="youtube">
              <YouTubeIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="reddit">
              <RedditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton aria-label="telegram">
              <TelegramIcon />
            </IconButton>
          </Grid>
          {/* <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid> */}
        </Grid>
      </Grid>
      <Divider sx={{mt: "100px", mb: "20px", width: "65%", mx: "auto"}} />
      <Box display="flex" alignItems="center" gap="20px" width="65%" mx="auto" pb="50px">
        <Typography fontSize="">Copyright &copy; 2018 - 2023 Crypto.com All rights reverved.</Typography>
        <Box display="flex" gap="10px">
        <Typography fontSize="" fontWeight="bold">Privacy Notice</Typography>
        <Typography fontSize="" fontWeight="bold">|</Typography>
        <Typography fontSize="" fontWeight="bold">Status</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
