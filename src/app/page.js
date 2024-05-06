import Nabvar from "@/components/navbar";
import Footer from '../components/footer';
import Carousel from '@/components/carousel';
import "@/app/globals.css";
import Link from 'next/link';
import Image from 'next/image';

import img1 from '../../public/Takakuisti_ennen.jpg'
import img2 from '../../public/Takakuisti_jälkeen.jpg'
import img3 from '../../public/mökki_enne.jpg'
import img4 from '../../public/mökki_jälkeen.jpg'
import img5 from '../../public/etukuisti_enne.jpg'
import img6 from '../../public/etukuisti_jälkeen.jpg'
import img7 from '../../public/IMG_2644.jpg';
import imageright from '../../public/IMG_2739.jpg';
export default function Home() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <main className="bg-white">
      <Nabvar />
      <div className="tracking-wider bg-white text-black flex flex-col justify-center items-center">
          <div className='flex md:flex-row flex-col items-center w-full md:h-[60vh] h-full'>
            <div className='w-full md:w-1/2 h-[30vh] md:h-full rounded-br-lg' style={{backgroundImage: "url('/EDI.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <div className="flex flex-col w-full md:w-1/2 h-full justify-center items-center gap-4 p-10">
              <div className='flex flex-col gap-4'>
                <h1 className='w-full text-4xl text-start'>Ulkomaalaukset yksityisille ja taloyhtiöille</h1>
                <div className='flex flex-col w-full h-full gap-4 text-start'>
                  <p className='w-full text-xl'>Ulkomaalauksen suunnittelu ja toteutus vaativat huolellista suunnittelua ja ammattitaitoa, erityisesti kun kyseessä ovat yksityiskodit tai taloyhtiöt. Haluamme tarjota sinulle täydellisen ratkaisun ulkoseinien kunnostukseen ja kaunistamiseen.</p>
                  <p className='w-full text-xl'>Olipa ulkomaalauksen tarve sitten kodin virkistämiseksi tai taloyhtiön julkisivun kohentamiseksi, voit luottaa meidän kokeneeseen tiimiimme. Työskentelemme yhteistyössä kanssasi varmistaaksemme, että lopputulos vastaa täysin odotuksiasi ja tarpeitasi.</p>
                  <p className='w-full text-xl'>Käytämme vain laadukkaita materiaaleja ja ammattitaitoista työvoimaa varmistaaksemme kestävän ja kauniin lopputuloksen. Ota yhteyttä meihin, niin suunnitellaan yhdessä juuri sinun tarpeisiisi sopiva ulkomaalausratkaisu!</p>
              </div>
            </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center'>
          <div className="px-4 w-full max-w-[1568px] m-auto md:py-16 relative h-full md:h-[25vh] mt-16 md:rounded-lg" style={{ backgroundImage: "url('/TAUSTA.jpg')"}}>
  <div className="font-bold flex md:flex-row flex-col justify-center items-center w-full h-full p-4 md:gap-40 gap-10">
    <div>
      <h1 className='w-full text-4xl text-white'>Taloosi uusi maalipinta?</h1>
    </div>
    <div className='flex flex-col gap-4'>
      <button className='bg-white text-[#899C9B] rounded-full text-2xl p-4'>Soita - 044 274 3255</button>
      <button className='border border-white rounded-full text-2xl text-white p-4'>Tarjouspyyntölomake</button>
    </div>
  </div>
</div>



          
            <Carousel images={images}/>
            <div className="flex flex-col w-full h-full justify-center items-center gap-6 md:gap-24 bg-white">

                <div className='px-4 w-full max-w-[1600px] m-auto relative h-full mt-16 rounded-lg flex md:flex-row flex-col text-lg gap-6 md:gap-24 text-start justify-center items-center'>
                  <div className="w-full md:w-1/2">
                    <Image src={img7} className="rounded-lg" alt="Ennen"/>
                  </div>
                  <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                  <h1 className='text-4xl text-start w-full'>Miksi maalaustoimi?</h1>
                  <p className='w-full text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....</p>
                  </div>      
                </div>
                <div className='px-4 w-full max-w-[1600px] m-auto  relative h-full mt-16 rounded-lg flex md:flex-row flex-col text-lg gap-6 md:gap-24 text-start justify-center items-center'>
                <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                  <h1 className='text-4xl text-start w-full'>Miksi maalaustoimi?</h1>
                  <div>
                    <h2 className='text-2xl text-start w-full'>Saat maksuttoman kartoituskäynnin</h2>
                    <p className='w-full text-xl'>Tilaa meiltä asiantuntija paikalle kartoittamaan talosi maalaustarve sekä antamaan hinta-arvio ja alustava aikataulu talon maalauksesta. Saat puolueettoman arvion maalaustarpeesta, eikä käynti sido sinua vielä mihinkään.</p>      
                  </div>
                  <div>
                    <h2 className='text-2xl text-start w-full'>Ammattitaitoiset ja kokeneet maalarit</h2>
                    <p className='w-full text-xl'>Maalarimme ovat koulutettuja ja kokeneita maalausalan ammattilaisia, joilta maalaaminen sujuu nopeasti ja huolellisesti alusta loppuun.</p>              
                  </div>
                  <div>
                    <h2 className='text-2xl text-start w-full'>Laadukasta maalausjälkeä</h2>
                    <p className='w-full text-xl'>Me emme tingi laadusta! Maalaamme kaikki ulkomaalaukset käsityönä pensselillä, jolloin varmistamme tasaisen, huolellisen ja viimeistellyn lopputuloksen.</p>
                  </div>
                </div> 
                  <div className="w-full md:w-1/2">
                    <Image src={img6} alt="Ennen" className="rounded-lg"/>
                  </div>         
                </div>
                <div className='px-4 w-full max-w-[1600px] m-auto  relative h-full mt-16 rounded-lg flex md:flex-row flex-col text-lg gap-6 md:gap-24 text-start justify-center items-center'>
                <div className="w-full md:w-1/2 relative">
                    <Link href="/huoltotyot" className="rounded-lg w-full h-full duration-500 hover:scale-105 transform transition-all block">
                        <div className="relative inset-0 rounded-lg overflow-hidden">
                            <Image
                                src={imageright}
                                alt=""
                                style={{height: '600px', objectFit: 'cover'}}
                                className="rounded-lg "
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white rounded-b-lg">
                            <h2 className="text-xl font-bold">HUOLTOTYÖT</h2>
                        </div>
                    </Link>
                </div>
                  <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                  <h1 className='text-4xl text-start w-full'>Täydellinen huoltotyöpalvelu – Pidä kotisi tai taloyhtiösi hyvässä kunnossa</h1>
                  <p className='w-full text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....</p>
                  </div> 
                       
                </div>
            </div>
            <div className="px-4 w-full max-w-[1568px] m-auto  relative h-full md:h-[25vh]  mt-16 md:rounded-lg" style={{ backgroundImage: "url('/TAUSTA.jpg')"}} >
            <div className="font-bold flex md:flex-row flex-col justify-center items-center w-full h-full p-4 md:gap-40 gap-10">
              <div>
                <h1 className='w-full text-4xl text-white md:w-[20ch]'>Talon maalaus ensi kesänä? Pyydä tarjous nyt!</h1>
              </div>
              <div className='flex flex-col gap-4'>
                <button className='bg-white text-[#899C9B] rounded-full text-2xl p-4'>Soita - 044 274 3255</button>
                <button className='border border-white rounded-full text-2xl text-white p-4'>Tarjouspyyntölomake</button>
              </div>
            </div>
          </div>
          
        </div>
    
        
          </div>
         <Footer/>
    </main>
  );
}
