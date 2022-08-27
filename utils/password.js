import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export async function encrypt(rawPassword) {
  return await bcrypt.hash(rawPassword, 12);
}

export async function passwordsMatch(rawPassword, userLogin) {
  const encPassword = (await User.findOne({ login: userLogin })).password;
  return await bcrypt.compare(rawPassword, encPassword);
}
