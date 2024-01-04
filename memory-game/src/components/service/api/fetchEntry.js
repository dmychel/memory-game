export const fetchEntry = async (entry) => {
    const BASE_URL =
        "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";
    const res = await fetch(
        `${BASE_URL}/${Math.floor(Math.random() * entry)}`
    );
    const data = await res.json();
    const url = await data.data
    return url
}