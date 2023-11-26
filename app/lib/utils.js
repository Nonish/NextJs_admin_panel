import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.DATABASE);
    connection.isConnected = db.connections[0].readyState;
    // console.log("DB=>>", db);
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};

//debounce for search optimization
export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}