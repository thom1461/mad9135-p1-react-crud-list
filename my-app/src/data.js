
let data = () => {
    let storedData = JSON.parse(localStorage.getItem('dataObject'))
    if (storedData !== null) {
        return storedData
    } else {
        return []
    }
}

export { data };