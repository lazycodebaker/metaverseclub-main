import Image from 'next/image';
import Shivam from 'public/images/Shivam.jpg';
import Alok from 'public/images/Alok.jpg';
import Anshuman from 'public/images/Anshuman.jpg';
import Arpit from 'public/images/Arpit.jpg';

export const Teams: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16">

            <div className="w-full bg-blue-600">
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h1 className="font-bold text-5xl md:text-5xl lg:text-5xl font-heading text-white">
                            CHECK OUT OUR TEAM
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <Image className="object-center object-cover rounded-full h-36 w-36" src={Shivam} alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">SHIVAM VERMA</p>
                                <p className="text-base text-gray-400 font-normal">CEO & CO-FOUNDER</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <Image className="object-center object-cover rounded-full h-36 w-36" src={Alok} alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">ALOK</p>
                                <p className="text-base text-gray-400 font-normal">LED DEV & CO-FOUNDER</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <Image className="object-center object-cover rounded-full h-36 w-36" src={Anshuman} alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">ANSHUMAN TIWARI</p>
                                <p className="text-base text-gray-400 font-normal">CTO </p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <Image className="object-center object-cover rounded-full h-36 w-36" src={Arpit} alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">ARPIT</p>
                                <p className="text-base text-gray-400 font-normal">GRAPHIC DESIGNER</p>
                            </div>
                        </div>
                       
                    </div>
                </section>
            </div>
        </div>
    );
};