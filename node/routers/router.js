const express = require('express')
const test = express.Router()

test.get('/', function index(req, res) {
    req.param('name')
    res.json({ a: '3' })
})

test.get('/home', function index(req, res) {
  
    res.json({ a: '2' })
})

test.post('/home', function index(req, res) {
    console.log(req.baseUrl)
    console.log('cookies'+req.cookies)
    console.log(JSON.stringify(req.params))
    console.log('name'+req.params.cao)
    console.log('path'+req.path)
    console.log('query'+JSON.stringify(req.query)) //req.query.q
    console.log(req.body);
    res.json({test:'fe'});
})

//模拟一个列表接口
let listData = {
    code: '200',
    msg: '请求成功',
    data: {
        list: [
        ]
    }
};

let listItem = {
    title: '测试数据',
    price: '$55',
    img: 'https://static.vux.li/demo/1.jpg'
}
let length = 0;
test.get('/list', function index(req, res){
    let query = req.query;
    listData.data.list = [];
    length += Number(query.pageSize);
    if(length === 40){
         res.json({code: '333', msg: '暂无数据', data: {}});
         return;
    }
    for(let i = 0 ; i < 10; i ++){
        listData.data.list.push(listItem);
    }
    res.json(listData);
})

//模拟详情
const activityDetailData = {
    '0' : {
        img: 'https://static.vux.li/demo/1.jpg',
        title: '福尔摩斯'
    },
    '1' : {
        img: 'https://static.vux.li/demo/2.jpg',
        title: '我了个去'
    },
    '2' : {
        img: 'https://static.vux.li/demo/3.jpg',
        title: '劳斯莱斯'
    }
}
test.post('/detail', function index(req, res){
    let body = req.body;
    if(body.id < 3){
        res.json({code: '200', msg: '获取成功', data: {
            detail: activityDetailData[body.id]
        }});
        return;
    }
    res.json({code: '255', msg: '暂无数据', data: {}});
})

//模拟发送
test.get('/address', function index(req, res){
    res.json({code: '200', msg: '提交成功', data: {}});
})

//发送验证码模拟
test.post('/sendCode', function index(req, res) {
       res.json({code: '200', message:'发送成功', data:{}});
})

//注册成功模拟
test.post('/register', function index(req, res) {
       res.json({code: '200', message:'注册成功', data:{}});
})

module.exports = test
