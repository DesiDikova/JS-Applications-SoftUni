//obshti neshta kato getUserData, setUserData

export function getUserData() {
    //return JSON.parse(sessionStorage.getItem('userData'));
    const data = JSON.parse(sessionStorage.getItem('userData'));
    return data;
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}