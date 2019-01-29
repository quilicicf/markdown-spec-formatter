'use babel';

let formatFromString;

/**
 * Lazy-loading to avoid taking too much time at startup
 */
const loadFormatFromString = () => {
  // eslint-disable-next-line global-require
  formatFromString = formatFromString || require('@quilicicf/markdown-formatter').formatFromString;
  return formatFromString;
};

export default async (editor) => {
  const formattedMarkdown = await loadFormatFromString()(editor.getText());
  editor.setText(formattedMarkdown);
};
