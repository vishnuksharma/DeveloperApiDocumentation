const INITIAL_STATE = {
  isDataLoading: false,
  documentationList: [],
  docByIdData: {},
}

const setDocumentationListStore = (state, documentationList) => ({
  ...state,
  documentationList,
});

const setDocByIdDataStore = (state, docByIdData) => ({
  ...state,
  docByIdData,
});
const setIsDataLoading = (state, isDataLoading) => ({
  ...state,
  isDataLoading,
});

export default {
  initialState: INITIAL_STATE,
  reducers: {
    setDocumentationListStore,
    setDocByIdDataStore,
    setIsDataLoading,
  },
};