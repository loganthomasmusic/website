import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";

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
    <Box>
      <Typography variant="h1">{header}</Typography>
      {paragraphs.map((paragraph, index) => (
        <Typography key={index} variant="body1">
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
};

TextBoxWithHeader.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};
