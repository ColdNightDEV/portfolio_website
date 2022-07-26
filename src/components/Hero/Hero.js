import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello There<br />
          I'm Emmanuel(aka Legadax)
        </SectionTitle>
        <SectionText>
        I am a web developer, graphics designer and Discord Expert. This is my web portfolio.<br />
        Some of the sites i've made are under a <b>NDA</b>, so you can't see them here.
        </SectionText>
        <Button><a href="https://discord.gg/YjS5AjPn">Join my server</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;