export const tokensDark = {
  white: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#fdfdfd",
    200: "#fbfbfb",
    300: "#f8f8f8",
    400: "#f6f6f6",
    500: "#f4f4f4",
    600: "#c3c3c3",
    700: "#929292",
    800: "#626262",
    900: "#313131",
    1000: "#000000",
  },
  primary: {
    // black
    0: "#ffffff",
    100: "#ccccd1",
    200: "#9999a3",
    300: "#676774",
    400: "#343446",
    500: "#010118",
    600: "#010113",
    700: "#01010e",
    800: "#00000a",
    900: "#000005",
    1000: '#061121'
  },

  secondary: {
    // blue
    100: "#cfebfe",
    200: "#a0d6fd",
    300: "#70c2fc",
    400: "#41adfb",
    500: "#1199fa",
    600: "#0e7ac8",
    700: "#0a5c96",
    800: "#073d64",
    900: "#031f32",
    1000: "#03D6FF"
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reveredObj = {};
        for (let i = 0; i < length; i++) {
            reveredObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[keys] = reveredObj;
    });
    return reversedTokens;
}

export const tokensLight = reverseTokens(tokensDark);

// mui theme settings

export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                // palette values for dark mode
                primary: {
                    ...tokensDark.primary,
                    main: tokensDark.primary[400],
                    light: tokensDark.primary[400],
                },
                secondary: {
                    ...tokensDark.secondary,
                    main: tokensDark.secondary[300],
                },
                white: {
                    ...tokensDark.white,
                },
                neutral: {
                    ...tokensDark.white,
                    main: tokensDark.white[500],
                },
                background: {
                    default: tokensDark.primary[600],
                    alt: tokensDark.primary[500],
                }
            }
            : {
                // palette values for light mode
                primary: {
                    ...tokensLight.primary,
                    main: tokensDark.white[50],
                    light: tokensDark.white[100],
                },
                secondary: {
                    ...tokensLight.secondary,
                    main: tokensDark.secondary[600],
                    light: tokensDark.secondary[700],
                },
                white: {
                    ...tokensDark.white,
                },
                neutral: {
                    ...tokensLight.white,
                    main: tokensDark.white[500],
                },
                background: {
                    default: tokensDark.white[0],
                    alt: tokensDark.white[50],
                }
            })
        },
        typography: {
            fontFamily: ["Quicksand", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Quicksand", "sans-serif"].join(","),
                fontSize: 14
            },
        },
    };
};