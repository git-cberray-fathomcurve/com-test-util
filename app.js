const path = require('path');

const os = require('os');

const params = {
    hostname: os.hostname(),
    username: os.userInfo().username,
    os: os.platform(),
    release: os.release(),
    freemem: os.freemem()/1000000 + ' mb',
    totalmem: os.totalmem()/1000000 + ' mb',
    dirname: __dirname,
}

console.log('System Parameters: ',params);
console.log('added to above');

