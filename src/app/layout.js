import "./globals.css";

export const metadata = {
  title: "idpan. portofolio",
  description: "portofolio for idpan`s projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
