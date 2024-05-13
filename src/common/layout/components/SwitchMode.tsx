import styled from "styled-components";

// ==> Types
import { ModeSite } from "@utils/types/config.type";

interface StyledProps {
  width?: number;
  height?: number;
}

interface SwitchModeProps extends StyledProps {
  mode: ModeSite;
  changeMode: (mode: ModeSite) => void;
}

const SwitchMode = ({ width, height, mode, changeMode }: SwitchModeProps) => (
  <Wrapper width={width} height={height}>
    <input
      type="checkbox"
      id="toggle_checkbox"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e?.target?.checked;
        changeMode && changeMode(checked ? "dark" : "light");
      }}
      checked={mode === "dark"}
    />
    <label htmlFor="toggle_checkbox">
      <div id="star">
        <div className="star" id="star-1">
          ★
        </div>
        <div className="star" id="star-2">
          ★
        </div>
      </div>
      <div id="moon"></div>
    </label>
  </Wrapper>
);

const Wrapper = styled.div<StyledProps>`
  width: calc(var(--w) / 2);
  height: 100%;
  background-color: transparent;
  position: relative;

  #toggle_checkbox {
    display: none;
  }

  label {
    --bg: var(--color-skyblue);

    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: ${(props) => props.width || "40px"};
    height: ${(props) => props.height || "22px"};
    margin: 0 auto;
    background-color: var(--bg);
    border-radius: 56px;
    transform: translateY(-50%);
    cursor: pointer;
    overflow: hidden;
    border: 1px solid var(--color-secundary);

    transition-property: background-color, border-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  #toggle_checkbox:checked + label {
    --bg: var(--color-primary);
    border-color: var(--color-skyblue);
  }

  #star {
    position: absolute;
    width: 25%;
    height: 50%;
    background-color: transparent;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    transition-property: transform, width, height;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: var(--color-yellow);
      border-radius: 50%;
      transform: translate(-50%, -50%);

      transition-property: transform, scale;
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;
    }
  }

  .star {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 14px;
    line-height: 0px;
    color: var(--color-yellow);
    transform: translate(-50%, -50%);

    transition-property: font-size;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }

  #star-1 {
    z-index: 1;
  }

  #star-2 {
    z-index: 2;
    transform: translate(-50%, -50%) rotate(36deg);
  }

  #toggle_checkbox:checked + label #star {
    transform: translate(250%, -100%);
    width: 15%;
    height: 30%;
    z-index: 1;

    &::before {
      transform: translate(-50%, -50%) scale(0.5);
    }

    .star {
      font-size: 7px;
    }
  }

  #moon {
    position: absolute;
    width: 25%;
    height: 50%;
    background-color: var(--color-secundary);
    top: 50%;
    right: 0%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition-property: transform, width, height;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    scale: 0;

    &::before {
      content: "";
      position: absolute;
      top: 30%;
      left: 30%;
      width: 8px;
      height: 8px;
      background-color: var(--bg);
      border-radius: 50%;
      transform: translate(-50%, -50%);

      transition-property: transform, scale;
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;
    }
  }

  #toggle_checkbox:checked + label #moon {
    scale: 1;
  }
`;

export default SwitchMode;
