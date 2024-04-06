import "./globals.css";

export const metadata = {
  title: "Week 2 Day 3 Assignment",
  description: "A simple Next.js app to retrieve data from SWAPI and display it on the web page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
