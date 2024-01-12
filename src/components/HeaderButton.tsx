import { forwardRef } from "react";

type HeaderButtonProps = {
  icon: string;
  handleClick: () => void;
  className: string;
};

export const HeaderButton = forwardRef(
  ({ icon, className, handleClick }: HeaderButtonProps, ref) => {
    return (
      <button
        ref={ref}
        onClick={handleClick}
        type="button"
        className={className}
      >
        <span>{icon}</span>
      </button>
    );
  }
);
