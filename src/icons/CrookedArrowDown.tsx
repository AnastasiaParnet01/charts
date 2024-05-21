import { FC, SVGProps } from "react";

export const CrookedArrowDown: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M15.2319 11.3737L11.6747 10.9451C11.5569 10.9308 11.5069 10.7862 11.5908 10.7022L12.6497 9.64331L8.61403 5.60759L6.79617 7.42366C6.68367 7.53616 6.50331 7.53438 6.3926 7.42366L0.647953 1.67723C0.621367 1.65038 0.606453 1.61413 0.606453 1.57634C0.606453 1.53856 0.621367 1.5023 0.647953 1.47545L1.45152 0.668306C1.50688 0.612949 1.59795 0.612949 1.65331 0.668306L6.59438 5.60759L8.41045 3.79152C8.52295 3.68081 8.70331 3.68081 8.81402 3.79152L13.6605 8.63438L14.7194 7.57545C14.7384 7.55657 14.7623 7.54339 14.7883 7.53741C14.8144 7.53144 14.8417 7.53291 14.867 7.54165C14.8923 7.55039 14.9146 7.56606 14.9315 7.58688C14.9483 7.60769 14.959 7.63281 14.9622 7.65938L15.3908 11.2165C15.4033 11.3076 15.3247 11.3862 15.2319 11.3737Z"
          fill="#FF708B"
        />
      </svg>
    </>
  );
};