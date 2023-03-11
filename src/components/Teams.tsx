import Image from 'next/image';
import Shivam from 'public/logos/solid.png';
import Alok from 'public/logos/certik.png';
import Anshuman from 'public/logos/solid.png';
import Arpit from 'public/logos/certik.png';

export const Teams: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16">

            <div className="w-full bg-gray-800">
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                            Check our awesome team members
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36" src={Shivam} alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">Dany Bailey</p>
                                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36" src={Alok} alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">Lucy Carter</p>
                                <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36" src={Anshuman} alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">Jade Bradley</p>
                                <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36" src={Arpit} alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-white font-bold mb-2">Dany Bailey</p>
                                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                            </div>
                        </div>
                       
                    </div>
                </section>
            </div>
        </div>
    );
};