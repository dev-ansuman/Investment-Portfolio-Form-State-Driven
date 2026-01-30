import React from 'react';
import Button from '../Ui/default/button';
import { NAVIGATION } from '../../constants/form-constants/navigation';

interface navigationProps {
  previousStep: () => void;
  nextStep: () => void;
  handleSubmit: () => void;
  currentStep: number;
  isEditing?: boolean;
}

const Navigation: React.FC<navigationProps> = ({
  previousStep,
  nextStep,
  handleSubmit,
  currentStep,
  isEditing,
}) => {
  return (
    <div className="buttonContainer">
      <Button
        text={NAVIGATION.PREVIOUS.LABEL}
        id={NAVIGATION.PREVIOUS.ID}
        buttonClass="navigationButton"
        action={previousStep}
        disabled={currentStep === 1}
        variant="outlined"
        color="inherit"
      />
      {currentStep < 3 ? (
        <Button
          text={NAVIGATION.CONTINUE.LABEL}
          id={NAVIGATION.CONTINUE.ID}
          buttonClass="navigationButton"
          action={nextStep}
          variant="contained"
          color="inherit"
        />
      ) : (
        <Button
          text={isEditing ? 'Update' : NAVIGATION.SUBMIT.LABEL}
          id={NAVIGATION.SUBMIT.ID}
          buttonClass="navigationButton"
          action={handleSubmit}
          variant="contained"
          color="inherit"
        />
      )}
    </div>
  );
};

export default Navigation;
