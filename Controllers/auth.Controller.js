const db = require("../models/index");
const bcrypt = require("bcrypt.js")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await db.User.findOne({
            where: { email },
        });

        if (userExists) {
            return res
                .status(400)
                .json({ error: "Email is already associated with an account" });

            const hashedPassword = await bcrypt.hash(password, 10)

            await db.User.create({
                name,
                email,
                password: hashedPassword,
            });

            
            return res.status(200).json({ message: "Registration successful" });
        } 

    } catch (error) {
        console.error("Error in registering user:", error);
        return res.status(500).json({ error: "Error in registering user" });
    }


}