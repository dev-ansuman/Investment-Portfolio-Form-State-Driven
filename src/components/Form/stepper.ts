import { createDiv, createImg, createNav } from '../../utils/create-input';
import { state } from '../../app.state';

const Stepper = () => {
  const stepperNav = createNav() as HTMLElement;
  stepperNav.className = 'progressBar';

  // create progress box (div)
  const createProgressBox = (
    stepNumber: number,
    logoSrc: string,
    completedLogoSrc: string,
    logoId: string,
    progressTextContent: string,
    progressTextClass: string
  ): HTMLDivElement => {
    const progressDiv = createDiv() as HTMLDivElement;
    progressDiv.className = 'progress';

    const isActive = state.currentStep === stepNumber;
    const isCompleted = stepNumber < state.currentStep;

    if (isCompleted) {
      progressDiv.classList.add('completed');
    }

    if (isActive) {
      progressDiv.classList.add('active');
    }

    const progressLogo = createImg() as HTMLImageElement;
    progressLogo.src = isCompleted ? completedLogoSrc : logoSrc;
    progressLogo.id = logoId;

    const progresstext = createDiv() as HTMLDivElement;
    progresstext.textContent = progressTextContent;
    progresstext.className = progressTextClass;

    progressDiv.append(progressLogo, progresstext);

    return progressDiv;
  };

  // create progress line (div)
  const createProgressLine = (
    stepNumber: number,
    progressLineClass: string,
    progressLineId: string
  ): HTMLDivElement => {
    const progressLine = createDiv() as HTMLDivElement;
    progressLine.className = progressLineClass;
    progressLine.id = progressLineId;

    if (stepNumber < state.currentStep) {
      progressLine.classList.add('completed');
    }

    return progressLine;
  };

  // progress box 1
  const progressInvestmentDetails = createProgressBox(
    1,
    './src/images/details.svg',
    './src/images/tick.svg',
    'investmentDetailLogo',
    'Investment Details',
    'progressText'
  );

  // const investmentDetailPage = document.getElementById('investmentDetailLogo') as HTMLDivElement;
  // investmentDetailPage?.addEventListener('click', () => {
  //   state.currentStep = 1;
  //   saveToStorage();
  //   renderApp();
  // })

  // progress box 2
  const progressAssetAllocation = createProgressBox(
    2,
    './src/images/asset.svg',
    './src/images/tick.svg',
    'assetAllocationLogo',
    'Asset Allocation',
    'progressText'
  );

  // progress box 3
  const progressPreferences = createProgressBox(
    3,
    './src/images/preference.svg',
    './src/images/tick.svg',
    'preferencesLogo',
    'Preferences and Ack.',
    'progressText'
  );

  // progress line 1
  const progressLine1 = createProgressLine(1, 'progressLine', 'progressBar1');

  // progress line 2
  const progressLine2 = createProgressLine(2, 'progressLine', 'progressBar2');

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
