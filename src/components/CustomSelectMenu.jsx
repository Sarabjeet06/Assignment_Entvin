import React, { useState, useRef, useEffect } from 'react';
import downArrow from '../assets/downArrow.svg'; // Ensure this is the correct path to your down arrow SVG

const CustomSelectMenu = ({ options, selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    const handleSelectChange = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close the dropdown after selection
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Cleanup event listener on unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block w-[360px]" ref={dropdownRef}> {/* Attach ref to the dropdown */}
            <div
                className="flex justify-between items-center border border-gray-300 rounded-md h-[52px] bg-white cursor-pointer pl-4 pr-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center">
                    {selectedOption.imgSrc && <img src={selectedOption.imgSrc} alt={selectedOption.altValue} className="mr-2" />}
                    <span>{selectedOption.name || 'Select an option'}</span>
                </div>
                <img
                    src={downArrow}
                    alt="down Arrow"
                    className="h-4 w-4 transform transition-transform duration-200"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
            </div>

            {/* Custom dropdown options */}
            {isOpen && (
                <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectChange(option)}
                            className={`flex items-center px-[16px] py-[10px] hover:bg-[#4D4D4D33] cursor-pointer ${index !== options.length - 1 ? 'border-b border-gray-300' : ''
                                }`}
                        >
                            <img src={option.imgSrc} alt={option.altValue} className="mr-2" />
                            <div>{option.name}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelectMenu;
