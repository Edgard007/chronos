import { css } from "styled-components";

// ==> Interfaces
import { DefaultTheme } from "@interfaces/theme.interface";

import Fonts from "./fonts";

const Variables = css<{ theme?: DefaultTheme }>`
  :root {
    // -> Fonts
    ${Fonts}

    // -> Font weight
    --regular-weight: 400;
    --semiBold-weight: 500;
    --bold-weight: bold;

    // -> Font size
    --font-bg: 4.5rem;
    --font-md: 1.75rem;
    --font-sm: 1rem;
    --font-min: 0.75rem;
    --font-sec: 0.625rem;
    --font-ter: 0.5rem;

    @media (max-width: 768px) {
      --font-bg: 3rem;
      --font-md: 1rem;
      --font-sm: 0.75rem;
    }

    // -> Color

    // Changing depending on mode
    --color-primary: ${({ theme }) => theme.primary};
    --color-secundary: ${({ theme }) => theme.secundary};
    --color-tertiary: ${({ theme }) => theme.tertiary};
    --color-quaternary: ${({ theme }) => theme.quaternary};

    --color-primary-rgb: ${({ theme }) => theme.primaryRgb};
    --color-secundary-rgb: ${({ theme }) => theme.secundaryRgb};
    --color-tertiary-rgb: ${({ theme }) => theme.tertiaryRgb};
    --color-quaternary-rgb: ${({ theme }) => theme.quaternaryRgb};

    --color-blue: ${({ theme }) => theme.blue};
    --color-blue-rgb: ${({ theme }) => theme.blueRgb};
    --color-lightBlue: ${({ theme }) => theme.lightBlue};

    --color-green: ${({ theme }) => theme.green};
    --color-limeGreen: ${({ theme }) => theme.limeGreen};

    // Statics
    --color-light: ${({ theme }) => theme.light};
    --color-light2: ${({ theme }) => theme.light2};
    --color-light3: ${({ theme }) => theme.light3};

    --color-black: ${({ theme }) => theme.black};
    --color-black2: ${({ theme }) => theme.black2};
    --color-black3: ${({ theme }) => theme.black3};

    --color-filterToDark: ${({ theme }) => theme.filterToDark};
    --color-filterToLight: ${({ theme }) => theme.filterToLight};

    // Specific colors (More colors)
    --color-gray: #dddddd;
    --color-secundary-gray: #898989;
    --color-red: #f11434;

    --color-yellow: #f6c90e;
    --color-orange: #ff7a3c;
    --color-skyblue: #77b5fe;

    // -> Gradient
    --oran-yell-grad: linear-gradient(
      to right,
      var(--color-orange),
      var(--color-yellow)
    );

    // -> Global height
    --hNav: 4rem;

    // -> Z-index
    --z-high: 10;
    --z-md: 5;
    --z-low: 1;
  }
`;

export default Variables;
