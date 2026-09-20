"use client";

interface LoadingProps {
  message?: string;
}

export default function Loading({ message = "Đang tải bài học..." }: LoadingProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50/90 backdrop-blur-xs z-50">
      <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200/80 max-w-xs w-full text-center">
        {/* Soft Modern Spinner */}
        <div className="relative w-12 h-12">
          <div className="w-12 h-12 rounded-full border-3 border-indigo-100 border-t-indigo-600 animate-spin"></div>
        </div>

        {/* Message */}
        <p className="mt-4 text-sm font-medium text-slate-700">{message}</p>
      </div>
    </div>
  );
}
