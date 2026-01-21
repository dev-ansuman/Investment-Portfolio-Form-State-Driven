import { InvestmentDetail } from './investment-details.ts';
import { AssetAllocation } from './asset-allocation.ts';
import { Preference } from './preferences.ts';
import { createDiv } from '../input.ts';

const form = (): HTMLDivElement => {
  const form = createDiv() as HTMLDivElement;
  form.append(InvestmentDetail(), AssetAllocation(), Preference());

  return form;
};

export { form as formScreen };
