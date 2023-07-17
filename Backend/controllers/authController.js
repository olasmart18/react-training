import bcrypt from "bcrypt";
import User from "../model/user.js";

//register user
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // const { buffer, mimeType } = req.file;
    await User.findOne({ email: email }).then(async (user) => {
      if (user)
        return res.json({
          status: 404,
          message: "user with this email already exist, please login",
        });
      // hash user password
      const saltRound = 10;
      const salt = bcrypt.genSaltSync(saltRound);
      const hash = bcrypt.hashSync(password, salt);
      const newReg = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash
      })
      await newReg.save();
      res.status(200).json({
        message: "successful",
        data: newReg,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    await User.findOne({ email: email })
    .then((user) => {
      if(!user) {
        res.status(404).json({ message: 'not a user, please register'});
      return;
      }
      // user is find, then check password matches
      const pwdMatch = bcrypt.compareSync(password, user.password);
      if (!pwdMatch) return res.status(404).json({
        message: 'username or password is incorrect'
      })
     return res.redirect('/user/success')
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}
