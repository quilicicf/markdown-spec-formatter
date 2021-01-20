'use babel';

import computeOffsetFromPosition from './computeOffsetFromPosition';

let formatFromString;

/**
 * Lazy-loading to avoid taking too much time at startup
 */
const loadFormatFromString = () => {
  formatFromString = formatFromString || (
    // eslint-disable-next-line global-require
    (source) => require('@quilicicf/markdown-formatter').formatFromString(source, {
      watermark: atom.config.get('markdown-spec-formatter.watermark'),
    }));
  return formatFromString;
};

export default async (editor) => {
  const oldCursorPosition = editor.getCursors()[ 0 ].getBufferPosition();
  const oldCursorOffset = computeOffsetFromPosition(oldCursorPosition, editor.getText());

  const { contents } = await loadFormatFromString()(editor.getText(), oldCursorOffset);
  editor.getBuffer().setTextViaDiff(contents);
};
