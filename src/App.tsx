import React, { Fragment, useState } from "react";
import { Menu } from 'semantic-ui-react'
import Utils from "./container/Utils";
import JsonRulesEngine from "./container/JsonRulesEngine"

const App: React.FC = () => {

  const [activeItem, setActiveItem] = useState('tab1')

  return (
    <Fragment>
        <Menu inverted pointing secondary>
          <Menu.Item name="Utils" 
                      active={activeItem === 'tab1'} 
                      onClick={(e) => {setActiveItem('tab1')}}/>
          <Menu.Item name="Rules Engine" 
                      active={activeItem === 'tab2'}
                      onClick={(e) => {setActiveItem('tab2')}}/>
        </Menu>

        {activeItem === 'tab1' &&
          <Utils />
        }
        {activeItem === 'tab2' &&
          <JsonRulesEngine />
        }

    </Fragment>
  );
};

export default App;
