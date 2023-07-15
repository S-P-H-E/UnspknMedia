import Image from "next/image";

export default function Profiles({image, name, description}){
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <Image src={image} className="w-[150px] rounded-full"/>
                <h1 className="m-4 text-2xl font-medium ">{name}</h1>
                <p className="text-[#676767] border border-[#676767] rounded-full px-3">{description}</p>
                <div>

                </div>
            </div>
        </>
    )
}