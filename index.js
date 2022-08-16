const axios = require("axios")

let accid = ''
let device = ''
let secret = ''

axios({
            method: 'post',
            url: 'https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic MzQ0NmNkNzI2OTRjNGE0NDg1ZDgxYjc3YWRiYjIxNDE6OTIwOWQ0YTVlMjVhNDU3ZmI5YjA3NDg5ZDMxM2I0MWE=',
            },
            data: `grant_type=device_auth&account_id=${accid}&device_id=${device}&secret=${secret}`
        }).then(function(response) {
  console.log(response.data)
  axios({
            method: 'get',
            url: 'https://account-public-service-prod.ol.epicgames.com/account/api/oauth/exchange',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${response.data.access_token}`,
            },
        }).then(function(responsee) {
  console.log(responsee.data)
  })
})
