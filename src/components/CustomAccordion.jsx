import React, { useState } from 'react';
import downArrow from '../assets/downArrow.svg';

const CustomAccordion = ({ imgSrc, altValue, option, subOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-[226px] mb-4">
            {/* Main Option */}
            <div
                className="flex items-center space-x-4 cursor-pointer relative group"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Image with vertical line starting from the middle */}
                <div className="relative flex items-center justify-center">
                    <img src={imgSrc} alt={altValue} />
                    {/* Vertical line */}
                    {isOpen && (
                        <div
                            className="absolute left-1/2 top-full bg-gray-300"
                            style={{
                                width: '2px',
                                height: `${subOption.length * 56 - 28}px`, // Manual adjustment for vertical line
                                transform: 'translateX(-50%)', // Center the vertical line
                            }}
                        ></div>
                    )}
                </div>

                {/* Option Text and Arrow */}
                <span className="flex-grow font-medium text-gray-800 group-hover:text-[#7F56D9] transition-colors duration-200">
                    {option}
                </span>
                <img
                    src={downArrow}
                    alt="down Arrow"
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>

            {/* Sub-options */}
            {isOpen && (
                <div className="ml-4 mt-2 space-y-2">
                    {subOption.map((subOpt, index) => (
                        <div key={index} className="relative flex items-center space-x-2">
                            {/* Horizontal line starting from the vertical line */}
                            <div className="absolute left-[20px] top-1/2 w-[24px] h-[2px] bg-gray-300"></div>
                            {/* Sub-option text with hover effect only on text */}
                            <div className="pl-10 py-2 text-gray-700 hover:text-[#7F56D9] cursor-pointer transition-colors duration-200">
                                {subOpt}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomAccordion;
