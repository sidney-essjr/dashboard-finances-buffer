export default function InfiniteSpinner() {
  return (
    <svg
      className="m-auto p-0 w-[45px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 150"
    >
      <path
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="15"
        strokeLinecap="round"
        strokeDasharray="300 385"
        strokeDashoffset="0"
        d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
      >
        <animate
          attributeName="stroke-dashoffset"
          calcMode="spline"
          dur="2"
          values="685;-685"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animate>
      </path>
    </svg>
  );
}
