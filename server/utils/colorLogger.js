import chalk from 'chalk'

// Save original console functions
const originalError = console.error;
const originalWarn = console.warn;
const originalInfo = console.info;

// Override console.error → red
console.error = (...args) => {
  originalError(chalk.red(...args));
};

// Override console.warn → yellow
console.warn = (...args) => {
  originalWarn(chalk.yellow(...args));
};

// Override console.info → cyan (skyblue)
console.info = (...args) => {
  originalInfo(chalk.cyan(...args));
};
