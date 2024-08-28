import { BiLike } from "react-icons/bi";
import { FaRegComment ,FaShare} from "react-icons/fa";

const Posts = () => {
    return (
        <div className="bg-white my-2 p-5 rounded-md flex flex-col">
            <div className="flex gap-5 items-center relative">
                <img src="https://images.pexels.com/photos/27665867/pexels-photo-27665867/free-photo-of-two-people-standing-in-front-of-a-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-10 h-10 object-cover rounded-full cursor-pointer " alt="Add Story" />
                <span className="text-md font-semibold">Christina Leaonard</span>
                <span className="absolute right-1 float-right -top-1 cursor-pointer text-xl font-extrabold">...</span>
            </div>
            <div className="flex justify-center my-3">
                <img className="rounded-md" src="https://images.pexels.com/photos/26872304/pexels-photo-26872304/free-photo-of-traditional-dragon-statue-on-bali.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post-img" />
            </div>
            <p className="mx-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quis, libero distinctio nulla maiores eum voluptas ipsa harum, ea illo iure dolore beatae repellendus dignissimos, quam maxime labore id. Recusandae.</p>
            <div className="flex justify-around my-4 text-xl">
                <div className="bg-gray-50 flex items-center gap-1 px-5 py-1 rounded-xl"><BiLike className="border-r-2 border-gray-400 text-2xl pr-1" />123
                </div>
                <div className="bg-gray-50 flex items-center gap-1 px-5 py-1 rounded-xl"><FaRegComment className="border-r-2 border-gray-400 text-2xl pr-1" />23
                </div>
                <div className="bg-gray-50 flex items-center gap-1 px-5 py-1 rounded-xl"><FaShare className="border-r-2 border-gray-400 text-2xl pr-1" />3
                </div>
            </div>
        </div>
    )
}

export default Posts