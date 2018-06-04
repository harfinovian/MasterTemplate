export default function renderIf(condition, content) {
  if (condition == true) {
      return content;
  } else {
      return null;
  }
}