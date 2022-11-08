export const getContacts = state => state.contacts;
export const getItems = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getIsLoged = state => state.auth.isLoged;
export const getUser = state => state.auth.user;
export const getIsRefreshing = state => state.auth.isRefreshing;

