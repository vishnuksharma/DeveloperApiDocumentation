import { createSelector } from 'reselect';

const getDocumentationListStore = state => state.apiDocumentation.documentationList;
export const getDocumentationListState = createSelector(
  [getDocumentationListStore],
  documentationList => documentationList,
);

const getDocByIdDataStore = state => state.apiDocumentation.docByIdData;
export const getDocByIdDataState = createSelector(
  [getDocByIdDataStore],
  docByIdData => docByIdData,
);

const getIsDataLoadingStote = state => state.apiDocumentation.isDataLoading
export const getIsDataLoading = createSelector(
  [getIsDataLoadingStote],
  isDataLoading => isDataLoading,
);