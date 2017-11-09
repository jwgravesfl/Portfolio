import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import { HashRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const styles = {
};

const App = () => (
    <div styles={ styles }>
      <Main />
    </div>
    );

render((<HashRouter>
          <App />
        </HashRouter>
      ), document.getElementById('root'));
