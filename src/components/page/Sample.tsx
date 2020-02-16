import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../logo.svg';
import '../../App.css';
import { RootState } from '../../reducer/RootReducers';
import * as SampleActions from '../../actions/SampleActions';

const Sample = () => {
  const sampleState = useSelector<RootState, string>((state) => state.text);
  const dispatch = useDispatch();

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
        <button type="button" onClick={() => { dispatch(SampleActions.sampleAction('OK')); }}>
          button1
        </button>
        <button type="button" onClick={() => { dispatch(SampleActions.sampleAction('BAD')); }}>
          button2
        </button>
        <p>{sampleState}</p>
      </header>
    </div>
  );
};

export default Sample;
