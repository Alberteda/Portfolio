import type { Metadata } from "next";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Albert Eda",
  description: "Albert Eda Portfolio",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  );
}
