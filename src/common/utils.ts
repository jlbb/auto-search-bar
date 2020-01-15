export const highlightSubstr = (str: string, term: string) => {
  const rgx = new RegExp(term.toLowerCase());
  const match = str.toLowerCase().match(rgx);

  const l = term.length;
  const start = (match && match["index"]) || 0;
  const end = start >= 0 ? start + l - 1 : start;

  const str1 = str.substr(0, start);
  const str2 = str.substr(start, l);
  const str3 = str.substr(end + 1);

  const hStr = str1 + '<span class="highlight">' + str2 + "</span>" + str3;

  return hStr;
};
