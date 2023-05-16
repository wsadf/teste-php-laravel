import { api } from 'boot/axios'

export default {
    crudPost: data => api.post('resetPassword', data),
    // creditCardDelete: id => api.delete(`credit-card/${id}`),
    // creditCardList: () => api.get('credit-card'),
    // creditCardMain: id => api.put(`credit-card/main/${id}`),
    // creditCardSave: data => api.post('credit-card', data),
    // resetPassword: data => api.post('resetPassword', data),
    // userAffiliate: () => api.get('user/affiliate'),
    // userMenu: () => api.get('getAsideMenu'),
    // userData: () => api.get('user'),
    // userDataChange: data => api.put('user', data),
  };