import type React from "react";
import type { AppState, AppAction } from "./app-reducer";

export interface AppContextValue {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
}