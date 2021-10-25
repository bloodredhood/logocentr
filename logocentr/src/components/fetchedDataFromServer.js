const  fetchedDataFromServer = async() => {
    const response = await fetch('/')
    return await response.json()
}

export default fetchedDataFromServer