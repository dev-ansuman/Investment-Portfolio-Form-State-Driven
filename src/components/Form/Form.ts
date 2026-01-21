import { state } from '../../app.state.ts';
import { InvestmentDetail } from './investment-details.ts';
import { AssetAllocation } from './asset-allocation.ts';
import { Preference } from './preferences.ts';
import { createDiv } from '../input.ts';

const formScreen = (): HTMLDivElement => {
  const container = createDiv() as HTMLDivElement;

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
