import { Link, router, usePage } from "@inertiajs/react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { auth } = usePage().props;

  const handleClick = (e) => {
    e.preventDefault();

    router.post(route("logout"));
  }

  return (
    <div className="shadow-sm bg-primary w-screen fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto navbar p-4">
        <div className="flex-1">
          <Link href={route('home')} className="text-4xl font-semibold text-white">ishopee</Link>
        </div>
        <div className="w-full mx-24 flex gap-2">
          <label className="input w-full focus-within:outline-white border-none">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
          </label>
          <button className="btn text-primary">Search</button>
        </div>
        <div className="flex gap-2">
          {auth.user ? (
            <>
              <Link href={route('cart')} className="btn btn-ghost btn-circle hover:bg-black border-none">
                <div className="indicator">
                  <ShoppingCart color="#ffffff" />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </Link>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                    <Link className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleClick}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="flex gap-1">
              <Link href={route('login')} className="btn bg-primary text-white hover:text-primary hover:bg-white">Login</Link>
              <Link href={route('register')} className="btn bg-primary text-white hover:text-primary hover:bg-white">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;