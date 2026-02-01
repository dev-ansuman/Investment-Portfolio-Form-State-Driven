import { INITIAL_FORM_STATE } from '../storage/initial-form-state';
import type { Record } from '../types/Record';

export interface AppState {
  formData: Record;
  editingRecordId: number | null;
}

export type AppAction =
  | { type: 'SET_FORM_DATA'; payload: Record }
  | { type: 'START_EDIT'; payload: Record }
  | { type: 'CLEAR_FORM' };

export const initialAppState: AppState = {
  formData: INITIAL_FORM_STATE,
  editingRecordId: null,
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return {
        ...state,
        formData: action.payload,
      };
    case 'START_EDIT':
      return {
        ...state,
        formData: action.payload,
        editingRecordId: action.payload.id,
      };
    case 'CLEAR_FORM':
      return {
        ...initialAppState,
      };
    default:
      return state;
  }
};
