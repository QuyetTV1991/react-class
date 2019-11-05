const renderHomePage = state => {
  return `
    <main class="main mx-auto row py-5 my-5">
            ${renderSection(state)}
            ${renderAside(state)}
        </main>
    `;
};
