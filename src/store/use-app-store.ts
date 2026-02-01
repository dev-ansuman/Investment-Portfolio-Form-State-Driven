import { create } from 'zustand';
import type { Record } from '../types/Record';
import { INITIAL_FORM_STATE } from '../storage/initial-form-state';

type AppStore = {
  records: Record[];

  formData: typeof INITIAL_FORM_STATE;
  isEditMode: boolean;
  editingRecordId: string | null;

  isFormOpen: boolean;

  snackbar: {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  };

  themeMode: 'light' | 'dark';

  openAddForm: () => void;
  openEditForm: (record: Record) => void;
  closeForm: () => void;

  addRecord: (record: Record) => void;
  updateRecord: (record: Record) => void;
  deleteRecord: (id: string) => void;

  showSnackbar: (message: string, severity?: 'success' | 'error' | 'info' | 'warning') => void;
  hideSnackbar: () => void;

  toggleTheme: () => void;
};

export const useAppStore = create<AppStore>((set) => ({
  records: [],
  formData: INITIAL_FORM_STATE,
  isEditMode: false,
  editingRecordId: null,
  isFormOpen: false,

  snackbar: {
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'info' | 'warning',
  },

  themeMode: 'light',

  showSnackbar: (message: string, severity = 'success') =>
    set({
      snackbar: {
        open: true,
        message,
        severity,
      },
    }),

  hideSnackbar: () =>
    set((state) => ({
      snackbar: {
        ...state.snackbar,
        open: false,
      },
    })),

  toggleTheme: () =>
    set((state) => ({
      themeMode: state.themeMode === 'light' ? 'dark' : 'light',
    })),

  openAddForm: () =>
    set({
      isFormOpen: true,
      isEditMode: false,
      editingRecordId: null,
      formData: INITIAL_FORM_STATE,
    }),

  openEditForm: (record) =>
    set({
      isFormOpen: true,
      isEditMode: true,
      editingRecordId: record.id,
      formData: record,
    }),

  closeForm: () =>
    set({
      isFormOpen: false,
      isEditMode: false,
      editingRecordId: null,
      formData: INITIAL_FORM_STATE,
    }),

  addRecord: (record) =>
    set((state) => ({
      records: [...state.records, record],
      isFormOpen: false,
    })),

  updateRecord: (updatedRecord) =>
    set((state) => ({
      records: state.records.map((r) => (r.id === updatedRecord.id ? updatedRecord : r)),
      isFormOpen: false,
      isEditMode: false,
      editingRecordId: null,
    })),

  deleteRecord: (id) =>
    set((state) => ({
      records: state.records.filter((r) => r.id !== id),
    })),
}));
