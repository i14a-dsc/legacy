import "./globals.css";
import Header from "../components/Header";
import { Footer } from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";
import Sidebar from "@/components/Sidebar";

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={"container"}>
        <div>
          <Header />
        </div>
        <Sidebar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
