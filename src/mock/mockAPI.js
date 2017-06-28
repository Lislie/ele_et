import apiData from './data.json'
import Mock from 'mockjs'  //npm install mockjs --save
Mock.mock('/api2/seller', {errno:0, data:apiData.seller})
Mock.mock('/api2/goods', {errno:0, data:apiData.goods})
Mock.mock('/api2/ratings', {errno:0, data:apiData.ratings})
