export const fetchEntry = async (entry) => {
  const BASE_URL =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";
  try {
    const res = await fetch(`${BASE_URL}/${Math.floor(Math.random() * entry)}`);
    const data = await res.json();
    const url = await data.data;
    return url
  } catch (err) {
    console.log(err)
    alert('Please Refresh the page and try again.')
  }
};
