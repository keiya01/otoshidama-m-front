import React from 'react';
import { SampleState } from '../../reducers/SampleReducers';
import logo from '../../logo.svg';
import '../../App.css';

interface Props {
  sampleState: SampleState;
  handle: (text: string) => void;
}

const Sample: React.FC<Props> = (props) => {
  const { sampleState, handle } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* sample */}
        <button type="button" onClick={() => handle('ok')}>
          button1
        </button>
        <button type="button" onClick={() => handle('bad')}>
          button2
        </button>
        <p>{sampleState.text}</p>
      </header>
    </div>
  );
};

export default Sample;
