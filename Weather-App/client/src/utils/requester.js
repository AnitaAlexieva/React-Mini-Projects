export async function requester (url, method, data = {}){
    const options = {
        method:method,
        headers:{
            "Content-Type":"application/json"
        }
        
    }
    
    if(data && method !== 'GET'){
        options.body = JSON.stringify(data)
    }
    
    const response = await fetch(url, options)
    const result = await response.json();
    return result;
}