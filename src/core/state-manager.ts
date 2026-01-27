import type { AppState } from '../types/AppState';
import type { FormState } from '../types/FormState';
import type { PortfolioFormRecords } from '../types/PortfolioFormRecords';

class StateManager {
  private state: AppState;

  constructor(initialState: AppState) {
    this.state = initialState;
  }

  getState(): AppState {
    return this.state;
  }

  getCurrentStep(): number {
    return this.state.currentStep;
  }

  setCurrentStep(step: number): void {
    this.state.currentStep = step;
  }

  getCompletedSteps(): number[] {
    return this.state.completedSteps;
  }

  addCompletedStep(step: number): void {
    if (!this.state.completedSteps.includes(step)) {
      this.state.completedSteps.push(step);
    }
  }

  resetCompletedSteps(): void {
    this.state.completedSteps = [];
  }

  getSelectedRecordId(): string | null {
    return this.state.selectedRecordId;
  }

  setSelectedRecordId(id: string | null): void {
    this.state.selectedRecordId = id;
  }

  getEditingRecordId(): string | null {
    return this.state.editingRecordId;
  }

  setEditingRecordId(id: string | null): void {
    this.state.editingRecordId = id;
  }

  getTheme(): 'light' | 'dark' {
    return this.state.theme;
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.state.theme = theme;
  }

  getForm(): FormState {
    return this.state.form;
  }

  setFormField<K extends keyof FormState>(field: K, value: FormState[K]): void {
    this.state.form[field] = value;
  }

  resetForm(initialFormState: FormState): void {
    this.state.form = { ...initialFormState };
  }

  getRecords(): PortfolioFormRecords[] {
    return this.state.records;
  }

  addRecord(record: PortfolioFormRecords): void {
    this.state.records.push(record);
  }

  updateRecord(id: string, updatedRecord: PortfolioFormRecords): void {
    const index = this.state.records.findIndex((r) => r.id === id);
    if (index !== -1) {
      this.state.records[index] = updatedRecord;
    }
  }

  deleteRecord(id: string): void {
    this.state.records = this.state.records.filter((r) => r.id !== id);
  }

  setRecords(records: PortfolioFormRecords[]): void {
    this.state.records = records;
  }

  setState(newState: Partial<AppState>): void {
    this.state = { ...this.state, ...newState };
  }
}

export { StateManager };
