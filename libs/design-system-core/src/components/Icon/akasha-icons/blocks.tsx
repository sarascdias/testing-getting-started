import React from 'react';

const Blocks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.332 1H8.9987C8.63051 1 8.33203 1.29848 8.33203 1.66667V5C8.33203 5.36819 8.63051 5.66667 8.9987 5.66667H12.332C12.7002 5.66667 12.9987 5.36819 12.9987 5V1.66667C12.9987 1.29848 12.7002 1 12.332 1Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.66667 12.9993V4.33268C5.66667 4.15587 5.59643 3.9863 5.4714 3.86128C5.34638 3.73625 5.17681 3.66602 5 3.66602H1.66667C1.48986 3.66602 1.32029 3.73625 1.19526 3.86128C1.07024 3.9863 1 4.15587 1 4.33268V12.3327C1 12.5095 1.07024 12.6791 1.19526 12.8041C1.32029 12.9291 1.48986 12.9993 1.66667 12.9993H9.66667C9.84348 12.9993 10.013 12.9291 10.1381 12.8041C10.2631 12.6791 10.3333 12.5095 10.3333 12.3327V8.99935C10.3333 8.82254 10.2631 8.65297 10.1381 8.52794C10.013 8.40292 9.84348 8.33268 9.66667 8.33268H1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Blocks;