import { FaImage } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { FaPoll } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";


export default function AddPost() {
    return (
        <div className="bg-white my-2 p-3 rounded-md flex justify-between">
            {/* Avatar */}
            <div className="flex flex-col justify-center items-center text-center min-w-16 flex-1">
                <img src="https://images.pexels.com/photos/27659838/pexels-photo-27659838/free-photo-of-portrait-of-a-man-on-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-16 h-16 object-cover rounded-full" alt="Profile_Img" />
            </div>
            <div className="flex flex-col flex-[4] mr-2">
                {/* TextArea */}
                <div className="flex items-end">
                    <textarea className="bg-gray-100 w-full m-2 p-1 focus:border-none focus:outline-none focus:bg-gray-200 rounded-md" placeholder="What's in your mind ?" />
                    <div className="text-xl my-2 scale-125">😄</div>
                </div>
                {/* Options */}
                <div className="flex justify-around md:justify-start md:gap-4">
                    <div className="flex items-center gap-1">
                        <FaImage className="text-[1.1rem]"/>
                        <span>Photo</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdVideoCall className="text-[1.6rem]"/>
                        <span>Video</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaPoll className="text-[]"/>
                        <span>Poll</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BsCalendar2EventFill className="text-[0.9rem]"/>
                        <span>Event</span>
                    </div>

                </div>
            </div>
        </div>
    )

}