import {inter} from '@/app/ui/fonts';
import '@/app/ui/global.css';
require('dotenv').config({ path: '.env' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
