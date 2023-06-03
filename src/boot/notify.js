import { Notify } from 'quasar'
import Vue from 'vue'

const notifySuccess = (msg = 'Sucesso!', icon = 'check', out = '2000') =>
  Notify.create({
    message: msg,
    icon: icon,
    type: 'positive',
    timeout: out
  })

const notifyError = (msg = 'Ocorreu um Erro!', icon = 'announcement', out = '2000') =>
  Notify.create({
    message: msg,
    icon: icon,
    type: 'negative',
    timeout: out
  })

const notifyCancel = (msg = 'Atualização cancelada', icon = 'block', out = '1000') =>
  Notify.create({
    message: msg,
    type: 'warning',
    icon: icon,
    timeout: out
  })

Vue.prototype.$notifySuccess = notifySuccess
Vue.prototype.$notifyError = notifyError
Vue.prototype.$notifyCancel = notifyCancel
