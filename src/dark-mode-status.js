import useDarkMode from 'use-dark-mode';

const DarkModeStatus = () => {
  const { value } = useDarkMode(false);
console.log(value)
  return value ? 'dark' : 'light';
  
};

export default DarkModeStatus;
