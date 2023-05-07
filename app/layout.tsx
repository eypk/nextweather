import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata = {
  title: "WeatherApp",
  description:
    "Weather App using next.js, typescript, tailwind CSS and consuming api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <nav></nav>
          {children}
        </main>
      </body>
    </html>
  );
}
