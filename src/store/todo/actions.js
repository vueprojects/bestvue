import reqData from '../../models/test/reqData'

/**
 * 获取活动列表
 * @param commit
 */
export const fetchLists = ({commit}, obj) => {
  let [_obj] = [obj.api]
  reqData
    .req(_obj)
    .then(function (res) {
      let data = JSON.parse(res.data)
      let [lists, errCode, msg] = [data.data.list, data.code, data.msg]
      if (errCode === '200') {
        commit('addList', lists)
      } else {
        let errorObj = {
          msg,
          show: true
        }
        commit('showAlert', errorObj)
      }
    })
    .catch(function (res) {
      console.log(res)
    })
}

/**
 * 获取详情
 * @param commit
 */
export const fetchActivityDetail = ({commit}, obj) => {
  let [_obj] = [obj.api]
  console.log(_obj)
  reqData
    .req(_obj)
    .then(function (res) {
      let data = JSON.parse(res.data)
      let [detail, errCode, msg] = [data.data.detail, data.code, data.msg]
      if (errCode === '200') {
        commit('addActivityDetail', detail)
      } else {
        let errorObj = {
          msg,
          show: true
        }
        commit('showAlert', errorObj)
      }
    })
    .catch(function (res) {
      console.log(res)
    })
}
