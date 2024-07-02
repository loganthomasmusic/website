import React from "react";
import PropTypes from "prop-types";
import {
  StyledTextBox,
  StyledHeader,
  StyledParagraph,
  ProfilePicture,
} from "../design-system";
import { Box } from "@mui/material";

/**
 * A component that displays a header and text in a box.
 *
 * @component
 * @param {string} header - The header text.
 * @param {(string|string[])} text - The text content. Can be a string or an array of strings.
 * @param {string} img_uri - The URI of the profile picture image.
 * @returns {JSX.Element} - The rendered component.
 */
export const TextBoxWithHeaderAndProfilePicture = ({
  header,
  text,
  img_uri,
}) => {
  // Ensure text is always an array
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <StyledTextBox>
      <StyledHeader variant="h1">{header}</StyledHeader>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <ProfilePicture
          src={img_uri}
          alt="Profile Picture"
          width={200}
          height={300}
        />

        {/* show the first paragraph */}
        {Array.isArray(paragraphs) && paragraphs.length > 0 && (
          <StyledParagraph variant="body1">{paragraphs[0]}</StyledParagraph>
        )}
      </Box>
      {Array.isArray(paragraphs) &&
        paragraphs.length > 1 &&
        paragraphs.slice(1).map((paragraph, index) => (
          <StyledParagraph key={index} variant="body1">
            {paragraph}
          </StyledParagraph>
        ))}
    </StyledTextBox>
  );
};

TextBoxWithHeaderAndProfilePicture.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  img_uri: PropTypes.string.isRequired,
};
