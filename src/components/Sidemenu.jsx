import React from 'react';
import logo from '../assets/logo.svg';
import CustomAccordion from './CustomAccordion';
import Avatar from '../assets/Avatar.svg';
import Integration from '../assets/Integration.svg';
import logout from '../assets/logout.svg';
import Support from '../assets/Support.svg';
import Add from '../assets/Add.svg';
import EditPdf from '../assets/EditPdf.svg';

const MenuItem = ({ imgSrc, altValue, text }) => (
    <div className='flex gap-2 w-[226px] h-[40px] items-center'>
        <img src={imgSrc} alt={altValue} className="h-5 w-5" />
        <div>{text}</div>
    </div>
);

const Sidemenu = () => {
    const menuItems = [
        { imgSrc: Add, altValue: "Add", option: "Pharma AI", subOptions: ["Search", "Reports", "News Alerts", "Notebooks"] },
        { imgSrc: EditPdf, altValue: "Edit", option: "Edit Report", subOptions: ["Market Intelligence Report", "Competitor Analysis", "Annual Result Report"] },
        { imgSrc: Integration, altValue: "Integration", text: "Integration" },
        { imgSrc: Support, altValue: "Support", text: "Help and Support" },
        { imgSrc: Avatar, altValue: "User Avatar", text: "Dr. Koushik Paul" },
        { imgSrc: logout, altValue: "Logout", text: "Logout" },
    ];

    return (
        <div className='h-screen w-[274px] shadow-[4px_0_10px_rgba(0,0,0,0.1)] bg-white overflow-y-auto flex flex-col items-center'>
            <div className='h-[581px] flex-col gap-[8px]'>
                <div>
                    <img src={logo} alt='Entvin Logo' />
                </div>
                {menuItems.map((item, index) =>
                    item.subOptions ? (
                        <CustomAccordion key={index} imgSrc={item.imgSrc} altValue={item.altValue} option={item.option} subOption={item.subOptions} />
                    ) : (
                        <MenuItem key={index} imgSrc={item.imgSrc} altValue={item.altValue} text={item.text} />
                    )
                )}
            </div>
        </div>
    );
};

export default Sidemenu;
