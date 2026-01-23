import { createSpan } from './create-input';

const createRequired = () => {
  const requiredText = createSpan() as HTMLSpanElement;
  requiredText.textContent = ' *';
  requiredText.className = 'required';

  return requiredText;
};

export { createRequired };
