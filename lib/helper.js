
const BASE_URL = "http://localhost:3000/api/";

export const getUser= async()=>{
    const response = await fetch(`${BASE_URL}users`);
    const json = await response.json();

    return json;
}