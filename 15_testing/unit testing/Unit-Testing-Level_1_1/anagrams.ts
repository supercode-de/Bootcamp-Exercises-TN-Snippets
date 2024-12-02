export function areAnagrams(string1: string, string2: string) {
  const normalize = (str) => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  return normalize(string1) === normalize(string2);
}
