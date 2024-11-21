// components
import Header from "@/components/Header/Header";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}