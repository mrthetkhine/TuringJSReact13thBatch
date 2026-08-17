"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import './global.css'
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { queryClient } from "./lib/hooks/queryClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider>
          <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
                <ThemeProvider theme={baselightTheme}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline />
                  {children}
                </ThemeProvider>
          </QueryClientProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
