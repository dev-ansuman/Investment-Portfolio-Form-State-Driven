import { createDiv } from './Ui/div';
import { createHeader } from './Ui/header';

const ProjectHeading = () => {
  const header = createHeader() as HTMLHeadElement;

  const projectHeading = createDiv() as HTMLDivElement;
  projectHeading.textContent = 'Investment Portfolio Form';
  projectHeading.className = 'projectHeading';

  header.append(projectHeading);

  return header;
};

export { ProjectHeading };
