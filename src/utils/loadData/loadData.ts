import { PageData } from "../type"
import page1Data from '../../data/CONTENTLISTINGPAGE-PAGE1.json';
import page2Data from '../../data/CONTENTLISTINGPAGE-PAGE2.json';
import page3Data from '../../data/CONTENTLISTINGPAGE-PAGE3.json';

const loadData = async (page: number) => {
  const dataMapping: { [key: number]: any } = {
    1: page1Data,
    2: page2Data,
    3: page3Data,
  };
  const filePath = dataMapping[page];
  if (!filePath) {
    return { page: { 'content-items': { content: [] } } };
  }
  return filePath;
};

export const fetchData = async (page: number): Promise<PageData> => {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(loadData(page));
      }, 2000); // 2 second delay for demonstration
    });
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};