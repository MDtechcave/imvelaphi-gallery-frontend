export function SocialButtons() {
  return (
    <>
      <div className="flex items-center gap-3 my-1">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-xs text-gray-500">or continue with</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-white rounded-full py-3 text-sm font-medium text-[#2F4A3D] flex items-center justify-center gap-2 shadow-sm">
          <span className="font-bold">G</span> Google
        </button>
        <button className="flex-1 bg-white rounded-full py-3 text-sm font-medium text-[#2F4A3D] shadow-sm">
          Apple
        </button>
      </div>
    </>
  );
}