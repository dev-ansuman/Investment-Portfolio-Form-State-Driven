import { state } from '../../app.state.ts';
import { InvestmentDetail } from './investment-details.ts';
import { AssetAllocation } from './asset-allocation.ts';
import { Preference } from './preferences.ts';
import { Stepper } from './stepper.ts';
import { createDiv } from '../input.ts';

const formScreen = (): HTMLDivElement => {
  const container = createDiv() as HTMLDivElement;
  container.className = 'formParent';
  container.appendChild(Stepper());

  if (state.currentStep === 1) {
    container.appendChild(InvestmentDetail());
  } else if (state.currentStep === 2) {
    container.appendChild(AssetAllocation());
  } else if (state.currentStep === 3) {
    container.appendChild(Preference());
  }

  return container;
};

export { formScreen };
