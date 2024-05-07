import "@/app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import instagram from '/public/instagram-logo.svg'

export default function Footer() {


    return (
        <div className="tracking-wider w-full h-full text-white bg-teal-950">
            <div className="w-full h-full flex justify-center items-center bg-black/30">
            <div className=" w-full max-w-[1600px] flex flex-col justify-between items-center p-16 gap-4 md:flex-row sd:">
                <div className="flex flex-col md:items-start items-center">
                        <h2 className="font-semibold text-xl text-center md:text-start mb-4">Maalaustoimi Hytönen & Eskola Oy</h2>
                        <p className=" text-center md:text-start">Y-tunnus 3344645-5</p>
                        <p className="text-center md:text-start">Ainolantie 19 as. 12, 41800 Korpilahti</p>
                        <Link className="text-center md:text-start" href="mailto:maalaustoimi@gmail.com">maalaustoimi@gmail.com</Link>
                        <Link className="text-center md:text-start" href="tel:0442743255">044 274 3255</Link>
                </div>
                {/* <div className="flex flex-col">
                    <Link href="/palvelut" className="text-center md:text-start">Palvelut</Link>
                    <Link href="/kokemuksia" className="text-center md:text-start">Kokemuksia</Link>
                    <Link href="/yhteystiedot" className="text-center md:text-start">Yhteystiedot</Link>
                    <Link href="/meista" className="text-center md:text-start">Meistä</Link>
                </div>  */}
                <div className="">
                    <Link href="https://www.instagram.com/maalaustoimi" className="flex flex-row gap-3">
                        <Image src={instagram} alt="instagram" width={30}/>
                        <p className="">maalaustoimi</p>
                    </Link>
                </div>   
            </div>
            </div>
        </div>

  

    );
}
