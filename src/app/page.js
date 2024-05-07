import Nabvar from "@/components/navbar";
import Footer from "../components/footer";
import Carousel from "@/components/carousel";
import Contact from "@/components/Contact";
import "@/app/globals.css";
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import Link from "next/link";
import Image from "next/image";

import img1 from "/public/Takakuisti_ennen.jpg";
import img2 from "/public/Takakuisti_jälkeen.jpg";
import img3 from "/public/mökki_enne.jpg";
import img4 from "/public/mökki_jälkeen.jpg";
import img5 from "/public/etukuisti_enne.jpg";
import img6 from "/public/etukuisti_jälkeen.jpg";
import img7 from "/public/IMG_2644.jpg";
import imageright from "/public/IMG_2739.jpg";
import edi from "/public/EDI.jpg";
export default function Home() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <main className="bg-white">
      <Nabvar />
      <div className="tracking-wider bg-white text-black flex flex-col justify-center items-center">
        <div className="flex md:flex-row flex-col items-center w-full md:h-[80vh] h-full">
        <ReactCompareSlider
            handle={<ReactCompareSliderHandle buttonStyle={{
              display: 'none'
            }} />}
            className="w-full md:w-3/5 h-full object-cover"
            itemTwo={<ReactCompareSliderImage src={img5.src} alt="Jälkeen"/>}
            itemOne={<ReactCompareSliderImage src={img6.src} alt="Ennen"/>}
          />
          {/* <Image
            src={edi}
            alt="Ennen"
            className="w-full md:w-1/2 h-full object-cover"
          /> */}
          <div className="flex flex-col w-full md:w-2/5 h-full justify-center items-center gap-4 p-16">
            <div className="flex flex-col gap-4">
              <h1 className="w-full text-3xl text-start mb-10 font-semibold text-teal-950">
                Ulkomaalaukset yksityisille ja taloyhtiöille
              </h1>
              <div className="flex flex-col w-full h-full gap-4 text-start">
                <p className="w-full">
                  Ulkomaalauksen suunnittelu ja toteutus vaativat huolellista
                  suunnittelua ja ammattitaitoa, erityisesti kun kyseessä ovat
                  yksityiskodit tai taloyhtiöt. Haluamme tarjota sinulle
                  täydellisen ratkaisun ulkoseinien kunnostukseen ja
                  kaunistamiseen.
                </p>
                <p className="w-full">
                  Olipa ulkomaalauksen tarve sitten kodin virkistämiseksi tai
                  taloyhtiön julkisivun kohentamiseksi, voit luottaa meidän
                  kokeneeseen tiimiimme. Työskentelemme yhteistyössä kanssasi
                  varmistaaksemme, että lopputulos vastaa täysin odotuksiasi ja
                  tarpeitasi.
                </p>
                <p className="w-full">
                  Käytämme vain laadukkaita materiaaleja ja ammattitaitoista
                  työvoimaa varmistaaksemme kestävän ja kauniin lopputuloksen.
                  Ota yhteyttä meihin, niin suunnitellaan yhdessä juuri sinun
                  tarpeisiisi sopiva ulkomaalausratkaisu!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full h-full justify-center items-center bg-white">
            <div className="w-full bg-gray-50">
              <div className="px-4 w-full max-w-[1600px] m-auto relative h-full rounded-lg flex md:flex-row flex-col text-lg gap-6 md:gap-24 text-start justify-center items-center py-16">
                <div className="w-full md:w-1/2">
                  <Image src={img7} className="rounded-lg" alt="Ennen" />
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col gap-10">
                  <h1 className="text-3xl font-semibold text-teal-950 text-start w-full">
                    Miksi maalaustoimi?
                  </h1>
                  <p className="w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat....
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-100">
              <div className="px-4 w-full max-w-[1600px] m-auto  relative h-full rounded-lg flex md:flex-row flex-col gap-6 md:gap-24 text-start justify-center items-center py-16">
                <div className="w-full md:w-1/2 h-full flex flex-col gap-8 text-lg">
                  <h1 className="text-3xl text-teal-950 font-semibold text-start w-full mb-6">
                    Miksi maalaustoimi?
                  </h1>
                  <div className="flex flex-col gap-3">
                    <h2 className="w-full font-medium text-lg text-teal-950 uppercase">
                      Saat maksuttoman kartoituskäynnin
                    </h2>
                    <p className="w-full">
                      Tilaa meiltä asiantuntija paikalle kartoittamaan talosi
                      maalaustarve sekä antamaan hinta-arvio ja alustava aikataulu
                      talon maalauksesta. Saat puolueettoman arvion
                      maalaustarpeesta, eikä käynti sido sinua vielä mihinkään.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="w-full font-medium text-lg text-teal-950 uppercase">
                      Ammattitaitoiset ja kokeneet maalarit
                    </h2>
                    <p className="w-full">
                      Maalarimme ovat koulutettuja ja kokeneita maalausalan
                      ammattilaisia, joilta maalaaminen sujuu nopeasti ja
                      huolellisesti alusta loppuun.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="w-full font-medium text-lg text-teal-950 uppercase">
                      Laadukasta maalausjälkeä
                    </h2>
                    <p className="w-full">
                      Me emme tingi laadusta! Maalaamme kaikki ulkomaalaukset
                      käsityönä pensselillä, jolloin varmistamme tasaisen,
                      huolellisen ja viimeistellyn lopputuloksen.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <Image src={img2} alt="Ennen" style={{objectFit: "cover", objectPosition: "bottom"}} className="rounded-lg h-[600px]" />
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-50">
              <div className="px-4 w-full max-w-[1600px] m-auto  relative h-full rounded-lg flex md:flex-row flex-col gap-6 md:gap-24 text-start justify-center items-center py-16">
                <div className="w-full md:w-1/2 relative">
                  <div
                    href="/huoltotyot"
                    className="rounded-lg w-full h-full block"
                  >
                    <div className="relative inset-0 rounded-lg overflow-hidden">
                      <Image
                        src={imageright}
                        alt=""
                        style={{objectFit: "cover" }}
                        className="rounded-lg h-[600px]"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white rounded-b-lg">
                      <h2 className="text-xl font-bold">HUOLTOTYÖT</h2>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col gap-10 text-lg">
                  <h1 className="text-3xl leading-relaxed font-semibold text-teal-950 text-start w-full">
                    Täydellinen huoltotyöpalvelu – Pidä kotisi tai taloyhtiösi
                    hyvässä kunnossa
                  </h1>
                  <p className="w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat....
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Contact id="contact" info="Talon maalaus ensi kesänä? Pyydä tarjous nyt!" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
