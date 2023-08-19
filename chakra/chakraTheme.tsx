
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  
    // BREAK POINTS!
    
    // CUSTOM COLORS!
    colors: {
      brand: {
         100: "#FF3c08",
         violet: "#8A2BE2",
         orange: "#FFA500",
         blue: "#0000FF",
         red: "#FF0000",
         purple: "#800080",
         black: "#000000",
        },
       },

    // CUSTOM FONTS!

    // GLOBAL STYLES!
    styles: {
        global: {
         // styles for the `body`
         body: {
            bg: "#fff",
          },
       },
    },
  
    // CUSTOM COMPONENTS!
     components:{
   
    },
    
 })

