
export default function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-text-secondary">
      <h1 className="text-2xl font-semibold text-text-primary">
        Welcome to Chat
      </h1>

      <p className="mt-2 text-sm">
        Select a conversation to start messaging.
      </p>
    </div>
  );
}
