
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PropertyCalculatorPage: React.FC = () => {
    const [propertyType, setPropertyType] = useState('Apartment');
    const [area, setArea] = useState('');
    const [marketCondition, setMarketCondition] = useState('Average');
    const [estimatedValue, setEstimatedValue] = useState<string | null>(null);

    const calculateValue = (e: React.FormEvent) => {
        e.preventDefault();
        const areaSqFt = parseFloat(area);
        if (isNaN(areaSqFt) || areaSqFt <= 0) {
            alert("Please enter a valid area.");
            return;
        }

        let baseRate = 5000; // A base rate per sq. ft.
        if (propertyType === 'House') baseRate = 7000;
        if (propertyType === 'Commercial') baseRate = 12000;

        let marketMultiplier = 1.0;
        if (marketCondition === 'Hot') marketMultiplier = 1.2;
        if (marketCondition === 'Cold') marketMultiplier = 0.85;

        const value = areaSqFt * baseRate * marketMultiplier;
        const lowerBound = Math.round(value * 0.9);
        const upperBound = Math.round(value * 1.1);

        const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
        setEstimatedValue(`${formatter.format(lowerBound)} - ${formatter.format(upperBound)}`);
    };

    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342]">Property Value Calculator</h1>
                        <p className="mt-4 text-lg text-gray-600">Get a quick estimate of your property's current market value.</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={calculateValue} className="space-y-6">
                            <div>
                                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
                                <select id="propertyType" value={propertyType} onChange={e => setPropertyType(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm">
                                    <option>Apartment</option>
                                    <option>House</option>
                                    <option>Commercial</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area (sq. ft.)</label>
                                <input type="number" id="area" value={area} onChange={e => setArea(e.target.value)} required min="1" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="marketCondition" className="block text-sm font-medium text-gray-700">Market Condition</label>
                                <select id="marketCondition" value={marketCondition} onChange={e => setMarketCondition(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm">
                                    <option>Hot</option>
                                    <option>Average</option>
                                    <option>Cold</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-[#0A2342] text-white py-3 px-4 rounded-md shadow-sm text-base font-medium hover:bg-[#1E3A8A]">
                                    Calculate Value
                                </button>
                            </div>
                        </form>

                        {estimatedValue && (
                            <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-700">Estimated Property Value Range:</h3>
                                <p className="text-3xl font-bold text-[#0A2342] my-2">{estimatedValue}</p>
                                <p className="text-sm text-gray-500 mt-4">
                                    <strong>Disclaimer:</strong> This is a preliminary estimate for informational purposes only and should not be considered an official appraisal. For a detailed and accurate valuation, please request a professional report.
                                </p>
                                <Link to="/get-a-quote" className="mt-4 inline-block text-[#D4AF37] font-semibold hover:underline">
                                    Request a Detailed Valuation Report
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCalculatorPage;
