'use babel';

let loadedFormatter;

/**
 * Lazy-loading to avoid taking too much time at startup
 */
const loadFormatFromString = async () => {
  if (!loadedFormatter) {
    // eslint-disable-next-line global-require
    const { default: formatFromString } = require('../dist/formatFromString');
    loadedFormatter = async (source) => formatFromString(source, {
      watermark: atom.config.get('markdown-spec-formatter.watermark'),
    });
  }

  return loadedFormatter;
};

export default async (editor) => {
  const formatter = await loadFormatFromString();
  const { value } = await formatter(editor.getText());
  editor.getBuffer()
    .setTextViaDiff(value);
};
