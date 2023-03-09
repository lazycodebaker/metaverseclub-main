

export const Footer: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-16 px-7 py-10 bg-black w-screen border-t-[1px] border-white">
            <h1 className="text-white text-md font-bold">
                Disclaimer: Your investment may go down as well as up in value. Cryptocurrency is not regulated in the UK.
            </h1>
            <h1 className="text-gray-100 text-md font-bold">
                @COPYRIGHT 2023 BY METVERSE CLUB. ALL RIGHTS RESERVED.
            </h1>
        </div>
    );
};