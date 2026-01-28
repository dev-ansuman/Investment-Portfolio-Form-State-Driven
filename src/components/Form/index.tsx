// import React from 'react'
// import InvestmentDetails  from './InvestmentDetails'

// const Form: React.FC = () => {
//     return (
//         <div>
//         <InvestmentDetails /></div>
//     )
// }

// export default Form;

import React from 'react';
import InvestmentDetails from './investment-details';
// import AssetAllocation from './asset-allocation';
// import Preferences from './preferences';

const Form: React.FC = () => {
  return (
    <div>
      <InvestmentDetails />
      {/* <AssetAllocation /> */}
      {/* <Preferences /> */}
    </div>
  );
};

export default Form;
