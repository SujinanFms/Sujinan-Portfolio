// app/fonts/ibm.js
import { IBM_Plex_Sans_Thai } from "next/font/google";

export const ibmThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-thai",
});
