const randomizer = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const colorsVars = {
  sectionBackgroundColor: '#ffffff',
  secondryBacgroundColor: '#ECF1F4',
  mainTextColor: '#000000',
  secondaryTextColor: '#929292',
  borderColor: '#E9EDF2',
  onLine: '#008000',
  offLine: '#ff0000',
  tableHead: '#00BCD5',
  randomColor: randomizer,
};
