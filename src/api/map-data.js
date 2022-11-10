export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml,
      title,
      slug,
      sections,
      menu,
    };
  });
};
