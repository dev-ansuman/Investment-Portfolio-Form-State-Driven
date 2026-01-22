import { createDiv, createImg, createNav } from '../input';

const Stepper = () => {
  const stepperNav = createNav() as HTMLElement;
  stepperNav.className = 'progressBar';

  // create progress box (div)
  const createProgressBox = (
    className: string,
    logoSrc: string,
    logoId: string,
    progressTextContent: string,
    progressTextClass: string
  ): HTMLDivElement => {
    const progressDiv = createDiv() as HTMLDivElement;
    progressDiv.className = className;

    const progressLogo = createImg() as HTMLImageElement;
    progressLogo.src = logoSrc;
    progressLogo.id = logoId;

    const progresstext = createDiv() as HTMLDivElement;
    progresstext.textContent = progressTextContent;
    progresstext.className = progressTextClass;

    progressDiv.append(progressLogo, progresstext);

    return progressDiv;
  };

  // create progress line (div)
  const createProgressLine = (
    progressLineClass: string,
    progressLineId: string
  ): HTMLDivElement => {
    const progressLine = createDiv() as HTMLDivElement;
    progressLine.className = progressLineClass;
    progressLine.id = progressLineId;

    return progressLine;
  };

  // progress box 1
  const progressInvestmentDetails = createProgressBox(
    'progress',
    './src/images/details.svg',
    'investmentDetailLogo',
    'Investment Details',
    'progressText'
  );

  // progress box 2
  const progressAssetAllocation = createProgressBox(
    'progress',
    './src/images/asset.svg',
    'assetAllocationLogo',
    'Asset Allocation',
    'progressText'
  );

  // progress box 3
  const progressPreferences = createProgressBox(
    'progress',
    './src/images/preference.svg',
    'preferencesLogo',
    'Preferences and Ack.',
    'progressText'
  );

  // progress line 1
  const progressLine1 = createProgressLine('progressLine', 'progressBar1');

  // progress line 2
  const progressLine2 = createProgressLine('progressLine', 'progressBar2');

  stepperNav.append(
    progressInvestmentDetails,
    progressLine1,
    progressAssetAllocation,
    progressLine2,
    progressPreferences
  );

  return stepperNav;
};

export { Stepper };
