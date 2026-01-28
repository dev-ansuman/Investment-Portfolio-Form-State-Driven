import React from 'react';
import CreateRadioCheckbox from '../Ui/CreateRadioCheckbox';
import { PREFERENCES } from '../../constants/form-constants';
import Textarea from '../Ui/textarea';
import RadioCheckbox from '../Ui/radioCheckbox';

const Preferences: React.FC = () => {
  return (
    <div className="formContainer">
      <div className="formScreen">
        {/* Automated Rebalancing Radio */}
        <div className="fieldDiv">
          <div className="automatedRebalancingInputContainer">
            <CreateRadioCheckbox
              fieldTitle={PREFERENCES.AUTOMATED_REBALANCING.LABEL}
              type={PREFERENCES.AUTOMATED_REBALANCING.TYPE}
              options={PREFERENCES.AUTOMATED_REBALANCING.OPTIONS}
              name={PREFERENCES.AUTOMATED_REBALANCING.NAME}
              id={PREFERENCES.AUTOMATED_REBALANCING.ID}
              hidden={PREFERENCES.AUTOMATED_REBALANCING.HIDDEN}
              inputClass={PREFERENCES.AUTOMATED_REBALANCING.CLASS[1]}
            />
          </div>
        </div>

        {/* Tax Saving Preference Radio */}
        <div className="fieldDiv" id="taxSavingPreference">
          <CreateRadioCheckbox
            fieldTitle={PREFERENCES.TAX_SAVING_PREF.LABEL}
            type={PREFERENCES.TAX_SAVING_PREF.TYPE}
            options={PREFERENCES.TAX_SAVING_PREF.OPTIONS}
            name={PREFERENCES.TAX_SAVING_PREF.NAME}
            id={PREFERENCES.TAX_SAVING_PREF.ID}
            hidden={PREFERENCES.TAX_SAVING_PREF.HIDDEN}
            inputClass={PREFERENCES.TAX_SAVING_PREF.CLASS[1]}
          />
        </div>

        {/* Financial Goals Textarea */}
        <div className="fieldDiv">
          <div className="fieldTitle">{PREFERENCES.FINANCIAL_GOALS.LABEL}</div>
          <Textarea
            name={PREFERENCES.FINANCIAL_GOALS.NAME}
            id={PREFERENCES.FINANCIAL_GOALS.ID}
            placeholder={PREFERENCES.FINANCIAL_GOALS.PLACEHOLDER}
            rows={PREFERENCES.FINANCIAL_GOALS.ROWS}
          />
        </div>

        {/* Acknoledgement checkbox */}
        <div className="fieldDiv">
          <div className="alignPreferences">
            <RadioCheckbox
              type={PREFERENCES.RISK_ACKNOWLEDGEMENT.TYPE}
              options={PREFERENCES.RISK_ACKNOWLEDGEMENT.OPTIONS}
              name={PREFERENCES.RISK_ACKNOWLEDGEMENT.NAME}
              id={PREFERENCES.RISK_ACKNOWLEDGEMENT.ID}
              hidden={PREFERENCES.RISK_ACKNOWLEDGEMENT.HIDDEN}
              inputClass={PREFERENCES.RISK_ACKNOWLEDGEMENT.CLASS[0]}
            />
            <div className="fieldTitle">{PREFERENCES.RISK_ACKNOWLEDGEMENT.LABEL}</div>
          </div>
          <div>{PREFERENCES.RISK_ACKNOWLEDGEMENT.TEXT_CONTENT}</div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
