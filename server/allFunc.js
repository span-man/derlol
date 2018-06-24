const fs = require('fs')
let alllinks = require('./data.js');
module.exports = {
    userLogin() {
        console.log('userlogin')
        return '666666登录成功了。'
    },
    getLinks() {
        console.log('getLinks')
        console.log(alllinks)
        alllinks.push(123)
        return alllinks
    },
    addLink(){
        console.log('addLink 添加一个链接')
    }
}