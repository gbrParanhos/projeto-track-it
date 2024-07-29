const TodayIcon = ({color}) => (
  <svg width="25" height="25" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_35303_43)">
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13 9.53C12.71 9.24 12.23 9.24 11.94 9.53L7.59 13.88L6 12.29C5.71 12 5.23 12 4.94 12.29C4.65 12.58 4.65 13.06 4.94 13.35L6.88 15.29C7.27 15.68 7.9 15.68 8.29 15.29L12.99 10.59C13.29 10.3 13.29 9.82 13 9.53ZM16 2H15V1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM15 18H3C2.45 18 2 17.55 2 17V7H16V17C16 17.55 15.55 18 15 18Z"
    fill={color || 'white'}
  />
  </g>
  <defs>
  <clipPath id="clip0_35303_43">
  <rect width="25" height="25" fill="white"/>
  </clipPath>
  </defs>
  </svg>
)

export default TodayIcon