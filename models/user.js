const mongoose = requier('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type :string,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique:1
  }
  password: {
    type: string,
    minlenght :5
  },
  role : {
    type :Number,
    defualt::0
  }
  image : string,
  token:{
    type :string
  },
  tokenExp: {
    tpye: number
  }
})

const User = mongoose.mode('User', UserSchema)

module.exports = {User}