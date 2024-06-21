import { extendTheme,StyleFunctionProps,ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react";
const config: ThemeConfig={
    initialColorMode:'dark'
}
const theme = extendTheme({config,colors:{
    secondary: {
        main: "#9d8ca2",
        50: "#f8effc",
        100: "#ddd4e1",
        200: "#c4b8c8",
        300: "#ac9cb0",
        400: "#938098",
        500: "#79677f",
        600: "#5e5064",
        700: "#443847",
        800: "#2a212d",
        900: "#110815"
      },
      primary: {
        main: "#324444",
        50: "#e6f3f7",
        100: "#d0dde0",
        200: "#b6c6c9",
        300: "#9aafb3",
        400: "#7f9a9d",
        500: "#658183",
        600: "#4e6667",
        700: "#364949",
        800: "#1d2c2d",
        900: "#000f11"
      }
},
styles:{
  global: (props: StyleFunctionProps) => ({
    "h1": {
      color: props.colorMode === "dark" ? "white" : "primary.700",
    },
  }),
},
components: {
  Heading: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: props.colorMode === "dark" ? "white" : "primary.700",
    }),
  },
},
}
)
export default theme