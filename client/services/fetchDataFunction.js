export async function fetchDataFunction(fetchFunction, handleSuccess, handleError) {
    try {
        const data = await fetchFunction();
        if (data.status === 200) {
            handleSuccess(data);
        }
    } catch (error) {
        handleError(error)
        console.log(error)
    }
}