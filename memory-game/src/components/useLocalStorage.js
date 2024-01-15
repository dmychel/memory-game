export const useLocalStorage = (key) => {
  const setData = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const getData = () => {
    try {
      const data = window.localStorage.getItem(key);
      return data ? JSON.parse(data) : 0;
    } catch (err) {
      console.log(err);
    }
  };
  return { setData, getData };
};
