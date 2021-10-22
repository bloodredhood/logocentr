const response = await fetch('/')
const fetchedDataFromServer = await response.json()

export default fetchedDataFromServer