import localFont from "next/font/local";
import "/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { cn } from "~~/components/ui/utils";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;
const imageUrl = `${baseUrl}/thumbnail.jpg`;

const title = "Dugup";
const titleTemplate = "%s | ETH Seoul Hackathon 2024";
const description = "Built with 🏗 Scaffold-ETH 2";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: titleTemplate,
  },
  description,
  openGraph: {
    title: {
      default: title,
      template: titleTemplate,
    },
    description,
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [imageUrl],
    title: {
      default: title,
      template: titleTemplate,
    },
    description,
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn([
          Pretendard.className,
          "max-w-96 min-w-[320px] min-h-[calc(100dvh)] w-full bg-fc-white mx-auto pb-10",
        ])}
      >
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

const Pretendard = localFont({
  src: [
    {
      path: "./_styles/fonts/PretendardVariable.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_styles/fonts/PretendardVariable.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./_styles/fonts/PretendardVariable.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./_styles/fonts/PretendardVariable.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./_styles/fonts/PretendardVariable.woff2",
      weight: "800",
      style: "extrabold",
    },
  ],
  display: "swap",
});

export default ScaffoldEthApp;
