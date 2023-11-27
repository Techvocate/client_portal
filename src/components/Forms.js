import React, { useState } from 'react';
import './Forms.css'

const Forms = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({
    agreementType: '',
    landlordName: '',
    tenantName: '',
    partner1Name: '',
    partner2Name: '',
    sellerName: '',
    buyerName: '',
    rentDetails: {
      amount: '',
      duration: '',
      location: '',
    },
    businessDetails: {
      partners: '',
      initialDuration: '',
      paymentPolicy: '',
    },
    agreementSale: {
        propertyDetails: '',
        propertyDimensions: '',
        propertyAmount: '',
        legalIssues: '',
      },
    SaleAgreement: {
        propertyDetails: '',
        propertyDimensions: '',
        propertyAmount: '',
        legalIssues: '',
      },
  });

  const handleOptionSelect = (selectedOption) => {
    setFormValues({ ...formValues, agreementType: selectedOption });
    setCurrentStep(currentStep + 1);
  };

  const handleLandlordTenantSubmit = (name1, name2) => {
    if (formValues.agreementType === 'Rent Agreement') {
      setFormValues({ ...formValues, landlordName: name1, tenantName: name2 });
    } else if (formValues.agreementType === 'Business Agreement') {
      setFormValues({ ...formValues, partner1Name: name1, partner2Name: name2 });
    }
    setCurrentStep(currentStep + 1);
  };

  const handleRentDetailsSubmit = (amount, duration, location) => {
    setFormValues({
      ...formValues,
      rentDetails: {
        amount,
        duration,
        location,
      },
    });
    setCurrentStep(currentStep + 1);
  };

  const handleBusinessDetailsSubmit = (partners, initialDuration, paymentPolicy) => {
    setFormValues({
      ...formValues,
      businessDetails: {
        partners,
        initialDuration,
        paymentPolicy,
      },
    });
  };
  const handleAgreementSaleSubmit = (details, dimensions, amount, legalIssues) => {
    setFormValues({
      ...formValues,
      agreementSale: {
        propertyDetails: details,
        propertyDimensions: dimensions,
        propertyAmount: amount,
        legalIssues: legalIssues,
      },
    });
    setCurrentStep(currentStep + 1);
  };
  
  const handleSaleAgreementSubmit = (details, dimensions, amount, legalIssues) => {
    setFormValues({
      ...formValues,
      SaleAgreement: {
        propertyDetails: details,
        propertyDimensions: dimensions,
        propertyAmount: amount,
        legalIssues: legalIssues,
      },
    });
    setCurrentStep(currentStep + 1);
  };
  

  return (
    <div className='main'>
      <div className='forms'>
        {currentStep === 0 && (
        <div>
            <p>Select Agreement Type:</p>
            <button onClick={() => handleOptionSelect('Rent Agreement')}>Rent Agreement</button>
            <button onClick={() => handleOptionSelect('Business Agreement')}>Business Agreement</button>
            <button onClick={() => handleOptionSelect('Agreement to Sale')}>Agreement to Sale</button>
            <button onClick={() => handleOptionSelect('Sale Agreement')}>Sale Agreement</button>

        </div>
        )}
        {currentStep === 1 && (
          /* Render the second form based on selected agreement type */
          <div>
            {formValues.agreementType === 'Rent Agreement' && (
              <>
                <p>Landlord Name:</p>
                <input
                  type='text'
                  value={formValues.landlordName}
                  onChange={(e) => setFormValues({ ...formValues, landlordName: e.target.value })}
                />
                <p>Tenant Name:</p>
                <input
                  type='text'
                  value={formValues.tenantName}
                  onChange={(e) => setFormValues({ ...formValues, tenantName: e.target.value })}
                />
              </>
            )}
            {formValues.agreementType === 'Business Agreement' && (
              <>
                <p>Partner 1 Name:</p>
                <input
                  type='text'
                  value={formValues.partner1Name}
                  onChange={(e) => setFormValues({ ...formValues, partner1Name: e.target.value })}
                />
                <p>Partner 2 Name:</p>
                <input
                  type='text'
                  value={formValues.partner2Name}
                  onChange={(e) => setFormValues({ ...formValues, partner2Name: e.target.value })}
                />
              </>
            )}
            {formValues.agreementType === 'Agreement to Sale' && (
            <>
                <p>Seller Name:</p>
                <input
                type='text'
                value={formValues.sellerName}
                onChange={(e) => setFormValues({ ...formValues, sellerName: e.target.value })}
                />
                <p>Buyer Name:</p>
                <input
                type='text'
                value={formValues.buyerName}
                onChange={(e) => setFormValues({ ...formValues, buyerName: e.target.value })}
                />
            </>
            )}
            {formValues.agreementType === 'Sale Agreement' && (
            <>
                <p>Seller Name:</p>
                <input
                type='text'
                value={formValues.sellerName}
                onChange={(e) => setFormValues({ ...formValues, sellerName: e.target.value })}
                />
                <p>Buyer Name:</p>
                <input
                type='text'
                value={formValues.buyerName}
                onChange={(e) => setFormValues({ ...formValues, buyerName: e.target.value })}
                />
            </>
            )}
            <button onClick={() => handleLandlordTenantSubmit(formValues.landlordName, formValues.tenantName || formValues.partner1Name, formValues.partner2Name || formValues.sellerName, formValues.buyerName || formValues.sellerName, formValues.buyerName)}>Next</button>
          </div>
        )}
        {currentStep === 2 && (
  <div>
    {formValues.agreementType === 'Rent Agreement' && (
      <>
        <p>Rent Amount:</p>
        <input
          type='text'
          value={formValues.rentDetails.amount}
          onChange={(e) => setFormValues({ ...formValues, rentDetails: { ...formValues.rentDetails, amount: e.target.value } })}
        />
        <p>Duration:</p>
        <input
          type='text'
          value={formValues.rentDetails.duration}
          onChange={(e) => setFormValues({ ...formValues, rentDetails: { ...formValues.rentDetails, duration: e.target.value } })}
        />
        <p>Location:</p>
        <input
          type='text'
          value={formValues.rentDetails.location}
          onChange={(e) => setFormValues({ ...formValues, rentDetails: { ...formValues.rentDetails, location: e.target.value } })}
        />
      </>
    )}
    {formValues.agreementType === 'Business Agreement' && (
      <>
        <p>Business Details (50 words):</p>
        <textarea
          value={formValues.businessDetails.details}
          onChange={(e) => setFormValues({ ...formValues, businessDetails: { ...formValues.businessDetails, details: e.target.value } })}
          rows={4}
          cols={50}
          maxLength={50}
        />
        <p>Initial Duration of Business:</p>
        <input
          type='text'
          value={formValues.businessDetails.initialDuration}
          onChange={(e) => setFormValues({ ...formValues, businessDetails: { ...formValues.businessDetails, initialDuration: e.target.value } })}
        />
        <p>Payment Policy:</p>
        <input
          type='text'
          value={formValues.businessDetails.paymentPolicy}
          onChange={(e) => setFormValues({ ...formValues, businessDetails: { ...formValues.businessDetails, paymentPolicy: e.target.value } })}
        />
      </>
    )}
    {formValues.agreementType === 'Agreement to Sale' && (
      <>
        <p>Property Details:</p>
        <textarea
          value={formValues.agreementSale.propertyDetails}
          onChange={(e) => setFormValues({ ...formValues, agreementSale: { ...formValues.agreementSale, propertyDetails: e.target.value } })}
          rows={4}
          cols={50}
          maxLength={50}
        />
        <p>Property Dimensions:</p>
        <input
          type='text'
          value={formValues.agreementSale.propertyDimensions}
          onChange={(e) => setFormValues({ ...formValues, agreementSale: { ...formValues.agreementSale, propertyDimensions: e.target.value } })}
        />
        <p>Property Amount:</p>
        <input
          type='text'
          value={formValues.agreementSale.propertyAmount}
          onChange={(e) => setFormValues({ ...formValues, agreementSale: { ...formValues.agreementSale, propertyAmount: e.target.value } })}
        />
        <p>Legal Issues with Property:</p>
        <input
          type='text'
          value={formValues.agreementSale.legalIssues}
          onChange={(e) => setFormValues({ ...formValues, agreementSale: { ...formValues.agreementSale, legalIssues: e.target.value } })}
        />
        <button
          onClick={() =>
            handleAgreementSaleSubmit(
              formValues.agreementSale.propertyDetails,
              formValues.agreementSale.propertyDimensions,
              formValues.agreementSale.propertyAmount,
              formValues.agreementSale.legalIssues
            )
          }
        >
          Submit
        </button>
      </>
    )}
    {formValues.agreementType === 'Sale Agreement' && (
      <>
        <p>Property Details:</p>
        <textarea
          value={formValues.SaleAgreement.propertyDetails}
          onChange={(e) => setFormValues({ ...formValues, SaleAgreement: { ...formValues.SaleAgreement, propertyDetails: e.target.value } })}
          rows={4}
          cols={50}
          maxLength={50}
        />
        <p>Property Dimensions:</p>
        <input
          type='text'
          value={formValues.SaleAgreement.propertyDimensions}
          onChange={(e) => setFormValues({ ...formValues, SaleAgreement: { ...formValues.SaleAgreement, propertyDimensions: e.target.value } })}
        />
        <p>Property Amount:</p>
        <input
          type='text'
          value={formValues.SaleAgreement.propertyAmount}
          onChange={(e) => setFormValues({ ...formValues, SaleAgreement: { ...formValues.SaleAgreement, propertyAmount: e.target.value } })}
        />
        <p>Legal Issues with Property:</p>
        <input
          type='text'
          value={formValues.SaleAgreement.legalIssues}
          onChange={(e) => setFormValues({ ...formValues, SaleAgreement: { ...formValues.SaleAgreement, legalIssues: e.target.value } })}
        />
        <button
          onClick={() =>
            handleSaleAgreementSubmit(
              formValues.SaleAgreement.propertyDetails,
              formValues.SaleAgreement.propertyDimensions,
              formValues.SaleAgreement.propertyAmount,
              formValues.SaleAgreement.legalIssues
            )
          }
        >
          Submit
        </button>
      </>
    )}
    <button
      onClick={() =>
        formValues.agreementType === 'Rent Agreement'
          ? handleRentDetailsSubmit(formValues.rentDetails.amount, formValues.rentDetails.duration, formValues.rentDetails.location)
          : handleBusinessDetailsSubmit(formValues.businessDetails.details, formValues.businessDetails.initialDuration, formValues.businessDetails.paymentPolicy)
      }
    >
      Submit
    </button>
  </div>
)}
      </div>
    </div>
  );
};

export default Forms;
