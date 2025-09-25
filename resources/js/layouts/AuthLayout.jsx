import { Head } from "@inertiajs/react";
import clsx from "clsx";

export default function AuthLayout({ children, title, className, ...rest }) {
  return (
    <>
      <Head title={title} />
      <div className="h-12 bg-primary w-screen fixed top-0"></div>
      <main className={clsx("max-w-screen-xl mx-auto min-h-screen px-4", className)} {...rest}>
        {children}
      </main>
      <div className="h-12 bg-primary w-screen fixed bottom-0"></div>
    </>
  );
}