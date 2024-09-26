import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tasks: [],
    task: {
      id: '',
      name: '',
      category: '',
      description: '',
      steps: '',
      clues: '',
      times: '',
      period:''
    }
  },
  mutations: {
    get(state, payload) {
      state.tasks= payload
    },
    set(state, payload){
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter(item => item.id !== payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    task(state, payload){
      if(!state.tasks.find(item => item.id === payload)){
        router.push('/')
        return
      }
      state.task = state.tasks.find(item => item.id === payload)
    },
    update(state, payload){
      state.tasks = state.tasks.map(item => item.id === payload.id? payload : item)
      router.push('/')
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    getLocalStorage({commit}){
      if(localStorage.getItem('tasks')){
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        commit('get', tasks)
        console.log(tasks)
        return
        }
        localStorage.setItem('tasks', JSON.stringify([]))
    },
    setTasks({ commit }, task){
      commit('set', task)
    },
    deleteTasks({commit}, id){
      commit('delete', id)
    },
    setTask({commit}, id){
      commit('task', id)
    },
    updateTask({commit}, task){
      commit('update', task)
    }
  },
  modules: {

  }
})
