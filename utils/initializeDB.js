import User from "../models/user.model.js";
import Category from "../models/category.model.js";
import Currency from "../models/currency.model.js";
import { encrypt } from "../utils/password.js";

export default async function () {
  await User.deleteMany();

  await User.create({
    login: "materuilist",
    password: await encrypt("borow123"),
  });

  await Category.create([
    {
      name: "Bills",
    },
    {
      name: "Car",
    },
    {
      name: "Clothes",
    },
    {
      name: "Communications",
    },
    {
      name: "Eating out",
    },
    {
      name: "Entertainment",
    },
    {
      name: "Food",
    },
    {
      name: "Gifts",
    },
    {
      name: "Health",
    },
    {
      name: "House",
    },
    {
      name: "Pets",
    },
    {
      name: "Sports",
    },
    {
      name: "Taxi",
    },
    {
      name: "Toiletry",
    },
    {
      name: "Transport",
    },
  ]);

  await Currency.create([
    {
      name: "Dollar",
      symbol: "$",
    },
    {
      name: "Dram",
      symbol: "֏",
    },
    {
      name: "Ruble",
      symbol: "₽",
    },
  ]);
}
