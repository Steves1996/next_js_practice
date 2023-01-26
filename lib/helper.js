const BASE_URL = "http://localhost:3000/api/";

/**
 * get all user
 * @returns 
 */
export const getUsers= async()=>{
    const response = await fetch(`${BASE_URL}users`);
    const json = await response.json();

    return json;
}

/**
 * get one user
 * @param {*} userId 
 * @returns 
 */
export const getUser = async(userId) =>{
    const response = await fetch(`${BASE_URL}users/${userId}`);
    const json = await response.json()

    if(json) return json;
    return {}
}

/**
 * add new user
 * @param {*} formData 
 * @returns 
 */
export async function addUser(formData){
    try {
        const Options = {
            method: 'POST',
            headers:{'Content-type':"application/json"},
            body:JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}users`, Options)
        const json = await response.json()

        return json;
    } catch (error) {
        return error;
    }
}

/**
 * update user
 * @param {*} userId 
 * @param {*} formData 
 * @returns 
 */
export async function updateUser(userId, formData){
    try {
        const Options = {
            method: 'PUT',
            headers:{'Content-type':"application/json"},
            body:JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}users/${userId}`, Options)
        const json = await response.json()

        return json;
    } catch (error) {
        return error;
    }
}

/**
 * Delete user
 * @param {*} userId 
 * @returns 
 */
export async function deleteUser(userId){
    try {
        const Options = {
            method: 'DELETE',
            headers:{'Content-type':"application/json"}
        }
        const response = await fetch(`${BASE_URL}users/${userId}`, Options)
        const json = await response.json()

        return json;
    } catch (error) {
        return error;
    }
}