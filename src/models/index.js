import omit from 'lodash/omit';
import * as effects from './effacts';
import apiDocReducer from './reducers';
import * as selectors from './selectors';


const initialState = {
};

export default {
  name: 'apiDocumentation',
  state: { ...initialState, ...apiDocReducer.initialState},
  effects: () => effects,
  reducers: apiDocReducer.reducers,
  selectors: omit(selectors, Object.keys(selectors).filter(k => selectors[k].omitToRematch)),
};
