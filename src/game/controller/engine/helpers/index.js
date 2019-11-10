const getRndInt = (min, max) => {
  return Math.floor(Math.random() * ( max - min )) + min;
};

const isValid = (arr, row, col) => {
  return ( arr[ row ] !== undefined && arr[ row ][ col ] !== undefined );
};

const isMine = (arr, row, col) => {
  return arr[ row ][ col ] < 0;
};

export {
  getRndInt,
  isValid,
  isMine
}