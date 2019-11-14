const renderDetailPage = state => {
  return `
        ${renderSubHeader(state)}
        ${renderProductDetail(state)}
        ${renderRelatedProduct(state)}
    `;
};
