export async function fetchDataFunction(fetchFunction, handleSuccess, handleError, store) {
    try {
        store.dispatch("handleLoading", true);
        const data = await fetchFunction();
        if (data.status === 200) {
            handleSuccess(data);
        }
    } catch (error) {
        handleError(error)
        console.log(error)
    } finally {
        store.dispatch("handleLoading", false);
    }
}