import { getDocumentationList, getDocumentById } from '../api/apiDocument';
const delay = (time)=> new Promise(resolve =>setTimeout(()=>resolve(), time))

export async function getDocumentListData() {
    try {
      this.setIsDataLoading(true)
      await delay(1000);
      const res = await getDocumentationList();
      this.setDocumentationListStore(res)
      this.setDocByIdDataStore({}) // Clear old loaded data
    } catch (error) {
      console.log(error)
    } finally {
      this.setIsDataLoading(false)
      // ToDO: Finally
    }
  }
  export async function getDocumentDataById(params) {
    try {
      this.setIsDataLoading(true)
      await delay(1000);
      const res = await getDocumentById(params);
      this.setDocByIdDataStore(res)
    } catch (error) {
      console.log(error)
    } finally {
      this.setIsDataLoading(false)
    }
  }