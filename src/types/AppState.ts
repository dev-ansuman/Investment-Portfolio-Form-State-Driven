import type { PortfolioFormRecords } from './PortfolioFormRecords';
import type { FormState } from './FormState';

export interface AppState {
  currentStep: number;
  completedSteps: number[];
  selectedRecordId: string | null;
  editingRecordId: string | null;
  records: PortfolioFormRecords[];
  form: FormState;
  theme: 'light' | 'dark';
}
