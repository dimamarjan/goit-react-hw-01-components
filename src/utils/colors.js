let randomizer = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const colorsVars = {
  sectionBackgroundColor: '#ffffff',
  mainTextColor: '#000000',
  secondaryTextColor: '#929292',
  borderColor: '#E9EDF2',
  randomColor: randomizer,
};