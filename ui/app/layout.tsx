import "./globals.css";
import {AuthProvider} from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={`h-full antialiased`}>
      <body className="max-w-full min-h-full flex flex-col">
      <AuthProvider>
        <div className="min-h-full">
          <div className="py-10">
            <main>
              <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </AuthProvider>
      </body>
    </html>
  );
}
