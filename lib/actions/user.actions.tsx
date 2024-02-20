//"use server";

//import { revalidatePath } from 'next/cache'

import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";

//import { handleError } from '@/lib/utils'
import { CreateUserParams, UpdateUserParams } from "../types";

//import { CreateUserParams, UpdateUserParams } from './types'

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();
    alert("A");
    const newUser = await User.create(user);
    alert("B");
    alert(JSON.parse(JSON.stringify(newUser)));
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    // handleError(error)
    alert(error);
    throw new Error();
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    // handleError(error)
    throw new Error();
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    //handleError(error)
    throw new Error();
  }
}
