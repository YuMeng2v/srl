var url = 'https://api.quicboar.boatonland.com/user/login.php';
fetch(url
    ,{
        method:'post',
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(`
        user_uid=1&user_name=2&user_password=123
            `)
    }).then(response=>{
        return response.json();
    }).then(x=>{
        console.log(x);
})