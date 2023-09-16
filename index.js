const axios = require("axios");

const accountId = '';
const deviceId = '';
const secret = '';

async function main() {

    const response = await axios({
        method: 'post',
        url: 'https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic MzQ0NmNkNzI2OTRjNGE0NDg1ZDgxYjc3YWRiYjIxNDE6OTIwOWQ0YTVlMjVhNDU3ZmI5YjA3NDg5ZDMxM2I0MWE=',
        },
        data: `grant_type=device_auth&account_id=${accountId}&device_id=${deviceId}&secret=${secret}`
    }).catch(error => { 
        throw 'Authentication Failed'
    });

    console.log(response.data);

    // const response1 = await axios({
    //     method: 'get', 
    //     url: 'https://account-public-service-prod.ol.epicgames.com/account/api/oauth/exchange',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         Authorization: `Bearer ${response.data.access_token}`
    //     }
   //});

    //console.log(response1.data);
};

main().catch(error => console.error(error));
