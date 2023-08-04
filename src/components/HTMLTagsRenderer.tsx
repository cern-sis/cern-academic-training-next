import React from "react";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";

interface HTMLTagRendererPRops {
  string: string;
  allowedTags: string[];
}

const HTMLTagRenderer = ({ string, allowedTags }: HTMLTagRendererPRops) => {
  const cleanHTML = DOMPurify.sanitize(string, { ALLOWED_TAGS: allowedTags });

  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
};

HTMLTagRenderer.propTypes = {
  string: PropTypes.string.isRequired,
  allowedTags: PropTypes.array.isRequired,
};

export default HTMLTagRenderer;
