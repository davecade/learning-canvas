require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

let refreshTokens = [];

app.post("/token", (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.name }); // we pass only the name because the user has some additional info we dont need
        return res.json({ accessToken });
    });
});

app.delete("/logout", (req, res) => {
    refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
    return res.sendStatus(204);
});

app.post("/login", (req, res) => {
    // Authentication logic here
    // Assume authenticated - we will focus on jwt

    const username = req.body.username;
    const user = { name: username };

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    return res.json({ accessToken, refreshToken });
});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30s",
    });
}

app.listen(4000, () => {
    console.log(`authServer running on ${4000}`);
});
