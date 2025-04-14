export async function requester (url, method, data = {}){
    if(!data){
        const response = await fetch(url, {
            method:method,
            headers:{
                "Content-Type":"applicatoin/json"
            }
            
        })

        const result = await response.json();
        return result;

    }
    if(data){
        const response = await fetch(url, {
            method:method,
            headers:{
                "Content-Type":"application/json",
            },
            data: JSON.stringify(data)
        })
        const result = await response.json();
        return result;
    }

}