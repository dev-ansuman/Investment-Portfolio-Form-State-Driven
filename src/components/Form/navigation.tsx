import React from 'react';
import Button from '../Ui/default/button';
import { NAVIGATION } from '../../constants/form-constants/navigation';

interface navigationProps {
  previousStep: () => void;
  nextStep: () => void;
  handleSubmit: () => void;
  currentStep: number;
}

const Navigation: React.FC<navigationProps> = ({
  previousStep,
  nextStep,
  handleSubmit,
  currentStep,
}) => {
  return (
    <div className="buttonContainer">
      <Button
        text={NAVIGATION.PREVIOUS.LABEL}
        id={NAVIGATION.PREVIOUS.ID}
        buttonClass="navigationButton"
        action={previousStep}
      />
      {currentStep < 3 ? (
        <Button
          text={NAVIGATION.CONTINUE.LABEL}
          id={NAVIGATION.CONTINUE.ID}
          buttonClass="navigationButton"
          action={nextStep}
        />
      ) : (
        <Button
          text={NAVIGATION.SUBMIT.LABEL}
          id={NAVIGATION.SUBMIT.ID}
          buttonClass="navigationButton"
          action={handleSubmit}
        />
      )}
    </div>
  );
};

export default Navigation;
