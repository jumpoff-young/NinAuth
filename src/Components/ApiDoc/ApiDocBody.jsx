import React, { useState } from 'react';
import ApiDocSideNav from './ApiDocSideNav';

import IntroductionContent from './IntroductionContent';
import AppIntegrationsContent from './AppIntegrationsContent';
import Environment from './Environment';
import Resources from './Resources';
import Testing from './Testing';


const ApiDocBody = () => {
  const [activeSection, setActiveSection] = useState('Introduction');

  const sections = {
    Introduction: <IntroductionContent />,
    'App Integrations': <AppIntegrationsContent /> ,
    Environment: <Environment />,
    Resources: <Resources />,
    Testing: <Testing />,
  };



  return (
    <div className="flex w-full max-w-screen lg:w-[1202px] mt-[39px]">
      {/* Sidebar */}

      <div className='w-full max-w-full hidden lg:block'>
      <ApiDocSideNav activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Main Content */}
      <div className="px-6 w-full max-w-screen ">
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default ApiDocBody;