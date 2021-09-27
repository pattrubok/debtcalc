import { css } from "styled-components";

// Headers
const h1 = ({ theme }) => css`
  font-size: ${theme.fonts.size.h1};
`;
const h2 = ({ theme }) => css`
  font-size: ${theme.fonts.size.h2};
`;

const h3 = ({ theme }) => css`
  font-size: ${theme.fonts.size.h3};
`;
const h4 = ({ theme }) => css`
  font-size: ${theme.fonts.size.h4};
`;

const h5 = ({ theme }) => css`
  font-size: ${theme.fonts.size.h5};
`;

// Paragraph
const paragraph = ({ theme }) => css`
  font-size: ${theme.fonts.size.p};
`;
const paragraph2 = ({ theme }) => css`
  font-size: ${theme.fonts.size.p2};
`;
const p_mobile = ({ theme }) => css`
  font-size: ${theme.fonts.size.p_mobile};
`;

const p_mobile_s = ({ theme }) => css`
  font-size: ${theme.fonts.size.p_mobile_s};
`;

export { paragraph, paragraph2, h1, h2, h3, h4, h5, p_mobile, p_mobile_s };
