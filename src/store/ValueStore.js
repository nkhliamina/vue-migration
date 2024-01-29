import { defineStore } from 'pinia'

export const useValueStore = defineStore('ValueStore', {
  state: () => {
    return {
      value: 'myvalue'
    }
  },
  getters: {
    getterValue: state => {
      return state.value
    }
  },
  actions: {
    updateActionValue() {
      this.value = 'my new value'
    }
  }
})