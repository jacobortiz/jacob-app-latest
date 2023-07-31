import { Metadata } from "next"

import { SignIn, SignOut } from "./button";

import Form from './form'
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export const metadata: Metadata = {
    title: 'WORK IN PROGRESS...',
    description: 'login to leave a message (:.',
};

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function Page() {

    // let entries;
    const session = await getServerSession(authConfig)

    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">
                leave a message
            </h1>


            {/* {session?.user ? (
            <>
                <Form />
                <SignOut />
            </>
            ) : (
                <SignIn />
            )} */}

            {/* <SignIn /> */}

            {/* {entries.map((entry) => (
                <div key={entry.id} className="flex flex-col space-y-1 mb-4">
                <div className="w-full text-sm break-words">
                    <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                    {entry.created_by}:
                    </span>
                    {entry.body}
                </div>
                </div>
            ))} */}

        </section>
    )
}