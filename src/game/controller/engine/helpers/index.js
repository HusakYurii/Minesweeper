const getRndInt = (min, max) => {
  return Math.floor(Math.random() * ( max - min )) + min;
};

const isValid = (arr, row, col) => {
  return ( arr[ row ] !== undefined && arr[ row ][ col ] !== undefined );
};

const isMine = (arr, row, col) => {
  const cell = arr[ row ][ col ];
  return !!Number(cell) ? cell < 0 : cell.isMine;
};

const isRevealed = (arr, row, col) => {
  return arr[ row ][ col ].isRevealed;
};

export {
  getRndInt,
  isRevealed,
  isValid,
  isMine
}