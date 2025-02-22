import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Emmanuel(Legadax)</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#tech">
          <NavLink>RoadMap</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Calender</NavLink>
        </Link>
      </li>         */}
    </Div2>
      <Div3>
          {/* <SocialIcons href="#">
           <AiFillFacebook size="3rem" />
          </SocialIcons> */}
          <SocialIcons href="https://twitter.com/ap_blend10">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/__legadax/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
      </Div3>
    </Container>
);

export default Header;


          // <SocialIcons href="#">
          //  <AiFillFacebook size="3rem" />
          // </SocialIcons>
          // <SocialIcons href="https://twitter.com/RockadooPark">
          //   <AiFillTwitterCircle size="3rem" />
          // </SocialIcons>
          // <SocialIcons href="https://www.instagram.com/rockadoopark/">
          //   <AiFillInstagram size="3rem" />
          // </SocialIcons>