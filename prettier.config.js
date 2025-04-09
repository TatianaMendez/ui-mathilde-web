/** @type {import('prettier').Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindAttributes: ["theme"],
  tailwindFunctions: ["twMerge", "createTheme"],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
