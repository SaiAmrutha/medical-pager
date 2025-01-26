// every single controller has res and reg functions
// reg contains the information what we are sending for the frontend

const signup = (reg, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const login = () => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = [signup, login];
