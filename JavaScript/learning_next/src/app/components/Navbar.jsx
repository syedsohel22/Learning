import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-2xl font-bold">Keep</span>
      </div>
      <div className="flex items-center border rounded-md px-3 py-1 bg-gray-100">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 bg-transparent outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;
