import '../style.css';
import {
  validatePart1PortfolioName,
  validatePart1PortfolioType,
  validatePart1InvestmentGoal,
  validatePart1InvestmentHorizon,
  validatePart1RiskTolerance,
  validatePart2AnnualInvestmentCapacity,
  validatePart3AutomatedRebalancing,
  validatePart3AckCheckBox,
} from './validations.ts';

// validatePart2AssetClass
// validatePart2percentageAllocation

const formParts = (): HTMLDivElement[] => {
  const investmentDetails = document.getElementById('investment-details') as HTMLDivElement;
  const assetAllocation = document.getElementById('asset-allocation') as HTMLDivElement;
  const preference = document.getElementById('preferences') as HTMLDivElement;

  return [investmentDetails, assetAllocation, preference];
};

// const investmentDetailLogo = document.getElementById('investmentDetailLogo') as HTMLImageElement
// const progressBar1 = document.getElementById('progressBar1') as HTMLElement
// const assetAllocationLogo = document.getElementById('assetAllocationLogo') as HTMLImageElement
// const assetAllocationProgresstext = document.getElementById('assetAllocationProgresstext') as HTMLDivElement
// const progressBar2 = document.getElementById('progressBar2') as HTMLElement
// const preferenceLogo = document.getElementById('preferencesLogo') as HTMLImageElement
// const preferenceProgressText = document.getElementById('preferenceProgressText') as HTMLDivElement

const getButtons = () => {
  const previousButton = document.getElementById('previousButton') as HTMLButtonElement;
  const continueButton = document.getElementById('continueButton') as HTMLButtonElement;
  const submitButton = document.getElementById('submitButton') as HTMLButtonElement;

  return [previousButton, continueButton, submitButton];
};

const previousPage = (): void => {
  const [investmentDetails, assetAllocation, preference] = formParts();

  const [previousButton, continueButton, submitButton] = getButtons();

  // console.log(investmentDetails)
  // console.log(assetAllocation)
  // console.log(preference)
  // console.log(previousButton);
  // console.log(continueButton);
  // console.log(submitButton);

  if (
    investmentDetails.style.display === 'none' &&
    assetAllocation.style.display === 'none' &&
    preference.style.display === ''
  ) {
    assetAllocation.style.display = '';
    preference.style.display = 'none';

    // assetAllocationLogo.src = './images/asset.svg'
    // preferenceLogo.style.backgroundColor = ''
    // progressBar2.style.backgroundColor = 'black'
    continueButton.style.display = '';
    submitButton.style.display = 'none';
  } else if (
    investmentDetails.style.display === 'none' &&
    assetAllocation.style.display === '' &&
    preference.style.display === 'none'
  ) {
    previousButton.disabled = true;

    investmentDetails.style.display = '';
    assetAllocation.style.display = 'none';

    // investmentDetailLogo.src = './images/details.svg'
    // assetAllocationLogo.style.backgroundColor = ''
    // progressBar1.style.backgroundColor = 'black'
  }
};

const nextPage = (): void => {
  const [investmentDetails, assetAllocation, preference] = formParts();

  const [previousButton, continueButton, submitButton] = getButtons();
  // assetAllocation.style.display='none'
  // console.log(investmentDetails.style.display)
  // console.log(assetAllocation.style.display)
  // console.log(preference.style.display)
  // console.log(previousButton);
  // console.log(continueButton);
  // console.log(submitButton);

  if (
    investmentDetails.style.display === '' &&
    assetAllocation.style.display === 'none' &&
    preference.style.display === 'none'
  ) {
    validatePart1PortfolioName();
    validatePart1PortfolioType();
    validatePart1InvestmentGoal();
    validatePart1InvestmentHorizon();
    validatePart1RiskTolerance();

    const moveToNextPage =
      validatePart1PortfolioName() &&
      // nameTaken() &&
      validatePart1PortfolioType() &&
      validatePart1InvestmentGoal() &&
      validatePart1InvestmentHorizon() &&
      validatePart1RiskTolerance();

    console.log('move to next page', moveToNextPage);
    console.log(validatePart1PortfolioName());
    console.log(validatePart1PortfolioType());
    console.log(validatePart1InvestmentGoal());
    console.log(validatePart1InvestmentHorizon());
    console.log(validatePart1RiskTolerance());

    if (moveToNextPage) {
      investmentDetails.style.display = 'none';
      assetAllocation.style.display = 'block';

      console.log((assetAllocation.style.display = ''));

      // investmentDetailLogo.src = './images/tick.svg'
      // progressBar1.style.backgroundColor = '#42e0ae'
      // assetAllocationLogo.style.backgroundColor = '#42e0ae'
      // assetAllocationProgresstext.style.color = '#127656'
      // assetAllocationLogo.style.border = 'none'
      previousButton.disabled = false;

      console.log('in page 2');
    }
  } else if (
    investmentDetails.style.display === 'none' &&
    assetAllocation.style.display === '' &&
    preference.style.display === 'none'
  ) {
    validatePart2AnnualInvestmentCapacity();
    // validatePart2AssetClass()
    // validatePart2percentageAllocation()

    const moveToNextPage = validatePart2AnnualInvestmentCapacity();
    // validatePart2AssetClass() &&
    // validatePart2percentageAllocation()

    // console.log('validatePart2AnnualInvestmentCapacity', validatePart2AnnualInvestmentCapacity())
    // console.log('validatePart2AssetClass', validatePart2AssetClass())
    // console.log('validatePart2percentageAllocation', validatePart2percentageAllocation())
    // console.log('page 2 to 3', moveToNextPage)

    if (moveToNextPage) {
      assetAllocation.style.display = 'none';
      preference.style.display = '';

      // assetAllocationLogo.src = './images/tick.svg'
      // progressBar2.style.backgroundColor = '#42e0ae'
      // preferenceLogo.style.backgroundColor = '#42e0ae'
      // preferenceProgressText.style.color = ''

      continueButton.style.display = 'none';

      submitButton.style.backgroundColor = '#42e0ae';
      submitButton.style.border = 'none';
      submitButton.style.display = '';

      console.log('in page 3');
    }
  }
};

const formSubmit = (): void => {
  validatePart3AutomatedRebalancing();
  validatePart3AckCheckBox();

  const submitForm = validatePart3AutomatedRebalancing() && validatePart3AckCheckBox();

  if (submitForm) {
    alert('Form submitted successfully');
  } else {
    alert('Please fill all required fields');
  }
};

export { previousPage, nextPage, formSubmit };
