import {
  mapGridImage,
  mapGridText,
  mapSectionContent,
  mapSectionGrid,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section, if ther is no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
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
      _id: '602fdf2d540c00269e056172',
      title: 'January brings us Firefox 85',
      description: 'I love spaguetti.',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617f',
        section_id: 'home',
        name: 'Home',
        __v: 0,
        id: '602fdf2d540c00269e05617f',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'People holding drawings with Logos',
        caption: 'People holding drawings with Logos',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056172',
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
      _id: '602fdf2d540c00269e056173',
      title: 'news coverage and some surprises',
      content: '<p>Hello World</p>',
      metadata: {
        background: false,
        _id: '602fdf2d540c00269e05617a',
        name: 'intro',
        section_id: 'intro',
        __v: 0,
        id: '602fdf2d540c00269e05617a',
      },
      __v: 1,
      id: '602fdf2d540c00269e056173',
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
    expect(data.textGrid).toEqual([]);
  });

  it('should map section text grid with values', () => {
    const data = mapGridText({
      __component: 'section.grid-text',
      _id: '602fdf2d540c00269e056174',
      description: 'My description',
      title: 'My Grid',
      text_grid: [
        {
          _id: '602fdf2d540c00269e05617c',
          title: 'Teste 1',
          description: 'my grid description',
          __v: 0,
          id: '602fdf2d540c00269e05617c',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        _id: '602fdf2e540c00269e056199',
        name: 'grid-one',
        section_id: 'grid-one',
        __v: 0,
        id: '602fdf2e540c00269e056199',
      },
      __v: 2,
      id: '602fdf2d540c00269e056174',
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
    expect(data.imageGrid).toEqual([]);
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
          _id: '602fdf2d540c00269e056183',
          __v: 0,
          image: {
            alternativeText: 'Something',
            url: 'a.jpg',
            provider_metadata: {
              public_id: '360x360_r_1_6a2049d13a',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                hash: 'thumbnail_360x360_r_1_6a2049d13a',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 6.48,
                path: null,
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_6a2049d13a.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_1_6a2049d13a',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['602fdf2d540c00269e056183'],
            createdAt: '2021-02-19T15:50:15.686Z',
            updatedAt: '2021-02-19T15:54:21.862Z',
            __v: 0,
            id: '602fde37540c00269e05616b',
          },
          id: '602fdf2d540c00269e056183',
        },
      ],
      metadata: {
        background: false,
        _id: '602fdf2e540c00269e0561a4',
        name: 'gallery',
        section_id: 'gallery',
        __v: 0,
        id: '602fdf2e540c00269e0561a4',
      },
      __v: 2,
      id: '602fdf2d540c00269e056175',
    });
    expect(data.component).toBe('section.grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('image grid.');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.imageGrid[0].srcImg).toBe('a.jpg');
    expect(data.imageGrid[0].altText).toBe('Something');
    // expect(data.imageGrid[0][1]).toBe('a.jpg');
  });
});
