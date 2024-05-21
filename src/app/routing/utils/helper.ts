export function kebabToTitleCase(kebabCase: string) {
  // Split the kebab case string into an array of words
  const words = kebabCase.split('-');

  // Capitalize the first letter of each word
  const titleCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back together with spaces
  const titleCaseString = titleCaseWords.join(' ');

  return titleCaseString;
}
