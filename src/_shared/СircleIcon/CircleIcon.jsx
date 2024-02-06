export const CircleIcon = ({ color }) => {
  return (
    <svg
      viewBox="0 0 283 283"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <filter
        id="blurMe"
        x="0"
        y="0"
        width="383"
        height="283"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="15" />
      </filter>
      <g fill={color} filter="url(#blurMe)">
        <circle
          cx="141.5"
          cy="137.5"
          r="128.6"
          fillOpacity="0.24"
          shapeRendering="crispEdges"
        />
      </g>
    </svg>
  );
};
