export default function cleanSet(set, startString) {
  const list = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  for (const x of set) {
    if (typeof x === 'string' && x.startsWith(startString)) {
      list.push(x.slice(startString.length));
    }
  }
  return list.join('-');
