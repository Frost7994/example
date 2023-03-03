// utils
import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
    // session destructure
    let { data: session } = useSession();

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-medium">NextAuth Home</h1>
            {session ? (
                <>
                    <p>You are logged in as: {session?.user?.email}</p>
                    <button
                        onClick={() => signOut()}
                        className="text-sm font-medium text-sky-500 border-sky-500 border rounded-md px-3 py-2 transition-all hover:bg-sky-500/20">
                        Sign Out
                    </button>
                </>
            ) : (
                <>
                    <p className="mb-2 ">Please log in to see next auth in use.</p>
                    <button
                        onClick={() => signIn()}
                        className="text-sm font-medium text-sky-500 border-sky-500 border rounded-md px-3 py-2 transition-all hover:bg-sky-500/20">
                        Sign In
                    </button>
                </>
            )}
        </div>
    );
};

export default Home;
