import { createDiv, createHeader } from './create-input';

const ProjectHeading = () => {
  const header = createHeader() as HTMLHeadElement;

  const projectHeading = createDiv() as HTMLDivElement;
  projectHeading.textContent = 'Investment Portfolio Form';
  projectHeading.className = 'projectHeading';

  header.append(projectHeading);

  return header;
};

export { ProjectHeading };
