import React, { useReducer, useState } from 'react';
import { appReducer, initialAppState } from './app-reducer';
import { AppContext } from './app-context.instance';
import type { ModalConfig } from '../types/Modal';
import Modal from '../components/Ui/custom/modal';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

  return (
    <AppContext.Provider value={{ state, dispatch, setModalConfig }}>
      {children}

      {modalConfig && (
        <Modal
          title={modalConfig.title}
          message={modalConfig.message}
          type={modalConfig.type}
          onClose={(confirmed) => {
            modalConfig.onConfirm?.(confirmed);
            setModalConfig(null);
          }}
        />
      )}
    </AppContext.Provider>
  );
};
