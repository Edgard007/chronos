import { css } from "styled-components";

const Fonts = css`
  // -> Import fonts
  @font-face {
    font-family: "Montserrat";
    src: url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap");
    font-weight: 100 200 300 400 500 600 700;
  }

  @font-face {
    font-family: "Lora";
    src: url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap");
    font-weight: 400 500 600 700;
  }

  --primary-font: "Montserrat", Arial, sans-serif;
  --secundary-font: "Lora", Arial, sans-serif;
  --tertiary-font: "Montserrat", Arial, sans-serif;
`;

export default Fonts;
