import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { RootState } from '../../reducers/RootReducers';
import Sample from '../../components/page/Sample';
import * as SampleActions from '../../actions/SampleActions';

const SampleContainerComponent = () => {
  const sampleState = useSelector((state: RootState) => state.SampleReducers);
  const dispatch = useDispatch();

  const handle = React.useCallback(
    (text: string) => {
      dispatch(SampleActions.sampleAction(text));
    },
    [dispatch],
  );

  return (
    <Sample sampleState={sampleState} handle={handle} />
  );
};

export default SampleContainerComponent;
