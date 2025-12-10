require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/Post');
const connectDB = require('./config/db');
 
connectDB();

const importData = async () => {
  try {
    await Post.deleteMany();

    const posts = [
      {
        title: 'First Post',
        content: 'This is the content of the first post.',
        author: 'Admin',
      },
      {
        title: 'Second Post',
        content: 'This is the content of the second post.',
        author: 'User',
      },
      {
        title: 'Third Post',
        content: 'This is the content of the third post.',
        author: 'Guest',
      },
    ];

    await Post.insertMany(posts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Post.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
