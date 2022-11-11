import {
  mapGridImage,
  mapGridText,
  mapSectionContent,
  mapSectionGrid,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

import fakeData from './data.json';

describe('map-sections', () => {
  it('should render predefined section, if ther is no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(fakeData[0].sections);
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

  it('should test section grid with no image or text', () => {
    const noTextOrImage = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
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
        name: 'javascript.svg',
        alternativeText: 'People holding drawings with Logos',
        url: 'a.svg',
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

  it('should map section text grid with no values', () => {
    const data = mapGridText();
    expect(data.component).toBe('section.grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section text grid with values', () => {
    const data = mapGridText({
      __component: 'section.grid-text',
      description: 'My description',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'my grid description',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    });
    expect(data.component).toBe('section.grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('My description');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.textGrid[0].title).toBe(`Teste 1`);
    expect(data.textGrid[0].description).toBe(`my grid description`);
  });

  it('should map section image grid with no values', () => {
    const data = mapGridImage();
    expect(data.component).toBe('section.grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section image grid with values', () => {
    const data = mapGridImage({
      __component: 'section.grid-image',
      _id: '602fdf2d540c00269e056175',
      description: 'image grid.',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'Something',
            url: 'a.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(data.component).toBe('section.grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('image grid.');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.imageGrid[0].srcImg).toBe('a.jpg');
    expect(data.imageGrid[0].altText).toBe('Something');
  });
});
