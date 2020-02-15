import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../App';
import logo from '../../logo.svg';
import '../../App.css';
import appActionCreator from '../../actions/acitonCreator';

type RootState = ReturnType<typeof store.getState>;

const Sample = () => {
  const sampleState = useSelector((state: RootState) => state.SampleReducer.text);
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
        <button type="button" onClick={() => { dispatch(appActionCreator.sampleAction('OK')); }}>
          button1
        </button>
        <button type="button" onClick={() => { dispatch(appActionCreator.sampleAction('BAD')); }}>
          button2
        </button>
        <p>{sampleState}</p>
      </header>
    </div>
  );
};

export default Sample;
