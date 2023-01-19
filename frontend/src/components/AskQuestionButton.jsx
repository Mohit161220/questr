export default function AskQuestionButton() {
  return (
    <button className="h-8  mr-0 flex items-center p-3 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold  border border-green-700 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-4 h-4 mr-1 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <span className="font-thin">Ask Question</span>
    </button>
  );
}
