import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";

import image1 from "../../assets/image1.jpg";
const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" >
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={image1} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
          I'm a post-graduate student at the University of Paderborn pursuing my Master in Computer Science. I have a good background in web development and have some professional experience in the same. With a broad set of skills and still learning, I'm looking for exciting opportunities.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites or web apps from
            . The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, REACT JS. I also have professional experience in Vuejs and Django Framework
          </StyledParagraph>
          <StyledParagraph>
            This is my first project built from scratch. Learned and honed my React skills by watching several Youtube tutorials and other resources available online.
          </StyledParagraph>
         
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
