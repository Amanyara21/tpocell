import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TPO Cell - UIET KUK",
  description: "Training and Placement Cell- UIET KUK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="./images/UIETBlack.png" type="image/x-icon"/>
      <link rel="shortcut icon" href="./images/UIETBlack.png" type="image/x-icon"/>
    </head>
      <body className={inter.className}>
      <Suspense fallback={<Loading />}>{children}</Suspense></body>
    </html>
  );
}
