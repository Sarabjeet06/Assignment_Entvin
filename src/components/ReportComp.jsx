import React, { useState } from 'react';
import CustomSelectMenu from './CustomSelectMenu';
import SearchBar from './SearchBar';
import CustomTable from './CustomTable';
import downloadIcon from '../assets/downloadIcon.svg';
import Medicine_1 from '../assets/Medicine_1.svg';
import Medicine_2 from '../assets/Medicine_2.svg';
import Medicine_3 from '../assets/Medicine_3.svg';
import Medicine_4 from '../assets/Medicine_4.svg';
import Medicine_5 from '../assets/Medicine_5.svg';
import Medicine_6 from '../assets/Medicine_6.svg';


const ReportComp = () => {

    

    const options = [
        {
            imgSrc: Medicine_1,
            altValue: 'GlaxoSmithKline Pharmaceuticals',
            name: 'GlaxoSmithKline Pharmaceuticals',
        },
        {
            imgSrc: Medicine_6,
            altValue: 'Pfizer',
            name: 'Pfizer',
        },
        {
            imgSrc: Medicine_4,
            altValue: 'Bristol Myers Squibb',
            name: 'Bristol Myers Squibb',
        },
        {
            imgSrc: Medicine_5,
            altValue: 'Roche',
            name: 'Roche',
        },
        {
            imgSrc: Medicine_3,
            altValue: 'Novo Nordisk',
            name: 'Novo Nordisk',
        },
        {
            imgSrc: Medicine_2,
            altValue: 'Eli lilly',
            name: 'Eli lilly',
        },
    ];
    

    const [selectedOption, setSelectedOption] = useState(options[1]);
    const [searchValue , setSearchValue]=  useState('');

    return (
        <div className='flex flex-col w-[1118px] px-6'>
            <div className='flex justify-between items-center h-[52px] mt-[48px]'>
                <h1 className='text-[24px] font-medium leading-[32px] text-left'>
                    Portfolio Strategy Report
                </h1>
                <div className='flex items-center justify-center w-[226px] h-[52px] border border-solid border-[#7F56D9] rounded-[8px] text-[#7F56D9] box-border'>
                    <button className='flex items-center justify-center w-full h-full bg-white rounded-[8px] pt-[14px] pr-[40px] pb-[14px] pl-[40px] box-border transition-colors duration-300 ease-in-out'>
                        <img src={downloadIcon} alt='Download report' className='mr-2' />
                        <span>Download</span>
                    </button>
                </div>
            </div>
            <div className='flex justify-between mt-4'>
                <CustomSelectMenu options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <SearchBar searchValue={searchValue}  setSearchValue={setSearchValue} />
            </div>
            <div className='mt-4'>
                <CustomTable selectedOption={selectedOption}  searchValue={searchValue} />
            </div>
        </div>
    );
};

export default ReportComp;
