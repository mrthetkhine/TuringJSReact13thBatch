

import ClientRootLayout from "@/app/(DashboardLayout)/ClientRootLayout";
import {cookies} from "next/headers";

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('Root layout.tsx');
  const cookieStore = await cookies();
  let token = cookieStore.get('auth_token');
  let isAuth = !!token;
  return <ClientRootLayout isAuth={isAuth}>
    {children}
  </ClientRootLayout>;
}
