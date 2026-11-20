
export default function SidebarChat({ title }) {
  return (
    <button className="w-full text-left truncate rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-bg-secondary">
      {title}
    </button>
  );
}
