import "./globals.css";

export const metadata = {
  title: "Stylish E-commerce Store",
  description: "A beautiful and modern e-commerce experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white dark:bg-slate-800 shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <a href="/" className="text-2xl font-bold text-primary">Stylish Store</a>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-slate-100 dark:bg-slate-800 text-secondary py-6">
          <div className="container mx-auto px-4 text-center">
            © 2024 Stylish Store. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}