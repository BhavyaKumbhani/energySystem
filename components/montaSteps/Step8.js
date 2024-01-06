import React, { useState, useContext, useRef, useEffect } from 'react';
import MontageContext from '../../Context/MontageContext';
import { forEmailMontage } from '../../config';
import { sendForm } from '../global/sendForm';
import disableScroll from 'disable-scroll';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Step8() {
  const [firma, setFirma] = useState('');
  const [errFirma, setErrFirma] = useState(false);

  const [phone, setPhone] = useState('');
  const [errPhone, setErrPhone] = useState(false);

  const [strabe, setStrabe] = useState('');
  const [errStrabe, setErrStrabe] = useState('');

  const [vorname, setVorname] = useState('');
  const [errVorname, setErrVorname] = useState(false);

  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(false);

  const [plz, setPlz] = useState('');
  const [errPlz, setErrPlz] = useState(false);

  const [ort, setOrt] = useState('');
  const [errOrt, setErrOrt] = useState(false);

  const [comment, setComment] = useState('');
  const [errComment, setErrComment] = useState(false);
  const { step, setStep, userData, setUserData } = useContext(MontageContext);

  const [send, setSend] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [show]);

  const myForm = useRef(null);
  const months = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];
  const message = ['Message sent successfully', 'Error sending message'];
  const [num, setNum] = useState(0);

  const onSubmit = async () => {
    setSend(true);
    const flag = false;

    if (vorname == '') {
      setErrVorname(true);
      flag = true;
    }
    if (email == '') {
      setErrEmail(true);
      flag = true;
    }
    if (plz == '') {
      setErrPlz(true);
      flag = true;
    }
    if (ort == '') {
      setErrOrt(true);
      flag = true;
    }
    if (strabe == '') {
      setErrStrabe(true);
      flag = true;
    }
    if (phone == '') {
      setErrPhone(true);
      flag = true;
    }

    if (flag) {
      setSend(false);
      return;
    }

    const remoteUrl = 'https://jesam-email-server-02bded5c5032.herokuapp.com/success/send';

    const DataToSend = {
      from: 'noreply@jesamconsulting.com',
      to: forEmailMontage,
      subject: 'FE Energiesysteme - MontagePartner',
      html: `    
          MontagePartner 
          Vor- & Nachname:  ${vorname} 
          Telefonnummer :  ${phone} 
          E-Mailadresse:  ${email}                 
          Ort:  ${ort}                 
          Plz:  ${plz}                 
          Straße und Hausnummer:  ${strabe}                 
          Ihr Anliegen:  ${comment}                 
          Kapazität in Ihrer Region:    ${
          userData.step1.option
        } Montage  Ihre Postleitzahl: ${
        userData.step1.post
      }  Ihre Postleitzahl: ${userData.step1.radius} Km 
          Wofür wollen Sie Partner werden?  ${
          userData.step2
        } 
          Was sind Sie?  ${userData.step3} 
          Haben Sie schon in dem Fachgebiet gearbeitet?  ${
          userData.step4
        } 
          Mitarbeiteranzahl:  ${userData.step5} 
          Ihre Kapazitäten pro Woche:  ${userData.step6} 
          Ab wann haben Sie Kapazitäten:  ${
          userData.step7.capacity
        } KW  ${userData.step7.date.getDate()}-${
        months[userData.step7.date.getMonth()]
      }-${userData.step7.date.getFullYear()}     
        `,
    };

    axios
      .post(remoteUrl, DataToSend)
      .then(() => {
        myForm.current.reset();
        setShow(true);
        setFirma('');
        setPhone('');
        setStrabe('');
        setPlz('');
        setOrt('');
        setVorname('');
        setEmail('');
        setOrt('');
        setComment('');
        setNum(0);
        setSend(false);
      })
      .catch((e) => {
        setNum(1);
        setShow(true);
        setSend(false);
      });
  };

  return (
    <>
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
        className={`fixed w-[18rem] text-center py-5 hover:cursor-pointer bottom-10 bg-black bg-opacity-90 rounded-md text-white`}
      >
        {message[num]}
      </motion.div>
      <div className="slider-item" data-show={step == 8 ? true : false}>
        <h3 className="lg:text-4xl md:text-2xl text-xl max-w-xl">
          Wir suchen nach Montagepartnern in Ihrer Region!
        </h3>

        <form ref={myForm} className="md:my-10 my-6">
          <div className="grid md:grid-cols-3 lg:gap-x-16 md:gap-x-6 md:gapy-0 gap-y-6">
            <div>
              <div className="flex flex-col lg:space-y-8 md:space-y-6 space-y-6">
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
                    className={`border outline-none  p-3 mt-2 placeholder-black w-full border-[#d9d9d9] bg-[#EDEDED]`}
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
                      setErrPhone(false);
                    }}
                    placeholder="Telefon"
                    className={`${
                      errPhone ? 'border-red-600 ' : ' border-[#d9d9d9]'
                    } border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED]`}
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="strabe" className="text-sm font-bold">
                      Straße und Hausnummer*
                    </label>
                  </div>
                  <input
                    type="text"
                    id="strabe"
                    onChange={(e) => {
                      setStrabe(e.target.value);
                      setErrStrabe(false);
                    }}
                    placeholder="Straße und Hausnummer*"
                    className={`${
                      errStrabe ? 'border-red-600 ' : ' border-[#d9d9d9]'
                    } border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED]`}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col lg:space-y-8 space-y-6">
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
                      setVorname(e.target.value);
                      setErrVorname(false);
                    }}
                    placeholder="Vor- und Nachname"
                    className={`${
                      errVorname ? 'border-red-600 ' : ' border-[#d9d9d9]'
                    } border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED]`}
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
                      setErrEmail(false);
                    }}
                    placeholder="E-Mail"
                    className={`${
                      errEmail ? 'border-red-600 ' : ' border-[#d9d9d9]'
                    } border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED]`}
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="plz" className="text-sm font-bold">
                      Plz
                    </label>
                  </div>
                  <input
                    type="number"
                    id="plz"
                    onChange={(e) => {
                      setPlz(e.target.value);
                      setErrPlz(false);
                    }}
                    placeholder="Plz"
                    className={`${
                      errPlz ? 'border-red-600 ' : ' border-[#d9d9d9]'
                    } border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED]`}
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
                      setErrOrt(false);
                    }}
                    placeholder="Ort"
                    className={`${
                      errOrt ? 'border-red-600 ' : ' border-[#d9d9d9]'
                    } border outline-none  p-3 mt-2 placeholder-black w-full bg-[#EDEDED]`}
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
                      Anfrage abschicken
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
