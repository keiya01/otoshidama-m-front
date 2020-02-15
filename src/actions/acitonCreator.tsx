import { sampleAction } from './SampleAction';

class AppActionCreator {
  public sampleAction = sampleAction;
}

const appActionCreator = new AppActionCreator();

export default appActionCreator;
