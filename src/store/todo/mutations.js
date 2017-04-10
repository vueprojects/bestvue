export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
  lists: [],
  detail: {},
  showErrorAlert: {
    msg: '',
    show: false
  },

  // 注册相关
  countDown: {
    downState: '',
    time: 10
  }
}

export const mutations = {
  addTodo (state, {text}) {
    state.todos.push({
      text,
      done: false
    })
  },

  deleteTodo (state, {todo}) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  toggleTodo (state, {todo}) {
    todo.done = !todo.done
  },

  editTodo (state, {todo, value}) {
    todo.text = value
  },

  toggleAll (state, {done}) {
    state.todos.forEach(todo => {
      todo.done = done
    })
  },

  clearCompleted (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  },

  addList (state, lists) {
    lists.forEach(item => state.lists.push(item))
  },

  clearList (state) {
    state.lists = []
  },

  addActivityDetail (state, detail) {
    console.log(detail)
    state.detail = detail
  },

  showAlert (state, {show, msg, title}) {
    let errorObj = [...arguments]
    state.showErrorAlert = errorObj[1]
  },

  // 倒计时
  timesSave (state, {times}) {
    // console.log("times------" + times)
    state.countDown.time = times
  },

  timesSub (state) {
    state.countDown.time = --state.countDown.time
  },

  clearTime (state) {
    clearInterval(state.countDown.downState)
  }
}
