import React, { useRef, useState, useEffect, useContext } from 'react';
import CardTeam from '../components/CardTeam';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { forEmailKontakt } from '../config';
import { sendForm } from '../components/global/sendForm';
import disableScroll from 'disable-scroll';
import { motion } from 'framer-motion';
import AppContext from '../Context/AppContext';
import { team } from '../data/team';
import axios from 'axios';

export default function Kontakt() {
  const message = [
    'Vielen Dank für Ihrer Anfrage. Wir melden uns binnen 48h bei Ihnen. ',
    'Error sending message',
  ];

  const Team = useRef(null);
  const Uber = useRef(null);
  const { sectionName, setSectionName } = useContext(AppContext);
  const [nachName, setNachName] = useState('');
  const [errorNach, setErrorNach] = useState(false);

  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(false);

  const [firma, setFirma] = useState('');

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const [ort, setOrt] = useState('');
  const [errorOrt, setErrorOrt] = useState(false);

  const [comment, setComment] = useState('');
  const myForm = useRef(null);

  const [send, setSend] = useState(false);
  const [show, setShow] = useState(false);

  const curentDate = new Date();
  const date = new Date('2023-04-01');

  useEffect(() => {
    if (show) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [show]);

  const onSubmit = async () => {
    setSend(true);
    const flag = false;
    if (nachName == '') {
      setErrorNach(true);
      flag = true;
    }
    if (email == '') {
      setErrorEmail(true);
      flag = true;
    }

    if (ort == '') {
      setErrorOrt(true);
      flag = true;
    }

    if (phone == '') {
      setErrorPhone(true);
      flag = true;
    }

    if (!isEmailValid(email) && email != '') {
      setErrorEmail(true);
      flag = true;
    }

    if (flag) {
      setSend(false);
      return;
    }
    const remoteUrl = "https://jesam-email-server-02bded5c5032.herokuapp.com/success/send";
    const DataToSend = {
      from: 'noreply@jesamconsulting.com',
      to: forEmailKontakt,
      subject: 'FE Energiesysteme',
      html: `    
        FE Energiesysteme
        Vor- & Nachname: ${nachName} 
        Telefonnummer : ${phone} 
        E-Mailadresse: ${email}                 
        Firma: ${firma}                 
        Ort: ${ort}                 
        Ihr Anliegen: ${comment}   
        `,
    };

    axios
      .post(remoteUrl, DataToSend)
      .then(() => {
        setSend(false);
        myForm.current.reset();
        setShow(true);
        setFirma('');
        setPhone('');
        setOrt('');
        setNachName('');
        setEmail('');
        setOrt('');
        setComment('');
        setNum(0);
      })
      .catch((e) => {
        setNum(1);
        setShow(true);
        setSend(false);
      });
  };
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (sectionName != 'home') {
      if (sectionName == 'uber') {
        const timin = setTimeout(() => {
          if (Uber.current.classList.contains('-translate-y-[10rem]')) {
            Uber.current.classList.remove('-translate-y-[10rem]');
          }
          Uber.current.classList.add('-translate-y-[14.5rem]');
          Uber.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
          setSectionName('home');
          Uber.current.classList.add('-translate-y-[10rem]');
          if (Uber.current.classList.contains('-translate-y-[15rem]')) {
            Uber.current.classList.remove('-translate-y-[14.5rem]');
          }
        }, 200);

        return () => {
          clearTimeout(timin);
        };
      } else if (sectionName == 'team') {
        const timin = setTimeout(() => {
          if (Team.current.classList.contains('-translate-y-[10rem]')) {
            Team.current.classList.remove('-translate-y-[10rem]');
          }
          Team.current.classList.add('-translate-y-[14.5rem]');
          Team.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
          setSectionName('home');
          Team.current.classList.add('-translate-y-[10rem]');
          if (Team.current.classList.contains('-translate-y-[15rem]')) {
            Team.current.classList.remove('-translate-y-[14.5rem]');
          }
        }, 200);

        return () => {
          clearTimeout(timin);
        };
      }
    }
  }, [sectionName]);

  return (
    <div className="bg-[#EDEDED]">
      <motion.div
        onClick={() => {
          setShow(false);
        }}
        initial={{
          y: 100,
          left: '50%',
          translateX: '-50%',
          opacity: 0,

          zIndex: -1,
        }}
        animate={{
          y: show ? 0 : 100,
          left: '50%',
          translateX: '-50%',
          opacity: show ? 1 : 0,
          zIndex: show ? 60 : -1,
          transition: {
            ease: 'easeInOut',
            duration: 0.6,
          },
        }}
        className={`fixed w-[24rem] md:w-[23rem] text-center py-5 hover:cursor-pointer bottom-10 bg-black bg-opacity-90 rounded-md text-white`}
      >
        {message[num]}
      </motion.div>
      <Header />
      <Navbar />
      <div className="lg:p-24 md:p-10 px-4 py-6 md:mb-0 mb-16">
        <h1 className="lg:text-4xl md:text-2xl text-xl backLine">KONTAKT</h1>
        <p className="text-[#878787] mt-1">SCHREIBEN SIE UNS IHR ANLIEGEN</p>

        <form ref={myForm} className="md:my-10 my-6">
          <div className="grid md:grid-cols-3 lg:gap-x-16 md:gap-x-6 md:gapy-0 gap-y-6">
            <div>
              <div className="flex flex-col lg:space-y-8 md:space-y-6 space-y-6">
                <div>
                  <div>
                    <label htmlFor="nach" className="text-sm font-bold">
                      Vor- und Nachname
                    </label>
                  </div>
                  <input
                    type="text"
                    id="nach"
                    onChange={(e) => {
                      setNachName(e.target.value);

                      if (errorNach) {
                        setErrorNach(false);
                      }
                    }}
                    placeholder="Vor- und Nachname"
                    className={`border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED] ${
                      errorNach ? ' border-red-600 ' : ' border-[#D9D9D9] '
                    }`}
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-bold">
                      Telefon
                    </label>
                  </div>
                  <input
                    type="number"
                    id="phone"
                    onChange={(e) => {
                      setPhone(e.target.value);

                      if (errorPhone) {
                        setErrorPhone(false);
                      }
                    }}
                    placeholder="Telefon"
                    className={`border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED] ${
                      errorPhone ? ' border-red-600 ' : ' border-[#D9D9D9]'
                    }`}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col lg:space-y-8 space-y-6">
                <div>
                  <div>
                    <label htmlFor="firma" className="text-sm font-bold">
                      Firma
                    </label>
                  </div>
                  <input
                    type="text"
                    id="firma"
                    onChange={(e) => {
                      setFirma(e.target.value);
                    }}
                    placeholder="Firma"
                    className={`border outline-none border-[#D9D9D9] p-3 mt-2 placeholder-black w-full bg-[#EDEDED] `}
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="mail" className="text-sm font-bold">
                      E-Mail
                    </label>
                  </div>
                  <input
                    type="email"
                    id="mail"
                    onChange={(e) => {
                      setEmail(e.target.value);

                      if (errorEmail) {
                        setErrorEmail(false);
                      }
                    }}
                    placeholder="E-Mail"
                    className={`border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED] ${
                      errorEmail ? ' border-red-600 ' : ' border-[#D9D9D9] '
                    }`}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-8">
                <div>
                  <div>
                    <label htmlFor="ort" className="text-sm font-bold">
                      Ort
                    </label>
                  </div>
                  <input
                    type="text"
                    id="ort"
                    onChange={(e) => {
                      setOrt(e.target.value);

                      if (errorOrt) {
                        setErrorOrt(false);
                      }
                    }}
                    placeholder="Ort"
                    className={`${
                      errorOrt ? ' border-red-600 ' : ' border-[#D9D9D9] '
                    }border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED]`}
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="comment" className="text-sm font-bold">
                      Ihr Anliegen
                    </label>
                  </div>
                  <textarea
                    rows={6}
                    id="comment"
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Ihr Anliegen"
                    className="resize-none border outline-none border-[#D9D9D9] p-3 mt-2 placeholder-black w-full bg-[#EDEDED]"
                  ></textarea>
                </div>

                <div className="flex md:justify-end">
                  <div
                    onClick={() => {
                      if (!send) {
                        onSubmit();
                      }
                    }}
                    className={` ${
                      send
                        ? ' hover:cursor-not-allowed '
                        : ' hover:cursor-pointer '
                    }border border-blue-1 relative py-3.5 w-[17rem] items-center text-center rounded-md bg-blue-1 text-white hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150 justify-center`}
                  >
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 ${
                        send ? ' block ' : ' hidden '
                      }`}
                    >
                      <svg
                        className={`animate-spin h-6 w-6 ${
                          send ? ' hover:text-blue-1 ' : ' text-white '
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                    <span
                      className={`${send ? ' opacity-0 ' : ' opacity-100 '}`}
                    >
                      Anfrage absenden
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="relative">
          <div ref={Uber} className="absolute -z-10 top-0"></div>
          <h2 className="uppercase lg:text-4xl md:text-2xl text-xl mt-6 lg:mt-10 md:mt-8">
            Über Fe Energiesysteme
          </h2>
          <div className="md:space-y-6 space-y-4 md:mt-6 mt-4">
            <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 md:space-x-3">
              <div className="md:w-1/2">
                <p>
                  Wir glauben daran, dass die zukünftige Form der
                  Energiegewinnung unbedingt mit der Bedingung einhergehen muss,
                  dass sie möglichst klimaschonend ist. Der beste Weg ist in
                  unseren Augen daher die Technik der Photovoltaikanlagen. Denn
                  keine Ressource ist so einfach und unbegrenzt verfügbar wie
                  Sonnenlicht - und das sollten wir nutzen.
                </p>
                <p>
                  Mithilfe unseres erfahrenen Teams beraten wir sie in allen
                  Bereichen der PV-Anlagentechnik und Batteriespeicher und
                  vermitteln Ihnen bei Bedarf unsere professionellen
                  Montagepartner, die die Installation Ihrer eigenen kleinen
                  Energiequelle für Sie realisieren.{' '}
                </p>

                <p>
                  Wir helfen Ihnen dabei, einen großen Schritt in Richtung
                  autarken Lebens zu gehen - für Sie und für unsere Umwelt.
                </p>

                <div className="flex space-x-3">
                  <div className="bg-black h-[0.1rem] w-[2rem] md:mt-[4.7rem] mt-[3.5rem]"></div>
                  <div className="md:mt-16 mt-10">
                    <p className="text-base font-bold">
                      {curentDate.getTime() < date.getTime()
                        ? 'Mathis Thoden'
                        : 'Jörg Behrens'}
                    </p>
                    <p className="text-sm font-bold">Geschäftsführer</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="lg:mt-10">
                  <img
                    src="/images/bg-kontakt.webp"
                    alt=""
                    className="lg:w-[85%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div ref={Team} className="absolute -z-10 top-0"></div>

          <h2 className="uppercase lg:text-4xl md:text-2xl text-xl md:my-10 my-8 backLine lg:my-16 font-bold">
            Das Team
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-x-[4rem] md:gap-x-[3rem] lg:gap-y-[8rem] md:gap-y-[8rem] gap-y-[7rem] lg:mb-16 md:mb-20 mb-8">
            {team.map((el, index) => {
              return <CardTeam {...el} key={index} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function isEmailValid(emailAdress) {
  var EMAIL_REGEXP = new RegExp(
    '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$',
    'i'
  );
  return EMAIL_REGEXP.test(emailAdress);
}
