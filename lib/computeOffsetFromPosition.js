module.exports = (cursorPosition, fileContent) => {
  const positionFinder = fileContent
    .split('\n')
    .reduce(
      (seed, line) => {
        if (seed.rowNumber < cursorPosition.row) {
          return {
            offset: seed.offset + line.length + 1, // Trailing line break
            rowNumber: seed.rowNumber + 1,
          };
        }

        if (seed.rowNumber === cursorPosition.row) {
          return {
            offset: seed.offset + cursorPosition.column,
            rowNumber: seed.rowNumber + 1,
          };
        }

        return seed;
      },
      { offset: 0, rowNumber: 1 },
    );
  return positionFinder.offset;
};
