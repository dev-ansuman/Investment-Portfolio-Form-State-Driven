export type ModalConfig = {
  title: string;
  message: string;
  type: 'confirm' | 'alert';
  onConfirm?: (confirmed: boolean) => void;
};
