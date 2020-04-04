const INITIAL_STATE = {
  isDataLoading: false,
  documentationList: [],
  docByIdData: {},
}

const setDocumentationListStore = (state, documentationList) => {
  // const docList = state.documentationList;
  // const newList = docList.concat(documentationList)
  // console.log(docList, 'newList', documentationList, 'newList', newList);
  
  return {
    ...state,
    documentationList,
  }
};

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