
export default function SidebarNavbar() {
  return (
    <div className="flex items-center justify-between p-3 border-b border-border">
      <h1 className="text-lg font-semibold text-text-primary">
        OpenCircle
      </h1>

      <button className="p-2 rounded-lg text-text-secondary hover:bg-bg-secondary">
        +
      </button>
    </div>
  );
}
