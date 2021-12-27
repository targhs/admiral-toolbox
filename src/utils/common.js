const saveToLocal = (key, value) => {
    return localStorage.setItem(key, value);
}

const getFromLocal = (key) => {
    return localStorage.getItem(key)
}