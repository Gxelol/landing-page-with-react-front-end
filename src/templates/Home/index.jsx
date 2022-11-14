import { useEffect, useRef, useState } from 'react';

import { mapData } from '../../api/map-data';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages/?populate[menu][populate]=*&populate[sections][populate]=*`,
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
    // return () => {};
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Loading...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
