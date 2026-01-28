import React from 'react';
import CreateRadioCheckbox from '../Ui/CreateRadioCheckbox';
import { PREFERENCES } from '../../constants/form-constants';
import Textarea from '../Ui/textarea';
import RadioCheckbox from '../Ui/radioCheckbox';

const Preferences: React.FC = () => {
  return (
    <>
      {/* Automated Rebalancing Radio */}
      <CreateRadioCheckbox
        fieldTitle={PREFERENCES.AUTOMATED_REBALANCING.LABEL}
        type={PREFERENCES.AUTOMATED_REBALANCING.TYPE}
        options={PREFERENCES.AUTOMATED_REBALANCING.OPTIONS}
        name={PREFERENCES.AUTOMATED_REBALANCING.NAME}
        id={PREFERENCES.AUTOMATED_REBALANCING.ID}
        hidden={PREFERENCES.AUTOMATED_REBALANCING.HIDDEN}
      />

      {/* Tax Saving Preference Radio */}
      <CreateRadioCheckbox
        fieldTitle={PREFERENCES.TAX_SAVING_PREF.LABEL}
        type={PREFERENCES.TAX_SAVING_PREF.TYPE}
        options={PREFERENCES.TAX_SAVING_PREF.OPTIONS}
        name={PREFERENCES.TAX_SAVING_PREF.NAME}
        id={PREFERENCES.TAX_SAVING_PREF.ID}
        hidden={PREFERENCES.TAX_SAVING_PREF.HIDDEN}
      />

      {/* Financial Goals Textarea */}
      <div>{PREFERENCES.FINANCIAL_GOALS.LABEL}</div>
      <Textarea
        name={PREFERENCES.FINANCIAL_GOALS.NAME}
        id={PREFERENCES.FINANCIAL_GOALS.ID}
        placeholder={PREFERENCES.FINANCIAL_GOALS.PLACEHOLDER}
      />

      {/* Acknoledgement checkbox */}
      <div>
        <div>
          <RadioCheckbox
            type={PREFERENCES.RISK_ACKNOWLEDGEMENT.TYPE}
            options={PREFERENCES.RISK_ACKNOWLEDGEMENT.OPTIONS}
            name={PREFERENCES.RISK_ACKNOWLEDGEMENT.NAME}
            id={PREFERENCES.RISK_ACKNOWLEDGEMENT.ID}
            hidden={PREFERENCES.RISK_ACKNOWLEDGEMENT.HIDDEN}
          />
          <div>{PREFERENCES.RISK_ACKNOWLEDGEMENT.LABEL}</div>
        </div>
        <div>{PREFERENCES.RISK_ACKNOWLEDGEMENT.TEXT_CONTENT}</div>
      </div>
    </>
  );
};

export default Preferences;
