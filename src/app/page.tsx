import Image from "next/image";
import Stories from "./components/Feed/Stories";
import AddPost from "./components/Feed/AddPost";
import Feed from "./components/Feed/Feed";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";

export default function Home() {
  return (
    <div className="flex gap-6">

      {/* left side bar */}
      <div className="hidden xl:block w-[20%] py-3 ">
        <LeftMenu/>
      </div>

      {/* Feed */}
      <div className="w-full lg:w-[70%] xl:w-[50%] py-3">
        <Stories/>
        <AddPost/>
        <Feed/>
      </div>
      
      {/* right side bar */}
      <div className="hidden lg:block w-[30%] py-3">
        <RightMenu/>
      </div>
    
    </div>
  );
}
