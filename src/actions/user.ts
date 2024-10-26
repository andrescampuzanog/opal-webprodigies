"use server";


import { currentUser } from "@clerk/nextjs/server";
import { client } from "@/lib/prisma";

export const onAuthenticateUser = async () => {
    try {
        const user = await currentUser()
        if (!user) {
            return { status: 403 }
        }

        const userExist = await client.user.findUnique({
            where: {
                clerkid: user.id
            }
        })

    } catch (error) {

    }
}