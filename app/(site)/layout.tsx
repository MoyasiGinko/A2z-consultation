"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
// import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ToasterContext from "@/app/utils/context/ToastContext";
import StoreProvider from "@/app/utils/provider/StoreProvider";
import { useEffect } from "react";
import { useAppDispatch } from "@/configs/redux/hooks";
import { fetchLoggedInUser } from "@/configs/redux/auth/authSlice";
import TawkToChat from "@/app/utils/context/TawkToChat";
import GoogleAnalytics from "@/app/utils/context/GoogleAnalytics";
import CookieConsent from "@/utils/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

const ReduxInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [dispatch]);
  return <>{children}</>;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <TawkToChat />
        <GoogleAnalytics />
        <body className={`flex min-h-screen flex-col ${inter.className}`}>
          {/* <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
          > */}
          <ReduxInitializer>
            <Lines />
            <Header />
            <ToasterContext />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
            <CookieConsent />
          </ReduxInitializer>
          {/* </ThemeProvider> */}
        </body>
      </html>
    </StoreProvider>
  );
}
