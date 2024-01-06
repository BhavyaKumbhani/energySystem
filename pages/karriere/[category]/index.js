import React, { useState, useEffect, useRef } from "react";
import { server } from "../../../config";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { forEmail } from "../../../config";
import { forEmailBewerbung } from "../../../config";
import { sendFormFile } from "../../../components/global/sendFormFile";
import { motion } from "framer-motion";
import disableScroll from "disable-scroll";
import CardTeam from "../../../components/CardTeam";
import { team } from "../../../data/team";
import { jobs } from "../../../data";
import axios from "axios";

// export const getServerSideProps = async (context) => {
//   const { category, subcategory } = context.query;

//   const url = `${server}/api/karriere/${category}`;
//   const aux = await fetch(url).then((data) => data?.json());
//   const jobs = aux.data[0].jobs.filter((item) => item.id == subcategory);

//   return {
//     props: { jobs },
//   };
// };

// export const getStaticPaths = async (context) => {
//   const paths = jobs?.length
//     ? jobs?.map((item) => ({
//         params: {
//           category: item?.id.toString(),
//         },
//       }))
//     : {
//         paths: [],
//         fallback: false,
//       };
//   console.log("🚀 ~ file: [category].js:31 ~ getStaticProps ~ paths:", paths);

//   return { paths: paths || [], fallback: false };
// };

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [active, setActive] = useState(1);

  const [vorname, setVorname] = useState("");
  const [errVor, setErrVor] = useState(false);

  const [nach, setNach] = useState("");
  const [errNach, setErrNach] = useState("");

  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(false);

  const [phone, setPhone] = useState("");
  const [errPhone, setErrPhone] = useState(false);

  const [comment, setComment] = useState("");

  const [errFile, setErrFile] = useState(false);

  const myForm = useRef(null);
  const [num, setNum] = useState(0);
  const [send, setSend] = useState(false);
  const message = ["Message sent successfully", "Error sending message"];
  const [show, setShow] = useState(false);

  const labelFile = (
    <div className="text-center">
      <div>Eine Datei Hochladen</div>
      <div>oder per Drag-and-Drop hierher ziehen</div>
    </div>
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [active]);

  useEffect(() => {
    if (show) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [show]);

  const [cv64, setcv64] = useState(null);
  const [selectCv, setSelectCv] = useState(". . .");
  const [pathCv, setPathCv] = useState(null);
  const [agree, setAgree] = useState(false);

  const handleFile = (event, setSelection, setPath, setBloob) => {
    if (event.target.files && event.target.files[0]) {
      const fichero_path_usuario = event.target.files[0];
      setSelection(fichero_path_usuario.name);

      setPath(fichero_path_usuario);

      const reader = new FileReader();
      reader.onload = function (event) {
        let fichero = event.target.result.toString();
        let base64data = btoa(fichero);
        setBloob(base64data);
      };
      reader.readAsBinaryString(fichero_path_usuario);
    }
  };

  const onSubmit = async () => {
    let flag = false;
    setSend(true);

    if (!agree) {
      flag = true;
    }

    if (vorname == "") {
      flag = true;
      setErrVor(true);
    }
    if (nach == "") {
      setErrNach(true);
      flag = true;
    }
    if (phone == "") {
      setErrPhone(true);
      flag = true;
    }
    if (email == "") {
      setErrEmail(true);
      flag = true;
    }
    if (selectCv == ". . .") {
      setErrFile(true);
      flag = true;
    }

    if (flag) {
      setSend(false);
      return;
    }
    const remoteUrl =
      "https://jesam-email-server-02bded5c5032.herokuapp.com/success/send";

    const DataToSend = {
      from: "noreply@jesamconsulting.com",
      to: forEmailBewerbung,
      filename: selectCv,
      file: cv64,
      subject: "FE Energiesysteme",
      html: `    
        FE Energiesysteme  
        Bewerbung:  ${data?.title} 
        Vorname:  ${vorname} 
        Nachname:  ${nach} 
        Telefon:  ${phone}    
        E-Mail:  ${email} 
        Ihr Bewerbungsschreiben:  ${comment} 
        `,
    };
    axios
      .post(remoteUrl, DataToSend)
      .then(() => {
        setSend(false);
        myForm.current.reset();
        setVorname("");
        setNach("");
        setPhone("");
        setEmail("");
        setSelectCv(". . .");
        setPathCv(null);
        setComment("");
        setShow(true);
        setNum(0);
        setSend(false);
      })
      .catch((e) => {
        setNum(1);
        setShow(true);
        setSend(false);
      });
  };
  const getData = async (url) => {
    const { category, subcategory, id } = router.query;

    // const aux = await fetch(url).then((data) => data?.json());
    const data = jobs.filter((item) => item.id == category);
    const jobsData = data?.[0]?.jobs?.filter((item) => item?.id == subcategory);
    const filterJobs = jobsData?.[0]?.data?.filter((item) => item?.id == id);
    setData(filterJobs);
  };
  let newData;
  useEffect(() => {
    console.log("router", router);
    if (!router.isReady) return;
    const { category, subcategory, id } = router.query;
    console.log("routerquery", router.query);
    newData = { id, category, subcategory };
    const url = `/api/karriere/${newData.category}`;
    getData(url);
  }, [router.isReady]);

  return (
    <div className="bg-[#EDEDED] relative">
      <motion.div
        onClick={() => {
          if (num == 0) {
            router.push("/karriere");
          }
          setShow(false);
        }}
        initial={{
          y: 100,
          left: "50%",
          translateX: "-50%",
          opacity: 0,

          zIndex: -1,
        }}
        animate={{
          y: show ? 0 : 100,
          left: "50%",
          translateX: "-50%",
          opacity: show ? 1 : 0,
          zIndex: show ? 60 : -1,
          transition: {
            ease: "easeInOut",
            duration: 0.6,
          },
        }}
        className={`fixed w-[18rem] text-center py-5 hover:cursor-pointer bottom-10 bg-black bg-opacity-90 rounded-md text-white`}
      >
        {message[num]}
      </motion.div>
      <Header />
      <Navbar />
      {
        <div className="lg:py-24 md:py-14 lg:px-48 md:px-10 bg-[#EDEDED] px-4 py-10">
          <h1 className="lg:text-4xl md:text-2xl text-xl">{data?.title}</h1>
          <div className="flex lg:flex-row flex-col-reverse w-full relative">
            <div className="relative">
              <div className="flex lg:my-10 md:my-8 my-6">
                <div
                  data-active={active === 1 ? true : false}
                  onClick={() => {
                    setActive(1);
                  }}
                  className="selecter border hover:cursor-pointer border-blue-1 px-10 py-2  rounded-l-md lg:text-base text-sm"
                >
                  ÜBERSICHT
                </div>
                <div
                  data-active={active === 2 ? true : false}
                  onClick={() => {
                    setActive(2);
                  }}
                  className="selecter border hover:cursor-pointer border-blue-1 px-10 py-2 rounded-r-md text-blue-1 lg:text-base text-sm"
                >
                  BEWERBUNG
                </div>
              </div>
            </div>
          </div>

          <div className="w-full relative overflow-hidden">
            <div
              data-active={active}
              className="slider flex w-[200%] space-x-4 overflow-hidden"
            >
              <div
                className={`w-full ${
                  active != 1 ? "h-0 overflow-hidden" : "h-auto"
                }`}
              >
                {data?.length > 0 &&
                  data?.map((item, index) => {
                    return (
                      <div
                        className="md:w-[75%] w-full lg:pb-20 md:pb-24"
                        key={index}
                      >
                        <h3 className="lg:text-2xl md:text-xl mb-4 font-bold">
                          {item?.title}
                        </h3>
                        <p>{item?.description}</p>
                        <h3 className="mt-4 lg:text-xl md:text-lg font-bold">
                          {item?.title1}
                        </h3>
                        <h3 className="lg:text-xl md:text-lg font-bold">
                          {item?.title2}
                        </h3>

                        {item?.points?.map((el, index) => (
                          <div key={index} className="lg:my-8 md:my-6 my-4 ">
                            <p className="lg:mb-4 md:mb-3 mb-2">{el?.title}</p>
                            <ul className="list-outside px-6">
                              {el?.text.map((p, index) => (
                                <li key={index} className="list-disc my-1">
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="flex flex-col">
                          <div>
                            <div className="flex justify-start pr-[5rem] lg:py-4 md:py-4 py-3">
                              <div
                                onClick={() => {
                                  setActive(2);
                                }}
                                className="border border-blue-1 md:py-3.5 py-3 w-[17rem] text-center rounded-md bg-blue-1 text-white hover:cursor-pointer hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150"
                              >
                                Auf diese Stelle bewerben
                              </div>
                            </div>
                          </div>
                          <div className="md:mb-0 mb-20 lg:mt-7 md:mt-5 mt-4">
                            <p className="font-bold mb-2">
                              Dein Ansprechpartner:
                            </p>
                            <CardTeam {...team[team.length - 1]} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div
                className={`w-full lg:pb-12 md:pb-24 ${
                  active != 2 ? "h-0 overflow-hidden" : "h-auto"
                }`}
              >
                <div className="md:w-[75%] w-full">
                  <form ref={myForm} className="md:w-[40rem]">
                    <p className="text-xs font-bold md:pl-5 pl-3">
                      * Pflichtfelder
                    </p>
                    <p className="font-bold my-1">Persönliche Angaben</p>

                    <div className="flex md:flex-row flex-col mt-8 lg:space-x-16 md:space-x-10 md:space-y-0 space-y-5 w-full">
                      <div className="md:w-1/2 w-full">
                        <div className="mb-1">
                          <label htmlFor="vorname" className="text-xs">
                            Vorname
                          </label>
                        </div>
                        <input
                          type="text"
                          onChange={(e) => {
                            setVorname(e.target.value);
                            if (errVor) {
                              setErrVor(false);
                            }
                          }}
                          id="vorname"
                          placeholder="Vorname"
                          className={`border outline-none bg-[#EDEDED]  rounded-md py-3 px-3 w-full placeholder-black ${
                            errVor ? " border-red-600 " : " border-[#D9D9D9] "
                          }`}
                        />
                      </div>
                      <div className="md:w-1/2 w-full">
                        <div className="mb-1">
                          <label htmlFor="nach" className="text-xs">
                            Nachname
                          </label>
                        </div>
                        <input
                          type="text"
                          onChange={(e) => {
                            setNach(e.target.value);
                            if (errNach) {
                              setErrNach(false);
                            }
                          }}
                          id="nach"
                          placeholder="Nachname"
                          className={`border outline-none bg-[#EDEDED] ${
                            errNach ? " border-red-600 " : " border-[#D9D9D9] "
                          } rounded-md py-3 px-3 w-full placeholder-black`}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="mb-1">
                        <label htmlFor="email" className="text-xs">
                          E-Mail Adresse
                        </label>
                      </div>
                      <input
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errEmail) {
                            setErrEmail(false);
                          }
                        }}
                        id="email"
                        placeholder="E-Mail Adresse"
                        className={`border outline-none bg-[#EDEDED]  rounded-md py-3 px-3 w-full placeholder-black ${
                          errEmail ? " border-red-600 " : " border-[#D9D9D9] "
                        }`}
                      />
                    </div>
                    <div className="mt-5">
                      <div className="mb-1">
                        <label htmlFor="phone" className="text-xs">
                          Telefonnummer
                        </label>
                      </div>
                      <input
                        type="number"
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errPhone) {
                            setErrPhone(false);
                          }
                        }}
                        id="phone"
                        placeholder="Telefonnummer"
                        className={`border outline-none bg-[#EDEDED] rounded-md py-3 px-3 w-full placeholder-black ${
                          errPhone ? " border-red-600 " : " border-[#D9D9D9] "
                        }`}
                      />
                    </div>
                    <div className="font-bold mt-8">Profil</div>
                    <div
                      onDrop={(e) => {
                        e.preventDefault();
                        if (errFile) {
                          setErrFile(false);
                        }

                        if (e.dataTransfer.files.length >= 2) {
                        }

                        if (
                          e.dataTransfer.files &&
                          e.dataTransfer.files.length < 2
                        ) {
                          const fichero_path_usuario = e.dataTransfer.files[0];
                          setSelectCv(fichero_path_usuario.name);

                          setPathCv(fichero_path_usuario);

                          var reader = new FileReader();
                          reader.onload = function (event) {
                            let fichero = event.target.result.toString();
                            let base64data = btoa(fichero);
                            setcv64(base64data);
                          };
                          reader.readAsBinaryString(fichero_path_usuario);
                        }
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                      }}
                      className="flex items-center  relative  outline-none lg:my-4 md:my-3 space-x-4 my-6"
                    >
                      <div className="flex justify-center flex-col w-full">
                        <label htmlFor="archivo1" className="my-2">
                          <span className="mx-auto text-xs">Lebenslauf *</span>
                        </label>
                        <label
                          htmlFor="archivo1"
                          className={`py-8 outline-none border-2 ${
                            errFile ? " border-red-600 " : " border-[#D9D9D9] "
                          } border-dashed w-full rounded-md px-3 bg-opacity-[12%] bg-[#EDEDED] placeholder-black text-sm`}
                        >
                          <div className="mx-auto text-center">
                            {selectCv === ". . ." ? labelFile : selectCv}
                          </div>
                        </label>
                      </div>
                      <input
                        id="archivo1"
                        type="file"
                        accept=".doc,.docx,.pdf, .txt"
                        onChange={(e) => {
                          if (errFile) {
                            setErrFile(false);
                          }
                          handleFile(e, setSelectCv, setPathCv, setcv64);
                        }}
                        className="hidden"
                      />
                    </div>

                    <div className="mt-8">
                      <div className="mb-3">
                        <label htmlFor="" className="text-base font-bold">
                          Ihr Bewerbungsschreiben
                        </label>
                      </div>
                      <textarea
                        rows={4}
                        className="border outline-none resize-none bg-blue-1 bg-opacity-10 border-blue-1 border-opacity-10 rounded-md py-2 px-3 w-full placeholder-black"
                      />
                    </div>

                    <div className="mt-4 relative">
                      <label className="container_check text-xs font-visby">
                        Mit dem Absenden meiner Anfrage akzeptiere ich die AGB
                        und, dass ich die Datenschutzerklärung zur Kenntnis
                        genommen habe.
                        <input
                          type="checkbox"
                          className="hidden"
                          onChange={(e) => {
                            setAgree(e.target.value);
                          }}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>

                    <div className="flex flex-col">
                      <div>
                        <div className="flex md:mt-5 mt-4">
                          <div
                            onClick={() => {
                              if (!send) {
                                onSubmit();
                              }
                            }}
                            className={`border relative border-blue-1 py-3.5 w-[17rem] text-center rounded-md bg-blue-1 text-white ${
                              send
                                ? " hover:cursor-not-allowed "
                                : " hover:cursor-pointer "
                            } hover:bg-[#EDEDED] hover:text-blue-1 transition-all ease-in-out duration-150`}
                          >
                            <div
                              className={`absolute left-1/2 -translate-x-1/2 ${
                                send ? " block " : " hidden "
                              }`}
                            >
                              <svg
                                className={`animate-spin h-6 w-6 ${
                                  send ? " hover:text-blue-1 " : " text-white "
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
                              className={`${
                                send ? " opacity-0 " : " opacity-100 "
                              }`}
                            >
                              Bewerbung abschicken
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="md:mb-0 mb-20 lg:mt-7 md:mt-5 mt-4">
                        <p className="font-bold mb-2">Dein Ansprechpartner:</p>
                        <CardTeam {...team[team.length - 1]} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}
