import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import fakeData from './data.json';

describe('map-sections', () => {
  it('should render predefined section, if ther is no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(fakeData.data[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should render sections with incorrect/invalid data', () => {
    const noTextOrImage = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const noComponent = mapSections([{}]);
    expect(noTextOrImage).toEqual([{ __component: 'section.section-grid' }]);
    expect(noComponent).toEqual([{}]);
  });

  it('should test section-grid with no text or image', () => {
    const noTextOrImage = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [
          {
            image: {
              data: [{}],
            },
          },
        ],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(noTextOrImage.length).toBe(2);
  });

  it('should map section two columns with no values', () => {
    const data = mapSectionTwoColumns();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'January brings us Firefox 85',
      description: 'I love spaguetti.',
      metadata: {
        background: true,
        section_id: 'home',
        name: 'Home',
      },
      image: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('January brings us Firefox 85');
    expect(data.text).toBe('I love spaguetti.');
    expect(data.srcImg).toBe('a.svg');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
  });

  it('should map section content with no values', () => {
    const data = mapSectionContent();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.grid-text',
      title: 'news coverage and some surprises',
      content: '<p>Hello World</p>',
      metadata: {
        background: false,
        name: 'intro',
        section_id: 'intro',
      },
    });
    expect(data.component).toBe('section.grid-text');
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.html).toBe('<p>Hello World</p>');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  url: 'a.svg',
                  alternativeText: 'abc',
                },
              },
            ],
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
  });
});
