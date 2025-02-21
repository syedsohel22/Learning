import { StickyNote, Bell, Archive, Trash } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-16 bg-gray-100 h-screen flex flex-col items-center py-4 shadow-md">
      <SidebarIcon icon={<StickyNote />} tooltip="Notes" />
      <SidebarIcon icon={<Bell />} tooltip="Reminders" />
      <SidebarIcon icon={<Archive />} tooltip="Archive" />
      <SidebarIcon icon={<Trash />} tooltip="Trash" />
    </aside>
  );
};

const SidebarIcon = ({ icon, tooltip }) => (
  <div className="group flex flex-col items-center my-4 cursor-pointer">
    <div className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition">
      {icon}
    </div>
    <span className="hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded-md mt-1">
      {tooltip}
    </span>
  </div>
);

export default Sidebar;
