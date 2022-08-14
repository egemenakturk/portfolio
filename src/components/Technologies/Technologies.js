import React from 'react';
import {DiFirebase, DiReact} from 'react-icons/di';
import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech" style={{marginBottom:'20px'}}>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range a technologies in my career.
            From Back-end To Front-end
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <DiReact size="3rem"/>
                </picture>
                <ListContainer>
                    <ListTitle>Programming</ListTitle>
                    <ListParagraph>
                        Java - React.js - Python - Sql <br/>
                        Javascript - C - React-Native <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem style={{marginLeft:'18%'}}>
                <picture>
                    <DiFirebase size="3rem"/>
                </picture>
                <ListContainer>
                    <ListTitle>Technlogies and Tools</ListTitle>
                    <ListParagraph>
                        Spring-Boot - Hibernate - Git  <br/>
                        Jenkins -Maven - Json - Soap <br/>
                        RobotFramework - Gauge
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
