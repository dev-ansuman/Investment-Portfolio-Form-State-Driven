import { createSpan } from './span';

const createRequired = () => {
  const requiredText = createSpan() as HTMLSpanElement;
  requiredText.textContent = ' *';
  requiredText.className = 'required';

  return requiredText;
};

export { createRequired };
