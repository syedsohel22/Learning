import CreateNote from "./components/CreateNote";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <CreateNote />
      <Sidebar />
    </>
  );
}
