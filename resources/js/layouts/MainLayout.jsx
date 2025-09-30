import { Head } from "@inertiajs/react";
import clsx from "clsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children, title, className, ...rest }) {
  return (
    <div className="bg-background">
      <Head title={title} />
      <Navbar />
      <main className={clsx("max-w-screen-xl mx-auto min-h-screen px-4 pt-20", className)} {...rest}>
        {children}
      </main>
      <Footer />
    </div>
  );
}