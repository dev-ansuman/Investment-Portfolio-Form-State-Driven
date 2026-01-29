import type { ModalConfig } from '../types/Modal';
import type { AppState, AppAction } from './app-reducer';

export interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  setModalConfig: React.Dispatch<React.SetStateAction<ModalConfig | null>>;
}
