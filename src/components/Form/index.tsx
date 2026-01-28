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
// import InvestmentDetails from './investment-details';
import AssetAllocation from './asset-allocation';

const Form: React.FC = () => {
  return (
    <div>
      {/* <InvestmentDetails /> */}
      <AssetAllocation />
    </div>
  );
};

export default Form;
