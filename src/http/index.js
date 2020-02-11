import API from './constants';

export const fetchListSurvivors = async () => {
  try {
    const { data } = await API.get('survivors');
    return data;
  } catch (error) {
    return error;
  }
};

export const addSurvivor = async survivor => {
  try {
    return await API.post('survivors', survivor);
  } catch (error) {
    return error;
  }
};
