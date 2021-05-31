import axios from  'axios'

export const getDataCompanies = async (callback) => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/organizations?_expand=place')
        callback(res.data)
    }catch(err){
        console.error(err)
    }
};

export const postDataCompanies = async (name, placeId) => {
    try{
        const res = await axios.post(
            'https://api-fake-pilar-tecno.herokuapp.com/organizations',
            {
                name: name,
                placeId: placeId
            },
            {headers: {
                'Content-Type': 'application/json'
            }}
            )
        return res.data
    }catch(err){
        console.error(err)
    }
}

export const deleteDataCompanies = async (id) => {
    try{
        const res = await axios.delete(
            `https://api-fake-pilar-tecno.herokuapp.com/organizations/${id}`
        )
        return res.data

    }catch(err){
        console.error(err)
    }
}