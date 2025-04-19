
export const requester = async(URL, method) =>{
    const response = await fetch(URL, {
        method:method,
        headers:{
            'Content-Type':'application/json'
        }
        })
    const result = await response.json();
    return result;
}