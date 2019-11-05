const renderContent = state => {
  const { activePage } = state;
  const pageMappers = {
    home: renderHomePage,
    checkout: renderCheckoutPage,
    detail: renderDetailPage,
    login: renderLoginPage,
    register: renderRegisterPage
  };
  return pageMappers[activePage](state);
};
