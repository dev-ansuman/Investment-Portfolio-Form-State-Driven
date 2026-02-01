import { create } from 'zustand';
import type { Record } from '../types/Record';
import { INITIAL_FORM_STATE } from '../storage/initial-form-state';

type AppStore = {
  records: Record[];

  formData: typeof INITIAL_FORM_STATE;
  isEditMode: boolean;
  editingRecordId: string | null;

  isFormOpen: boolean;

  openAddForm: () => void;
  openEditForm: (record: Record) => void;
  closeForm: () => void;

  addRecord: (record: Record) => void;
  updateRecord: (record: Record) => void;
  deleteRecord: (id: string) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  records: [],
  formData: INITIAL_FORM_STATE,
  isEditMode: false,
  editingRecordId: null,
  isFormOpen: false,

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
      formData: INITIAL_FORM_STATE,
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
