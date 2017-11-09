import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const styles = {
};

const App = () => (
    <div styles={ styles }>
      <Main />
    </div>
    );

render((<BrowserRouter>
          <App />
        </BrowserRouter>
      ), document.getElementById('root'));
