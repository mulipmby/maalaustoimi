import "@/app/globals.css";

import Nabvar from "@/components/navbar";
import Footer from "../components/footer";
import Contact from "@/components/Contact";
import Employee from "@/components/Employee";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import Image from "next/image";

import img_backporch from "/public/Takakuisti_jälkeen.webp";
import imgbefore from "/public/etukuisti_enne.webp";
import imgafter from "/public/etukuisti_jälkeen.webp";
import img_whitehouse from "/public/IMG_2644.webp";
import img_brownhouse from "/public/IMG_2739.webp";
import logo_employees from "/public/boys.webp";
import hytonen from "/public/hytonen.jpg";
import eskola from "/public/eskola.jpg";

export default function Home() {
  return (
    <main className="bg-white">
      <Nabvar />
      <div className="tracking-wider bg-white text-black flex flex-col justify-center items-center">
        <div className="flex md:flex-row flex-col items-center w-full md:h-[80vh] h-full">
          <ReactCompareSlider
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  display: "none",
                }}
              />
            }
            className="w-full md:w-3/5 h-[400px] md:h-full object-cover"
            itemTwo={
              <ReactCompareSliderImage
                loading="lazy"
                src={imgbefore.src}
                alt="Jälkeen"
              />
            }
            itemOne={
              <ReactCompareSliderImage
                loading="lazy"
                src={imgafter.src}
                alt="Ennen"
              />
            }
          />
          {/* <Image
            src={edi}
            alt="Ennen"
            className="w-full md:w-1/2 h-full object-cover"
          /> */}
          <div className="flex flex-col w-full md:w-2/5 h-full justify-center items-center gap-4 px-4 py-16 md:p-16">
            <div className="flex flex-col gap-4 text-lg">
              <h1 className="w-full leading-relaxed text-4xl text-start mb-10 font-semibold text-teal-950">
                MAALAUSTOIMI HYTÖNEN & ESKOLA
              </h1>
              <div className="flex flex-col w-full h-full gap-4 text-start">
                <p className="w-full leading-relaxed font-medium text-lg uppercase text-teal-950">
                  Julkisivumaalauksia ammattitaidolla.
                </p>
                <p className="w-full">
                  Olipa kyseessä sitten uudisrakennuksen viimeistely tai vanhan
                  julkisivun kunnostus, meiltä löytyy ratkaisu tarpeisiisi.
                </p>
                <p className="w-full">
                  Varaa ilmainen kartoituskäynti nyt.
                </p>
                <div className="text-center md:text-start mt-4">
                  <a
                    href="tel:+358442743255"
                    className="bg-teal-900 text-white rounded-full text-lg p-4 px-8"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Soita - 044 274 3255
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full h-full justify-center items-center bg-white">
            <div className="w-full bg-gray-50">
              <div className="px-4 w-full max-w-[1600px] m-auto  relative h-full rounded-lg flex md:flex-row flex-col gap-6 md:gap-24 text-start justify-center items-center py-16">
                <div className="w-full md:w-1/2 relative">
                  <div
                    href="/huoltotyot"
                    className="rounded-lg w-full h-full block"
                  >
                    <div className="relative inset-0 rounded-lg overflow-hidden">
                      <Image
                        src={img_whitehouse}
                        alt=""
                        style={{ objectFit: "cover" }}
                        className="rounded-lg h-[300px] md:h-[600px]"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white rounded-b-lg">
                      <h2 className="text-xl font-bold">ULKOMAALAUS</h2>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col gap-10 text-lg">
                  <h1 className="text-3xl leading-relaxed font-semibold text-teal-950 text-start w-full">
                    Ulkomaalaus - Onko talon maalaus käynyt mielessä?
                  </h1>
                  <p className="w-full">
                    Hoidamme maalauksen puolestasi ammattitaidolla ja
                    turvallisesti koko Keski-Suomen ja Pohjois-Savon alueella,
                    oli kyseessä sitten pieni mökki tai suurempi taloyhtiö.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-50">
              <div className="px-4 w-full max-w-[1600px] m-auto  relative h-full rounded-lg flex md:flex-row flex-col-reverse gap-6 md:gap-24 text-start justify-center items-center py-16">
                <div className="w-full md:w-1/2 h-full flex flex-col gap-10 text-lg">
                  <h1 className="text-3xl leading-relaxed font-semibold text-teal-950 text-start w-full">
                    Huoltotyöpalvelu – Pidä kotisi tai taloyhtiösi hyvässä
                    kunnossa
                  </h1>
                  <p className="w-full">
                    Maalaustöiden lisäksi meiltä onnistuu myös erilaiset huolto-
                    ja korjaustyöt, kuten julkisivun homepesu, laudanvaihdot,
                    sekä sadevesikourujen tyhjennys ja putsaus.
                  </p>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div
                    href="/huoltotyot"
                    className="rounded-lg w-full h-full block"
                  >
                    <div className="relative inset-0 rounded-lg overflow-hidden">
                      <Image
                        src={img_brownhouse}
                        alt=""
                        style={{ objectFit: "cover" }}
                        className="rounded-lg h-[300px] md:h-[600px]"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white rounded-b-lg">
                      <h2 className="text-xl font-bold">HUOLTOTYÖ</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-100">
              <div className="px-4 w-full max-w-[1600px] m-auto relative h-full rounded-lg flex md:flex-row flex-col gap-6 md:gap-24 text-start justify-center items-center py-16">
                <div className="w-full md:w-1/2">
                  <Image
                    src={img_backporch}
                    alt="Ennen"
                    style={{ objectFit: "cover", objectPosition: "bottom" }}
                    className="rounded-lg h-[300px] md:h-[600px]"
                  />
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col gap-8 text-lg">
                  <h1 className="text-3xl text-teal-950 font-semibold text-start w-full mb-6">
                    Miksi maalaustoimi?
                  </h1>
                  <div className="flex flex-col gap-3">
                    <h2 className="w-full font-medium text-lg text-teal-950 uppercase">
                      LAADUSTA TINKIMÄTTÄ
                    </h2>
                    <p className="w-full">
                      Ensimmäisenä prioriteettinamme on työn jäljen
                      moitteettomuus ja asiakastyytyväisyys. Valmiin urakan
                      jälkeen pinnan tulee kestää sään lisäksi tarkankin silmän
                      tarkastelu.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="w-full font-medium text-lg text-teal-950 uppercase">
                      ASIAKASTYYTYVÄISYYS
                    </h2>
                    <p className="w-full">
                      Laadun lisäksi tarjoamme kilpailukykyiset hinnat ja
                      ystävällisen asiakaspalvelun.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="w-full font-medium text-lg text-teal-950 uppercase">
                      KOKEMUS
                    </h2>
                    <p className="w-full">
                      Kummallakin meistä on yli sadan ulkomaalauskohteen
                      kartuttama kokemus. Lisäksi kuulumme
                      ennakkoperintärekisteriin joten työstämme voi hakea
                      kotitalousvähennyksiä.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-50">
              <div className="px-4 w-full max-w-[1600px] m-auto relative h-full rounded-lg flex md:flex-row flex-col gap-16 md:gap-24 text-start justify-center items-center py-16">
                <div className="w-full md:w-1/2 h-full flex flex-col gap-10 text-lg">
                  <h1 className="text-3xl leading-relaxed font-semibold text-teal-950 text-start w-full">
                    Keitä olemme?
                  </h1>
                  <div className="flex flex-col w-full h-full gap-4 text-start">
                    <p className="w-full">
                      Olemme 25-vuotias aineenopettajaopiskelija Edvin Eskola ja
                      26-vuotias juuri valmistunut opettaja Antti Hytönen.
                    </p>
                    <p className="w-full">
                      Monien vaiheiden jälkeen päädyimme talvella 2023
                      perustamaan maalausalan yrityksen.
                    </p>
                    <p className="w-full">
                      Päätös ryhtyä yrittäjäksi syntyi halusta toimia oikein ja
                      tehdä huippu laadukasta työtä asiakkaan ehdoilla.
                    </p>
                  
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative items-center flex justify-center h-full">
                  <div className="flex flex-col gap-10 h-full justify-between">
                    <Employee img={hytonen} name="Antti Hytönen" email="maalaustoimi.hytonen@gmail.com" number="044 200 6896" />
                    <Employee img={eskola} name="Edvin Eskola" email="maalaustoimi.eskola@gmail.com" number="044 274 3255" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Contact
            id="contact"
            info="Mietitkö vielä? Autamme mielellämme maalaustarpeen arvioimisessa ja teemme sen täysin maksutta. Ota rohkeasti yhteyttä!
"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
