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
    <div className="flex w-[1202px] mt-[39px]">
      {/* Sidebar */}
      <ApiDocSideNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="px-6 ">
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default ApiDocBody;