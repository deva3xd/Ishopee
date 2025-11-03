import { Head } from "@inertiajs/react";
import clsx from "clsx";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children, title, className, ...rest }) {
  return (
    <div className="bg-background">
      <Head title={title} />
      <main className={clsx("max-w-screen-xl mx-auto min-h-screen", className)} {...rest}>
        <Sidebar content={children} />
      </main>
    </div>
  );
}