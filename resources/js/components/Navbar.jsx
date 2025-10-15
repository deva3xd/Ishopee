import { Link, router, usePage } from "@inertiajs/react";
import { ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  const { auth, total } = usePage().props;

  const handleClick = (e) => {
    e.preventDefault();

    router.post(route("logout"));
  }

  return (
    <div className="shadow-sm bg-primary w-screen fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto navbar p-4">
        <Link href={route('home')} className="text-4xl font-semibold text-white">ishopee</Link>
        <div className="w-1/2 mx-auto flex gap-2">
          <label className="input w-full focus-within:outline-white border-none">
            <input type="search" className="grow" placeholder="Search" />
          </label>
          <button className="btn text-primary"><Search size={20} /></button>
        </div>
        <div className="flex gap-2">
          {auth.user ? (
            <>
              <Link href={route('cart')} className="btn btn-ghost btn-circle hover:bg-black border-none">
                <div className="indicator">
                  <ShoppingCart color="#ffffff" />
                  <span className="badge badge-sm indicator-item">{total.cart}</span>
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
            <Link href={route('login')} className="btn bg-primary text-white hover:text-primary hover:bg-white">Login / Register</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;