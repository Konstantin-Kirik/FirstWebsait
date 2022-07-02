    // работа с сервером (async говорит что будет ассинхронный код)
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' //charset=utf-8
            },
            body: data
        });
    
        return await res.json();
    };

    async function getResource(url) {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    export {postData};
    export {getResource};