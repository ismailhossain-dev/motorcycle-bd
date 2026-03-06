"use server";
// All Register work
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
//postUser ta Register user korsi er value gola ekane payload hisabe pabe
export const postUser = async (payload) => {
  //payload ta asbe register form hit korle
  //   console.log(payload);

  //hasPassword convert
  const hashPassword = await bcrypt.hash(payload.password, 10);

  const newUser = {
    ...payload,
    createAt: new Date().toISOString(),
    role: "user",
    password: hashPassword,
  };

  // console.log(newUser);

  const result = await dbConnect("users").insertOne(newUser);
  console.log(result);
  if (result.acknowledged) {
    return {
      success: true,
      message: `user create with ${result.insertedId.toString()}`,
    };
  }
  //server takle else cholbe
  else {
    return {
      success: false,
      message: "Something went long, try again",
    };
  }
};
