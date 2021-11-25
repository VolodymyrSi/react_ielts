export function countWords(str) {
  let matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}
