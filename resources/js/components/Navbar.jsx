import { Link, router, usePage } from "@inertiajs/react";
import { Store } from "lucide-react";
import { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const { auth, total } = usePage().props;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = (e) => {
    e.preventDefault();

    router.post(route("logout"));
  };

  return (
    <div className="shadow-sm bg-primary w-screen fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto navbar p-4 flex items-center justify-between">
        <Link href={route('home')} className="text-4xl font-semibold text-white">ishopee</Link>

        {/* hammburger button */}
        <div className="flex lg:hidden text-white">
          {auth.user && (
            <Link href={route('cart')} className="btn btn-ghost btn-circle border-none me-2 text-white hover:bg-white hover:text-primary">
              <div className="indicator">
                <ShoppingCart />
                <span className="badge badge-sm indicator-item text-primary border border-primary">{total.cart}</span>
              </div>
            </Link>
          )}
          <button onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* search bar */}
        <div className="hidden w-1/2 mx-auto lg:flex gap-2">
          <label className="input w-full focus-within:outline-white border-none">
            <input type="search" className="grow" placeholder="Search" />
          </label>
          <button className="btn text-primary"><Search size={20} /></button>
          {/* {auth.user &&
            <Link href={route('dashboard')} className="btn btn-ghost rounded-md text-white border-none hover:bg-white hover:text-primary">
              <div className="flex items-center gap-1">
                <Store />
                <span>Shop</span>
              </div>
            </Link>
          } */}
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex items-center gap-2">
          {auth.user ? (
            <div>
              <Link href={route('cart')} className="btn btn-ghost btn-circle border-none me-2 text-white hover:bg-white hover:text-primary">
                <div className="indicator">
                  <ShoppingCart />
                  <span className="badge badge-sm indicator-item text-primary border border-primary">{total.cart}</span>
                </div>
              </Link>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Profile"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                    <Link className="justify-between">Profile</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href={route('login')} className="btn bg-primary text-white hover:text-primary hover:bg-white">Login / Register</Link>
          )}
        </div>
      </div>

      {/* mobile menu */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-base-100 border-b border-primary ps-6`}>
        <ul className="flex flex-col p-2">
          {auth.user ? (
            <>
              <li>
                <div className="flex">
                  <label className="input w-full focus-within:outline-white border-none">
                    <input type="search" className="grow" placeholder="Search" />
                  </label>
                  <button className="btn text-primary"><Search size={20} /></button>
                </div>
              </li>
              <li>
                {/* <Link href={route('dashboard')} className="block py-2 text-sm hover:underline">Shop</Link> */}
              </li>
              <li>
                <Link href={route('cart')} className="block py-2 text-sm hover:underline">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="block py-2 text-sm hover:underline">Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link href={route('login')} className="block py-2 text-sm hover:underline">Login / Register</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;