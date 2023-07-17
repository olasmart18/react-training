// import User from '../model/user.js';
// login success page
export const successPage = async (req, res) => {
    try {
          return  res.status(200).json({
            message: 'successful login',
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

// login page
export const loginPage = async (req, res) => {
    try {
        res.status(200).json({
            message: 'login here'
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

// resgister page
export const registerPage = async (req, res) => {
    try {
        res.status(200).json({
            message: 'register here'
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}