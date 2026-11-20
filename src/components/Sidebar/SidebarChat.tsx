interface SidebarChatProps {
  id: number;
  title: string;
}

export default function SidebarChat({ id, title }: SidebarChatProps) {
  return (
    <button className="w-full text-left truncate rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-bg-secondary">
      {id} {title}
    </button>
  );
}