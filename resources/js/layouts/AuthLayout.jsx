import { Head } from "@inertiajs/react";
import clsx from "clsx";

export default function AuthLayout({ children, title, className, ...rest }) {
  return (
    <>
      <Head title={title} />
      <main className={clsx("max-w-screen-xl mx-auto px-4", className)} {...rest}>
        {children}
      </main>
    </>
  );
}