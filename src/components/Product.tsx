import Image from "next/image";

export const Product = ({image , imageB , title ,desc} : any) => {
    return (
        <div className="min-w-screen min-h-screen flex items-center overflow-hidden relative">
            
            <Image src={imageB} alt={""} className="w-full h-full -z-10 absolute left-0" />
            
            <div className="max-w-8xl w-full rounded shadow-2xl p-6 mx-auto text-gray-800 relative md:text-left">
                <div className="lg:flex items-center -mx-12">
                    <div className="w-full lg:w-2/3 px-10 mb-10 lg:mb-0">
                        <div className="relative w-full h-98 rounded-md" >
                            <Image src={image} alt={""} className="w-full rounded-md" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-10">
                        <div className="mb-10">
                            <h1 className="font-bold text-white text-4xl uppercase mb-5">
                                {title}
                            </h1>
                            <p className="text-lg text-white font-semibold">
                                {desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

};