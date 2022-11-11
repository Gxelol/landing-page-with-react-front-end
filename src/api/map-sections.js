import { Grid3x3 } from '@styled-icons/material-outlined';

export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.lenght > 0) {
        return mapGridText(section);
      }

      if (image_grid.lenght > 0) {
        return mapGridImage(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapGridText = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: textGrid = [],
  } = section;

  return {
    component: 'section.grid-text',
    title,
    description,
    background,
    sectionId,
    textGrid: textGrid.map((txt) => {
      const { title = '', description = '' } = txt;

      return {
        title,
        description,
      };
    }),
  };
};

export const mapGridImage = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: imageGrid = [],
  } = section;

  return {
    component: 'section.grid-image',
    title,
    description,
    background,
    sectionId,
    imageGrid: imageGrid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;

      return {
        srcImg,
        altText,
      };
    }),
  };
};
