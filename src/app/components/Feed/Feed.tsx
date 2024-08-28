import Posts from "./Posts";


export default function Feed(){
    return(
        <div className="flex flex-col gap-12 ">
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>

        </div>
    )
}