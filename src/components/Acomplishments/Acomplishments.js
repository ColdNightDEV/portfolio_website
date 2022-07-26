import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Random Goal Here'},
  { number: 1000, text: 'Animal lovers on discord', },
  { number: 1900, text: 'Different Locations', },
  { number: '5000$', text: 'Dollar donations a month', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Our Goals</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
