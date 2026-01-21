import { formScreen } from './Form/Form.ts';
import { createDiv } from './input.ts';
import { Navigation } from './navigation-buttons.ts';

const formDiv = createDiv() as HTMLDivElement;
formDiv.append(formScreen(), Navigation());
// formDiv.style.width = '48%';
formDiv.classList.add('formContainer');

export { formDiv };
