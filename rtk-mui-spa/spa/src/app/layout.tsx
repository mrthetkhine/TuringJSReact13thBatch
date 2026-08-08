"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import './global.css'
import { StoreProvider } from "./StoreProvider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/lib/store";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
          <StoreProvider>
              <PersistGate loading={null} persistor={persistor}>

                    <ThemeProvider theme={baselightTheme}>
                      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                      <CssBaseline />
                      {children}
                    </ThemeProvider>

              </PersistGate>
          </StoreProvider>
      </body>
      </html>
  );
}
