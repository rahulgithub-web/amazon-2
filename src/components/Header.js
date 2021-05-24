import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn , signOut, useSession } from "next-auth/client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
   const [session] = useSession();
   const router = useRouter();
   const items = useSelector(selectItems);

    return (
        <header className="sticky top-0 z-50">
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick={() => router.push('/')}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search */}
                <div className="hidden sm:flex h-10 items-center rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4" 
                    type="text" 
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                        <p className="hover:underline"></p>
                        {session ? `Hello, ${session.user.name}` : "Sign In"}
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>

                    <div className="cursor-pointer link">
                        <p>Return</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    {/* checkout */}
                    <div onClick={() => router.push("/checkout")} 
                    className="relative flex items-center link">

                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold text-center">
                        {items.length}
                    </span>
      

                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            
            {/* bottom nav   */}
            <div className="flex items-center space-x-3 p-2 pl-4 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/> All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Bussiness</p>
                <p className="link">Today's Deal</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal care</p>
            </div>
        </header>

    );
}

export default Header;
