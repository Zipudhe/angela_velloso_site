import type { Metadata } from "next";
import { StyledComponentsRegistry } from '../libs/registry'
import { Header } from '../components/Header/Header'

const imageUrl = "cover_image"

export const metadata: Metadata = {
  title: "Angela Velloso",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <StyledComponentsRegistry>
          <Header imageUrl={imageUrl} />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
