VK.init({
    apiId: 7275235
});

function auth() {
    return new Promise((resolve, reject) => {
        VK.Auth.login(data => {
            if (data.session) {
                resolve();
            } else {
                reject(new Error('Authorisation failed'));    
            }
        }, 2);
    });
}

function callAPI(method, params) {
    params.v = '5.103';

    return new Promise((resolve, reject) => {
        VK.api(method, params, (data) => {
            if (data.error) {
                reject(data.error);
            } else {
                resolve(data.response);
            }
        });
    })
}

auth()
    .then(() => console.log('Ok'))
    .then(() => {
        return callAPI('wall.get', { owner_id: '-60854067', count: '20', offset: '100', extended: '1', fields: 'photo_200'});
    })
    .then(wall => {
        console.log(wall);       
    })
