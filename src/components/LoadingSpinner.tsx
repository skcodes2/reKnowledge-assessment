export default function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-red-500 border-t-transparent" />
    </div>
  );
}
