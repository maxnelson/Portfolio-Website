export const linkify_text = (inputText) => {
  const regex = /(\S+\.com)/g;
  const result = inputText.replace(regex, function (match) {
    return '<a href="https://' + match + '" target="_blank">' + match + "</a>";
  });
  return result;
};
