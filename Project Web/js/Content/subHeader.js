const renderSubHeader = state => {
    const { activePage } = state;
    let subHeaderMapper = {
        checkout: 'Shopping Cart',
        detail: 'Detail Product',
        login: 'Login',
        register: 'Register'
    }
    return `
    <div class="sub-header margin-bot-150px">
        <h1 class="text-center font-weight-bold fz-48px pb-5">${subHeaderMapper[activePage]}</h1>
        <div class="navbar navbar-expand d-flex justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item px-4 border-right-dark"><a class="text-dark font-weight-bold nav-item-link" data-page="home">HOME</a></li>
            <li class="nav-item px-4">
              <a class="text-muted disable-link">${subHeaderMapper[activePage].toUpperCase()}</a>
            </li>
          </ul>
        </div>
    </div>
    `
}