// utils/request.js

import axios from 'axios'

const api = {
  //疫情每日新增数据
  getNocv(params) {
    return axios.get('http://api.tianapi.com//ncov/index', {
      params,
    })
  },
  //中国所有省市疫情数据
  getNocvCity() {
    return axios.get('http://iwenwiki.com/wapicovid19/all.php')
  },
  //单个省市的疫情数据
  getNocvSingleCity(params) {
    return axios.get('http://iwenwiki.com/wapicovid19/guonei.php', {
      params,
    })
  },
  //世界各国疫情数据
  getNocvWorld(params) {
    return axios.get('http://api.tianapi.com/ncovabroad/index', {
      params,
    })
  },
  //疫情出行政策各个城市ID数据
  getTravelPolicy(params) {
    return axios.get('/api/springTravel/citys', {
      params,
    })
  },
  //具体行政策数据
  getPolicyDtail(params) {
    return axios.get('/api/springTravel/query', {
      params,
    })
  },
}

export default api