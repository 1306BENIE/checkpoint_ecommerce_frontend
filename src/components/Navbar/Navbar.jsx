import React from "react";
import { ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-indigo-600">
        Anidassor Shop
      </Link>

      {/* Search bar */}
      <div className="flex-1 mx-8">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 text-gray-700">
        <Link to="/products" className="hover:text-indigo-600">
          Produits
        </Link>

        {/* Panier avec badge */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 hover:text-indigo-600" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          )}
        </Link>

        <User className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
      </div>
    </nav>
  );
}
