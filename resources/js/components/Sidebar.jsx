import { Link, router, usePage } from "@inertiajs/react";
import { LayoutDashboard, User, LogOut } from "lucide-react";

const Sidebar = ({ content }) => {
  const { url } = usePage();

  const menus = [
    {
      href: route('admin.dashboard'),
      icon: LayoutDashboard,
      name: 'Admin Dashboard',
      url: '/admin/dashboard',
      route: 'admin.dashboard'
    },
    {
      href: route('admin.profile'),
      icon: User,
      name: 'Admin Profile',
      url: '/admin/profile',
      route: 'admin.profile'
    },
  ];

  const handleLogout = (e) => {
    e.preventDefault();

    router.post(route("logout"));
  };

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        {content}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu min-h-full w-60 p-4 items border-r border-primary gap-1">
          <Link href={route('home')} className="text-4xl font-semibold text-primary px-2 mb-2">ishopee</Link>
          <span className="text-xs font-normal">MENU</span>
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href} className={`text-black hover:bg-primary hover:text-white text-base ${route().current() == menu.route ? 'bg-primary text-white' : 'bg-white'}`}>
                <menu.icon size={20} />
                {menu.name}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={handleLogout} className="text-black hover:bg-red-600 hover:text-white text-base">
            <LogOut size={20} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;