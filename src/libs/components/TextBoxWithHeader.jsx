import React from "react";
import PropTypes from "prop-types";
import { StyledTextBox, StyledHeader, StyledParagraph } from "../design-system";

/**
 * A component that displays a header and text in a box.
 *
 * @component
 * @param {string} header - The header text.
 * @param {(string|string[])} text - The text content. Can be a string or an array of strings.
 * @returns {JSX.Element} - The rendered component.
 */
export const TextBoxWithHeader = ({ header, text }) => {
  // Ensure text is always an array
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <StyledTextBox>
      <StyledHeader variant="h1">{header}</StyledHeader>
      {paragraphs.map((paragraph, index) => (
        <StyledParagraph key={index} variant="body1">
          {paragraph}
        </StyledParagraph>
      ))}
    </StyledTextBox>
  );
};

TextBoxWithHeader.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};
