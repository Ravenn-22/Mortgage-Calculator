import React, { useState } from "react";

const MortgageCalculator = () => {
    const [homePrice, setHomePrice] = useState ('');
    const [downPayment, setDownPayment] = useState ('');
    const [loanTerm, setLoanTerm] = useState ('');
    const [interestRate, setInterestRate] = useState ('');
    const [monthlyPayment, setMonthlyPayment] = useState (null);


    const calculateMortgage = (e) => {
        e.preventDefault();
        const principal = homePrice - downPayment;
        const monthlyInterest =(interestRate / 100) / 12;
        const numberOfPayments = loanTerm * 12;

        const payment =
        (principal * monthlyInterest) / (1 -Math.pow(1 + monthlyInterest, -numberOfPayments));

        setMonthlyPayment(payment.toFixed(2));

    };

    return (
        
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
      <h2 className="text-center mb-4 text-primary">Mortgage Calculator</h2>
      <form onSubmit={calculateMortgage}>
                <div className="mb-3">
                    <label className="form-label">Home Price ($)</label>
                      <div className="input-group">
            <span className="input-group-text">$</span>
                    <input type="number" className="form-control"
                    value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))}
                    required/>
                </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Down Payment ($)</label>
                      <div className="input-group">
            <span className="input-group-text">$</span>
                    <input type="number" className="form-control"
                    value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
                    required/>
                </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Loan Term (Years)</label>
                    <input type="number" className="form-control"
                    value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}
                    required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Interest Rate (%)</label>
                     <div className="input-group"> 
                    <input type="number" className="form-control" step="0.01"
                    value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                    required/>
                     <span className="input-group-text">%</span>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Calculate</button>
            </form>
            {monthlyPayment && (
        <div className="alert alert-success mt-4 text-center">
          Your estimated monthly payment is <strong>${monthlyPayment}</strong>
        </div>
      )}


</div>
        </div>
    )

}
export default MortgageCalculator;