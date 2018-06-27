const fs = require('fs')
let alllinks;

function parseQueryStr(str) {
    let queryStr = str.split('?')[1]
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log(queryStrList)
    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=')
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    }
    return queryData
}

// 读取文件
function readfile(_filename, _jsonData) {
    return new Promise((resolve, reject) => {
        fs.readFile(_filename, (err, res) => {
            if (err) {
                console.error(err)
                return false
            }
            let json = { "url": _jsonData.url, "name": _jsonData.name }
            let newStr = JSON.stringify(json)
            console.log(newStr)
            let tempStr = res.toString().split(']')[0] + ',\n' + newStr + ']';// console.log('temp-1->', tempStr)
            if (!!tempStr) {
                resolve(tempStr)
            } else {
                reject(-1)
            }
        })
    })

}
// 写入文件
function writeFile(_filename, _data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(_filename, _data, (err, data) => {
            if (err) {
                console.log('写入文件失败');
                reject(-1)
            } else {
                // console.log(data);
                console.log('改变data.js成功');
                resolve(1)
            }
        })

    })
}

function a(_fun,_filename){
    fs.readFile(_filename, (err, res) => {
        if (err) {
            console.error(err)
            return false
        }
        _fun(res.toString())
        
    })
}
function f(_r){
    console.log("r------->",_r)
    return _r
}
module.exports = {
    userLogin() {
        console.log('userlogin')
        return '666666登录成功了。'
    },
    getLinks() {
        console.log('getLinks')
        // alllinks = require('./data.json');
        // console.log(alllinks)
        let tempstr=fs.readFileSync('./data.json')
        return tempstr
    },
    addLink(ctx, next) {
        console.log('addLink 添加一个链接')
        let pastData = parseQueryStr(ctx.url);
        console.log('pastData--->', pastData);

        if (pastData.s != 'der') {
            return -1
        };

        readfile('./data.json', pastData).then((datastr) => {
            // console.log("75--->",datastr)
            return writeFile('./data.json', datastr)
        }).then((data) => {
            console.log("data--->",data)
            // this.getLinks()
            return 666
        })
    }
}