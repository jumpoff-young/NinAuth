import React from 'react';

const ApiDocSideNav = ({ activeSection, setActiveSection }) => {
  const items = ['Introduction', 'App Integrations', 'Environment', 'Resources', 'Testing'];

  return (
    <div className="w-[385px] pl-[150px] pr-[16px] flex flex-col gap-[20px]  pb-[112px] border-r-[1px] border-[#E1E1D8]">
      {items.map((item) => (
        <div
          key={item}
          className={`w-[219px] px-3 py-[6px] rounded-[8px] cursor-pointer ${
            activeSection === item ? 'bg-[#F9F5EB] text-[#111111]' : 'text-blackCustom'
          }`}
          onClick={() => setActiveSection(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ApiDocSideNav;