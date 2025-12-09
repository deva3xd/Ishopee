import { Link, router, useForm, usePage } from "@inertiajs/react";
import { Store } from "lucide-react";
import { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const { auth, total } = usePage().props;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { data, setData, get } = useForm({ search: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    get(route('home'), data, {
      preserveState: true,
    });
  }

  const handleLogout = () => {
    router.post(route("logout"));
  };

  return (
    <div className="shadow-sm bg-primary w-screen fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto navbar p-4 flex items-center justify-between">
        <Link href={route('home')} className="text-4xl font-semibold text-white">ishopee</Link>

        {/* hammburger button */}
        <div className="flex lg:hidden text-white">
          {auth.user &&
            <Link href={route('cart')} className="btn btn-ghost btn-circle border-none me-2 text-white hover:bg-white hover:text-primary">
              <div className="indicator">
                <ShoppingCart />
                <span className="badge badge-sm indicator-item text-primary border border-primary">{total.item}</span>
              </div>
            </Link>
          }
          <button onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* search bar */}
        <div className="hidden mx-auto lg:flex gap-2 flex-1 max-w-2xl">
          <form onSubmit={handleSubmit} className="flex w-3/4 mx-auto gap-2">
            <label className="input w-full border-none focus-within:bg-gray-200 shadow-none focus-within:outline-none">
              <input id="search" name="search" value={data.search} onChange={(e) => setData("search", e.target.value)} type="search" className="grow" placeholder="Search" required />
            </label>
            <button type="submit" className="btn text-primary"><Search size={20} /></button>
          </form>
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex items-center gap-2">
          {auth.user ? (
            <>
              <Link href={route('admin.dashboard')} className="btn btn-ghost p-2 rounded-full text-white border-none hover:bg-white hover:text-primary">
                <div className="flex items-center gap-1">
                  <Store />
                </div>
              </Link>
              <Link href={route('cart')} className="btn btn-ghost btn-circle border-none me-2 text-white hover:bg-white hover:text-primary">
                <div className="indicator">
                  <ShoppingCart />
                  <span className="badge badge-sm indicator-item text-primary border border-primary">{total.item}</span>
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
            </>
          ) : (
            <Link href={route('login')} className="btn bg-primary text-white hover:text-primary hover:bg-white">Login / Register</Link>
          )}
        </div>
      </div>

      {/* mobile menu */}
      <div className={`lg:hidden bg-[#f5f5f5] ${menuOpen ? 'block' : 'hidden'} bg-base-100 border-b border-primary ps-4`}>
        <ul className="flex flex-col p-2">
          <li>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-1">
                <label className="input w-full focus-within:outline-white border border-gray-300">
                  <input id="search" name="search" value={data.search} onChange={(e) => setData("search", e.target.value)} type="search" className="grow" placeholder="Search" required />
                </label>
                <button type="submit" className="btn text-primary border border-gray-300"><Search size={20} /></button>
              </div>
            </form>
          </li>
          {auth.user ? (
            <>
              <li>
                <Link href={route('admin.dashboard')} className="block py-2 text-sm hover:underline font-medium">Shop</Link>
              </li>
              <li>
                <Link href={route('cart')} className="block py-2 text-sm hover:underline font-medium">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="block py-2 text-sm hover:underline font-medium">Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link href={route('login')} className="block py-2 text-sm hover:underline font-medium">Login / Register</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;