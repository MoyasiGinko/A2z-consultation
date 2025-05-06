"use client";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ToasterContext from "@/app/utils/context/ToastContext";
import StoreProvider from "@/app/utils/provider/StoreProvider";
import { useEffect } from "react";
import { useAppDispatch } from "@/configs/redux/hooks";
import { fetchLoggedInUser } from "@/configs/redux/auth/authSlice";
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
        <body className={`flex min-h-screen flex-col ${inter.className}`}>
          <ReduxInitializer>
            <ToasterContext />
            <main className="flex-grow">{children}</main>
          </ReduxInitializer>
        </body>
      </html>
    </StoreProvider>
  );
}
