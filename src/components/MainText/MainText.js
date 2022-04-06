import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './MainTextStyles';

const MainText = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Kelvin
      </SectionTitle>
      <SectionText>
        Currently working in IAPPS as software developer.<br />
        Hope you like my Portfolio<br /><br/>
        BUILDING IN PROGRESS
      </SectionText>
    </LeftSection>
  </Section>
);

export default MainText;