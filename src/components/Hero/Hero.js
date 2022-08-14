import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {Col, Row} from "../../layout/TableLayout";
import { saveAs } from "file-saver";

const Hero = (props) => {

  const HandleClick = () => {
      saveAs(
          "https://drive.google.com/file/d/1_irA5DNiHnlCj3EK1moRvRoDk23k4X04/view?usp=sharing",
          "example.pdf"
      );
  }

  return(
      <>
        <Section row nopadding>
          <LeftSection>
            <SectionTitle main center>
              Egemen Doğuş Aktürk <br />
              And This Is My Personal Portfolio
            </SectionTitle>
            <SectionText>
              You can contact me or reach my CV through buttons
            </SectionText>
            <Row>
              <Col>
                <Button><a style={{color:'white'}} href="mailto:egemendakturk@gmail.com">Contact Me</a></Button>
              </Col>
              <Col style={{marginLeft:'15px'}}>
                <Button onClick={HandleClick} ><a style={{color:'white'}}>Download CV</a></Button>
              </Col>
            </Row>

          </LeftSection>
        </Section>
      </>
  );
}



export default Hero;