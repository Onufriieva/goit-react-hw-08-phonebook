export const getContacts = state => state.contacts;
export const getItems = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;
export const getUserName = state => state.auth.user.name;
export const getIsLogin = state => state.auth.isLogin;
export const getUser = state => state.auth.user;

