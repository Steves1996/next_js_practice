/**Controller */

import Users from "../model/user"

/**
 * Get all users
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export async function getUsers(req, res) {
    try {
        const users = await Users.find({})
        if (!users) return res.status(404).json({ error: "Data not found" })
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data" })
    }
}

/**
 * Get one user
 * @param {*} req 
 * @param {*} res 
 */
export async function getUser(req, res) {
    try {
        const { userId } = req.query;

        if (userId) {
            const user = await Users.findById(userId);
            res.status(200).json(user)
        }
        res.status(404).json({ error: "User not selected" })
    } catch (error) {
        res.status(404).json({ error: "Cannot get the user" })
    }
}

/**
 * Create user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export async function postUser(req, res) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: "Form data not Provided" })
        Users.create(formData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ error })
    }
}

/**
 * Update user
 * @param {*} req 
 * @param {*} res 
 */
export async function putUser(req, res) {
    try {
        const { userId } = req.query;
        const formData = req.body;

        if (userId && formData) {
            await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(formData)
        }
        res.status(404).json({ error: "User not selected" })
    } catch (error) {
        res.status(404).json({ error: "Error while updating the data" })
    }
}


export async function deleteUser(req, res) {

    try {
        const { userId } = req.query;

        if (userId) {
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json({ deleted: userId })
        }

        res.status(404).json({ error: "User not selected" })
    } catch (error) {
        res.status(404).json({ error: "Error while deleting thez user" })
    }

}