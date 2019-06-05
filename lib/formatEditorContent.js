'use babel';

import computeOffsetFromPosition from './computeOffsetFromPosition';

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
  const oldCursorPosition = editor.getCursors()[ 0 ].getBufferPosition();
  const oldCursorOffset = computeOffsetFromPosition(oldCursorPosition, editor.getText());

  const { contents } = await loadFormatFromString()(editor.getText(), oldCursorOffset);
  editor.getBuffer().setTextViaDiff(contents);
};
