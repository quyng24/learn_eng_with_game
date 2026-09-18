const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="flex flex-col items-center text-white">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>

        {/* Message */}
        <p className="mt-4 text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
