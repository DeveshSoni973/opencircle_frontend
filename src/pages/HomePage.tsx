import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

export default function Homepage() {
  return (
    <div className="flex h-screen overflow-hidden"> {/* children are horizontal, full height, cannot overflow */}
      {/* <Sidebar /> */}

      <main className="flex-1 min-w-0"> {/* flex-1: main fills all the width the sidebar doesn't use,  min-w-0: lets main shrink to the space left by the sidebar, so wide children can't make it overflow */}
        <Outlet />
      </main>
    </div>
  );
}