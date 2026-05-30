'use client'

import Link from "next/link";
import {
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

export default function SideBarAdmin() {
  return (
    <div className=" fixed left-0 top-20   drawer lg:drawer-open">

      {/* Toggle Button Mobile */}
      <input id="admin-sidebar" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col">

        {/* Navbar Mobile */}
        <div className="w-full navbar bg-base-100 border-b lg:hidden">

          <div className="flex-none">
            <label
              htmlFor="admin-sidebar"
              className="btn btn-square btn-ghost"
            >
              <FaBars className="text-xl" />
            </label>
          </div>

          <div className="flex-1 px-2 font-bold text-xl">
            Admin Dashboard
          </div>

        </div>

      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">

        <label
          htmlFor="admin-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <aside className="bg-black lg:w-72 h-[90vh] z-0 bg-base-200 border-r border-base-300 flex flex-col">

          {/* Logo */}
          <div className="p-6 border-b border-base-300">
            <h1 className="text-3xl font-extrabold text-primary">
              Alpha Admin
            </h1>

            <p className="text-sm opacity-70 mt-1">
              Dashboard Panel
            </p>
          </div>

          {/* Menu */}
          <ul className="menu p-4 flex-1 gap-2 text-base-content">

            <li>
              <Link
                href="/admin"
                className="flex items-center gap-3 active"
              >
                <FaHome className="text-lg" />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/admin/products"
                className="flex items-center gap-3"
              >
                <FaBoxOpen className="text-lg" />
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/admin/orders"
                className="flex items-center gap-3"
              >
                <FaShoppingCart className="text-lg" />
                Orders
              </Link>
            </li>

            <li>
              <Link
                href="/admin/users"
                className="flex items-center gap-3"
              >
                <FaUsers className="text-lg" />
                Users
              </Link>
            </li>

            <li>
              <Link
                href="/admin/analytics"
                className="flex items-center gap-3"
              >
                <FaChartBar className="text-lg" />
                Analytics
              </Link>
            </li>

            <li>
              <Link
                href="/admin/settings"
                className="flex items-center gap-3"
              >
                <FaCog className="text-lg" />
                Settings
              </Link>
            </li>

          </ul>

          {/* Bottom */}
          <div className="p-4 border-t border-base-300">

            <button className="btn btn-error w-full flex items-center gap-2">
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </aside>

      </div>

    </div>
  );
}