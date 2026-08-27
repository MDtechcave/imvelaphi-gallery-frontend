import { LucideIcon } from "lucide-react";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
}

export function FormField({ icon: Icon, ...props }: FormFieldProps) {
  return (
    <div className="relative">
      <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        {...props}
        className="w-full bg-white rounded-full pl-11 pr-4 py-3.5 text-sm text-[#2F4A3D] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#C77F2E]/40"
      />
    </div>
  );
}