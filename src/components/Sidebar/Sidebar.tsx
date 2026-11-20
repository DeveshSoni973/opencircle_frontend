
import SidebarNavbar from "./SidebarNavbar";
import SidebarChat from "./SidebarChat";

export default function Sidebar() {
  const conversations = [
    { id: 1, title: "Understanding Tailwind Flexbox" },
    { id: 2, title: "Token Strategies" },
    { id: 3, title: "FastAPI CRUD Architecture" },
    { id: 4, title: "Learning React Router" },
  ];

  return (
    <aside className="w-80 shrink-0 h-full flex flex-col bg-bg-sidebar border-r border-border">
      <SidebarNavbar />

      <div className="flex-1 min-h-0 overflow-y-auto p-3">
        <h2 className="text-sm font-semibold text-text-secondary mb-3">
          Conversations
        </h2>

        <div className="flex flex-col gap-1">
          {conversations.map((chat) => (
            <SidebarChat key={chat.id} title={chat.title} />
          ))}
        </div>
      </div>
    </aside>
  );
}
