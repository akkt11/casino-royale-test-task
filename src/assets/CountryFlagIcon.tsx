import type { CountryCode } from "../shared/types";

interface CountryIconProps {
  country: CountryCode;
}

export const CountryFlagIcon = ({ country }: CountryIconProps) => {
  switch (country) {
    case "tr":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4_64)">
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#ED5345"
            />
            <path
              d="M11.5087 9.80566L12.4933 11.1625L14.0879 10.6454L13.1017 12.0011L14.0862 13.3578L12.4922 12.8388L11.5061 14.1944L11.5071 12.5181L9.91309 11.9991L11.5077 11.4821L11.5087 9.80566Z"
              fill="#F0F0F0"
            />
            <path
              d="M8.82174 15.3915C6.9488 15.3915 5.43043 13.8731 5.43043 12.0001C5.43043 10.1272 6.9488 8.60883 8.82174 8.60883C9.40571 8.60883 9.95518 8.75653 10.4349 9.01645C9.68232 8.28042 8.65308 7.8262 7.5174 7.8262C5.21218 7.8262 3.34351 9.69492 3.34351 12.0001C3.34351 14.3053 5.21222 16.174 7.5174 16.174C8.65318 16.174 9.68237 15.7197 10.4349 14.9837C9.95518 15.2437 9.40571 15.3915 8.82174 15.3915Z"
              fill="#F0F0F0"
            />
          </g>
          <rect
            x="0.375"
            y="0.375"
            width="23.25"
            height="23.25"
            rx="11.625"
            stroke="white"
            strokeWidth="0.75"
          />
          <defs>
            <clipPath id="clip0_4_64">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "en":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_en)">
            <rect width="24" height="24" rx="12" fill="#00247D" />
            <path d="M0 0L24 24M24 0L0 24" stroke="white" strokeWidth="4" />
            <path d="M0 0L24 24M24 0L0 24" stroke="#CF142B" strokeWidth="2" />
            <rect x="9" width="6" height="24" fill="white" />
            <rect y="9" width="24" height="6" fill="white" />
            <rect x="10" width="4" height="24" fill="#CF142B" />
            <rect y="10" width="24" height="4" fill="#CF142B" />
          </g>
          <rect
            x="0.375"
            y="0.375"
            width="23.25"
            height="23.25"
            rx="11.625"
            stroke="white"
            strokeWidth="0.75"
          />
          <defs>
            <clipPath id="clip0_en">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "de":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_de)">
            <rect width="24" height="24" rx="12" fill="#000000" />
            <rect y="8" width="24" height="8" fill="#DD0000" />
            <rect y="16" width="24" height="8" fill="#FFCE00" />
          </g>
          <rect
            x="0.375"
            y="0.375"
            width="23.25"
            height="23.25"
            rx="11.625"
            stroke="white"
            strokeWidth="0.75"
          />
          <defs>
            <clipPath id="clip0_de">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "ru":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_ru)">
            <rect width="24" height="24" rx="12" fill="white" />
            <rect y="8" width="24" height="8" fill="#0039A6" />
            <rect y="16" width="24" height="8" fill="#D52B1E" />
          </g>
          <rect
            x="0.375"
            y="0.375"
            width="23.25"
            height="23.25"
            rx="11.625"
            stroke="white"
            strokeWidth="0.75"
          />
          <defs>
            <clipPath id="clip0_ru">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "kg":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_kg)">
            <rect width="24" height="24" rx="12" fill="#E8112D" />
            <circle cx="12" cy="12" r="5" fill="#FFCC00" />
            <circle cx="12" cy="12" r="2.4" fill="#E8112D" />
          </g>
          <rect
            x="0.375"
            y="0.375"
            width="23.25"
            height="23.25"
            rx="11.625"
            stroke="white"
            strokeWidth="0.75"
          />
          <defs>
            <clipPath id="clip0_kg">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4_64)">
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#ED5345"
            />
            <path
              d="M11.5087 9.80566L12.4933 11.1625L14.0879 10.6454L13.1017 12.0011L14.0862 13.3578L12.4922 12.8388L11.5061 14.1944L11.5071 12.5181L9.91309 11.9991L11.5077 11.4821L11.5087 9.80566Z"
              fill="#F0F0F0"
            />
            <path
              d="M8.82174 15.3915C6.9488 15.3915 5.43043 13.8731 5.43043 12.0001C5.43043 10.1272 6.9488 8.60883 8.82174 8.60883C9.40571 8.60883 9.95518 8.75653 10.4349 9.01645C9.68232 8.28042 8.65308 7.8262 7.5174 7.8262C5.21218 7.8262 3.34351 9.69492 3.34351 12.0001C3.34351 14.3053 5.21222 16.174 7.5174 16.174C8.65318 16.174 9.68237 15.7197 10.4349 14.9837C9.95518 15.2437 9.40571 15.3915 8.82174 15.3915Z"
              fill="#F0F0F0"
            />
          </g>
          <rect
            x="0.375"
            y="0.375"
            width="23.25"
            height="23.25"
            rx="11.625"
            stroke="white"
            strokeWidth="0.75"
          />
          <defs>
            <clipPath id="clip0_4_64">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
  }
};
