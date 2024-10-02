const express = require("express");
const userService = require("../services/userService");
const verifyInitData = require("../auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const id = req.session.userId;

  const { username, cointrust } = await userService.getTikTok(id);
  if (username) {
    return res.render("play", { username, cointrust });
  } else {
    return res.render("instructions");
  }
});

router.post("/", async (req, res) => {
  const telegramData = req.body;
  const { usernameTg, id, language_code } = verifyInitData(
    telegramData.initData
  );
  const user = await userService.getUser(id)
  
  if (!user) {
    await userService.createUser({
      _id: id,
      tgName: usernameTg,
      language_code: language_code,
    });
    req.session.buttonDisabled = true;
    req.session.userId = id;
    req.session.usernameTg = usernameTg;
    req.session.language_code = language_code;
    return res.send("success")
  } 
  req.session.userId = id  
  return res.send("success2")
 
});

module.exports = router;
