
export default function Search() {
  return (
    <div className="w-80 my-4 mx-4 sm:w-64">
      <label className="input input-bordered flex items-center gap-2 rounded-full drop-shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-6  opacity-100 search-icon "
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="text" className="" placeholder="Search for chats..." />
      </label>
    </div>
  );
}
