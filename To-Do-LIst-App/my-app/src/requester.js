
export async function request(baseUrl, method, data){
    if(method !== "GET"){
        const response = await fetch(baseUrl, {
            method,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data),
        })
        const result = response.json();
        return result;
    }
    
    const response = await fetch(baseUrl, {
        method,
        headers:{
            "Content-Type": "application/json"
        }
    })

    const result= response.json();
    return result;
}