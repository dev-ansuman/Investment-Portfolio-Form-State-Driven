const showError = (
  errorClass: string,
  parentId: string,
  addAt: string,
  fontSize: string,
  ERROR_MESSAGE: string
): void => {
  const parentElement = document.getElementById(parentId) as HTMLDivElement;
  checkExistingError(errorClass);

  const errorMessage = document.createElement('div') as HTMLDivElement | null;
  errorMessage!.className = errorClass;
  errorMessage!.innerText = ERROR_MESSAGE;
  errorMessage!.style.color = 'red';
  errorMessage!.style.fontSize = fontSize;
  if (addAt === 'append') {
    parentElement?.append(errorMessage!);
  } else if (addAt === 'after') {
    parentElement?.after(errorMessage!);
  }
};

const checkExistingError = (errorClass: string): void => {
  const checkError: HTMLDivElement | null = document.querySelector(`.${errorClass}`);
  if (checkError) {
    checkError.remove();
  }
};

export { showError, checkExistingError };
