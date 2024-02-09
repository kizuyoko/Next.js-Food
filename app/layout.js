import "./globals.css";

export const metadata = {
  title: "NextJS Food",
  description: "Food App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
