import { stateManager } from '../../app.state.ts';
import { StateManager } from '../../core/state-manager.ts';
import { InvestmentDetail } from './investment-details.ts';
import { AssetAllocation } from './asset-allocation.ts';
import { Preference } from './preferences.ts';
import { Stepper } from './stepper.ts';
import { createDiv } from '../Ui/div.ts';

class FormComponent {
  private stateManager: StateManager;

  constructor(stateManager: StateManager) {
    this.stateManager = stateManager;
  }

  render(): HTMLDivElement {
    const container = createDiv() as HTMLDivElement;
    container.className = 'formParent';
    container.appendChild(Stepper());

    if (this.stateManager.getCurrentStep() === 1) {
      container.appendChild(InvestmentDetail());
    } else if (this.stateManager.getCurrentStep() === 2) {
      container.appendChild(AssetAllocation());
    } else if (this.stateManager.getCurrentStep() === 3) {
      container.appendChild(Preference());
    }

    return container;
  }
}

const formComponent = new FormComponent(stateManager);
const FormScreen = (): HTMLDivElement => {
  return formComponent.render();
};

export { FormScreen };
