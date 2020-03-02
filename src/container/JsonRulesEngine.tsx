import React, { useState, useEffect } from "react";
import { Container, Grid, TextArea, Menu } from "semantic-ui-react";
import { Engine } from 'json-rules-engine'

const JsonRulesEngine = () => {

  const [activeItem, setActiveItem] = useState('tab1')

  const [rule, setRule] = useState();
  const [facts, setFacts] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {
    if(rule && facts){
      runEngine();
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rule, facts]);

  const runEngine = () => {
    let engine = new Engine();
    try {
      setOutput('');
      engine.addRule(JSON.parse(rule));
      engine.run(JSON.parse(facts))
        .then(results => {
          results.events.map(event => setOutput(event.type))
      })  
    } catch (error) {
      console.error(error);
      setOutput(error.message);
    }
  }

  return (
    <Container className="main">

      <Grid container columns="equal">
        <Grid.Column className="outputColumn"
          centered="true"
          mobile={16}
          tablet={16}
          computer={12}
        >
          <Menu inverted secondary color="violet">
            <Menu.Item name="Rule" 
                        active={activeItem === 'tab1'} 
                        onClick={(e) => {setActiveItem('tab1')}}/>
            <Menu.Item name="Facts" 
                        active={activeItem === 'tab2'}
                        onClick={(e) => {setActiveItem('tab2')}}/>
          </Menu>

          {activeItem === 'tab1' &&
            <TextArea
                className="textarea-2"
                value={rule}
                rows={10}
                placeholder="Input rule.."
                spellCheck="false"
                onChange={(e, data) => {
                  setRule(data.value);
                }}
            />
          }
          {activeItem === 'tab2' &&
            <TextArea
            className="textarea-2"
                value={facts}
                rows={10}
                placeholder="Input facts.."
                spellCheck="false"
                onChange={(e, data) => {
                  setFacts(data.value);
                }}
            />
          }          
        </Grid.Column>

        <Grid.Column className="outputColumn" centered="true" mobile={16} tablet={16} computer={4}>
          <Container>
          <div>
              <pre>{output}</pre>
          </div>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default JsonRulesEngine;
