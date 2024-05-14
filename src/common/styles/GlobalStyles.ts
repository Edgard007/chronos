import { createGlobalStyle } from "styled-components";

import Variables from "./Variables";
import Animations from "./Animations";

// Customs styles
import Input from "./custom/InputStyle";
import Scroll from "./custom/ScrollStyle";
import Butterup from "./custom/Butterup";

export const GlobalStyles = createGlobalStyle`
  ${Variables};
  ${Animations};
  ${Input};
  ${Scroll};
  ${Butterup};

  * {
    border: 0;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: var(--secundary-font);
  }

  body {
    background-color: var(--color-primary);
    color: var(--color-secundary);
    overflow-x: hidden;
    transition-property: background-color, color, transform, visibility;
    transition-duration: 0.3s;
    transition-timing-function: ease-in, cubic-bezier(0.6,0.2,0.4,1.5), linear;
  }
`;
