import User from "../models/user.model.js";
import { encrypt } from "../utils/password.js";

export default async function () {
  await User.deleteMany();

  await User.create({
    login: "materuilist",
    password: await encrypt("borow123"),
  });
}
