import React from 'react';
import './Members.css'; // Import CSS file for styling

const MembershipPage = () => {
  const plans = [
    { id: 1, name: 'Basic', price: '1640 rs./month', features: ['Access to gym equipment', 'Group classes', 'Personal trainer once a month'] },
    { id: 2, name: 'Standard', price: '3280 rs./month', features: ['Access to gym equipment', 'Group classes', 'Personal trainer once a week'] },
    { id: 3, name: 'Premium', price: '4920 rs./month', features: ['Access to gym equipment', 'Group classes', 'Unlimited personal training'] }
  ];

  return (
    <div className="plans-container">
      {plans.map(plan => (
        <div key={plan.id} className="plan">
          <div className="plan-content">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button>Select Plan</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembershipPage;
