const ThoughtsTime = () => (
  <div className="relative bg-gray-100 p-4 rounded-xl shadow-sm">
    <div className="flex items-center justify-center mb-4">
      <div className="absolute -top-7 bg-gray-100 rounded-full flex items-center justify-center p-4">
        <div className="relative">
          <div className="absolute -inset-2 bg-yellow-300/70 rounded-full blur-md animate-pulse"></div>
          <img src="/icons/lamp-on.svg" alt="" className="relative" />
        </div>
      </div>
    </div>
    <h3 className="text-center font-semibold text-gray-900 mb-2">
      Thoughts Time
    </h3>
    <p className="text-center text-sm mb-4">
      We don't have any notice for you, till then you can share your thoughts
      with your peers.
    </p>
    <button className="w-full py-2 bg-white text-sm text-gray-900 rounded-lg hover:bg-indigo-700">
      Write a message
    </button>
  </div>
);

export default ThoughtsTime;
