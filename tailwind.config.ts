import type { Config } from "tailwindcss"

export default <Partial<Config>>{
   theme: {
      extend: {
         colors: {
            wrl: {
               "50": "#fdffe7",
               "100": "#f9ffc1",
               "200": "#f7ff86",
               "300": "#fbff41",
               "400": "#ffeb00",
               "500": "#d2ae00",
               "600": "#d1ae00",
               "700": "#a67e02",
               "800": "#89620a",
               "900": "#74500f",
               "950": "#442b04",
            },
            secondary: "#2D9AFF",
         },
      },
   },
}
