export const isObjectEmpty = (obj) => {
    for (var prop in obj){
        if (obj.hasOwnProperty(prop)) return false;
    }
    
    return true
}

export const checkValue = (value) => (
    value.trim() !== "" && value.trim() !== undefined && value.trim() !== null
)