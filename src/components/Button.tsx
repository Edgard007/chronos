import styled from "styled-components";

interface WrapperProps {
  width?: string;
  height?: string;
  backg?: string;
  color?: string;
  borderRad?: string;
}

interface ButtonProps extends WrapperProps {
  text: string;
  type: "button" | "reset" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  text,
  type,
  disabled,
  onClick,
  className,
  width,
  height,
  backg,
  color,
  borderRad,
}: ButtonProps) => (
  <Wrapper
    width={width}
    backg={backg}
    color={color}
    height={height}
    borderRad={borderRad}
  >
    <button
      type={type}
      onClick={() => onClick && onClick()}
      className={"customBtn " + (className || "")}
      disabled={disabled}
    >
      {text}
    </button>
  </Wrapper>
);

const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => props?.width || "90%"};
  display: flex;
  justify-content: center;
  align-items: center;

  .customBtn {
    width: 100%;
    border-radius: ${(props) => props?.borderRad || "0.5rem"};
    height: ${(props) => props?.height || "3.4375em"};
    background: ${(props) => props?.backg || "var(--color-red)"};
    color: ${(props) => props?.color || "var(--color-light)"};
    font-size: var(--font-sm);
    font-weight: var(--bold-weight);
    font-family: var(--secundary-font);
    border: none;
    cursor: pointer;
    /* text-transform: uppercase; */

    :hover {
      box-shadow: 0 0 0.5rem 0 var(--color-secundary-gray);
    }

    :active {
      opacity: 0.5;
      transition: var(--fast-animation);
    }

    :disabled {
      cursor: not-allowed;
    }
  }
`;

export default Button;
