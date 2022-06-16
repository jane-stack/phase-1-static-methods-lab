class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9 '-]/gi, '');
  }

  static titleize(string) {
    let array = [];
    let excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    array = string.split(' ');
    return array.map((word, i) => {
      return excludeWords.includes(word) && i!=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
    }) .join(' ');
  }
}