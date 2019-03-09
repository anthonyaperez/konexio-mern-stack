import dotenv from 'dotenv';
import path from 'path';

if(process.env.NODE_ENV != 'production'){
  dotenv.config({ path: path.resolve(__dirname, '.env') });
}

module.exports = {
  jwt_secret: 'robertcrown',
  mongoose: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/mern-stack'
  },
}