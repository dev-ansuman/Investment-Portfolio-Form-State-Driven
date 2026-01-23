export const createTextarea = (
  textareaPlaceholder: string,
  textareaRows: number,
  textareaName: string
): HTMLTextAreaElement => {
  const newtextarea = document.createElement('textarea') as HTMLTextAreaElement;
  newtextarea.placeholder = textareaPlaceholder;
  newtextarea.rows = textareaRows;
  newtextarea.name = textareaName;
  return newtextarea;
};
