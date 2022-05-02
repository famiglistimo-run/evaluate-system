import axios from 'axios';

axios.defaults.withCredentials=true;

function Method() {
  this.userInfo = JSON.parse(
    window.sessionStorage.getItem("today.userInfo.DATA")
  );
}
// GET请求
Method.prototype.get = function (url, token) {
  return new Promise((resolve, reject) => {
    // { headers: { Authorization: token ? token : this.userInfo.token }
    axios.get(url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
// POST请求
Method.prototype.post = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
// POST请求-'Content-Type': 'application/x-www-form-urlencoded'
Method.prototype.postType = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
// DELETE请求
Method.prototype.delete = function (url, token) {
  return new Promise((resolve, reject) => {
    // { headers: { Authorization: token ? token : this.userInfo.token }
    axios.delete(url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
// PUT请求
Method.prototype.put = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// PUT请求-'Content-Type': 'application/x-www-form-urlencoded'
Method.prototype.putType = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.put(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 时间戳转换成时间
Method.prototype.formatDate = function (value, type) {
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  let m = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  let s = date.getSeconds();
  s = s < 10 ? "0" + s : s;
  if (type) {
    return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
  } else {
    return y + "-" + MM + "-" + d;
  }
}

Method.prototype.translate = function (data) {
  let url = '';
  for (let i in data) {
    url += "&" + i + "=" + data[i]
  }
  url = '?' + url.substring(1, url.length)
  return url
}
Method.prototype.removeNull = function (obj) {
  Object.keys(obj).forEach(item => {
    if (!obj[item]) delete obj[item]
  })
  return obj;
}
// 获取当天是星期几
Method.prototype.getWeek = function (date) {
  let dt2 = new Date(date);
  var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  if (weekDay.indexOf(weekDay[dt2.getDay()]) > -1) {
    return weekDay[dt2.getDay()]
  }
  return ''
}

let method = new Method()
export default method
