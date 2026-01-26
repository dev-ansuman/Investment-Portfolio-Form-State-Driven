export const createHeading = (headerRank: number): HTMLHeadingElement => {
  const newHeading = document.createElement(`h${headerRank}`) as HTMLHeadingElement;
  return newHeading;
};
