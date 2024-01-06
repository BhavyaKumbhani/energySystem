import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { server } from "../../config";
import CardJobs from "../../components/CardJobs";
import CardTeam from "../../components/CardTeam";
import { team } from "../../data/team";
import { jobs } from "../../data";


export default function Karriere() {
  const [jobsData, setJobs] = useState();
  const GetJobs = async () => {
    // const url = `${server}/api/karriere`;
    // const url = `/api/karriere`;
    // const res = await fetch(url);
    // const jobss = await res.json();
    const jobss = jobs;
    setJobs(jobss);
  };
  useEffect(() => {
    GetJobs();
  }, []);
  return (
    <div className="bg-[#EDEDED]">
      <Navbar />
      <Header />
      <div className="lg:py-24 lg:px-48 md:py-14 md:px-10 px-4 py-10">
        <div className="flex md:flex-row flex-col-reverse">
          <div>
            <h1 className="lg:text-4xl md:text-2xl text-xl font-bold md:mt-0 mt-6 md:text-left text-right">
              OFFENE STELLENANGEBOTE
            </h1>
            <p className="text-blue-1 lg:my-4 md:my-2 my-2 md:text-left text-right">
              Du hast Lust, Teil unseres Teams zu werden? Dann bewirb dich jetzt
              bei uns!
            </p>

            <p className="md:text-left text-right">
              Wir haben ein tolles Arbeitsklima, flexible Arbeitszeiten und
              bieten dir die Chance, dich weiterzuentwickeln. Und das Ganze zu
              einem super Gehalt!
            </p>
          </div>
          <div className="lg:flex lg:items-center lg:justify-end	md:block">
            <img className="lg:w-[80%] md:w-[100%] image-details" src="/images/category.jpg" alt="" />
          </div>
        </div>

        {jobsData?.map((el, index) => {
          return (
            <div key={index} className="lg:my-16 md:my-10 my-10">
              <h2 className="lg:text-3xl text-xl font-bold lg:mb-8 md:mb-6 mb-4">
                {el.category}
              </h2>

              <div className="lg:space-y-5 md:space-y-4 space-y-6">
                {el.jobs?.map((otherel, index) => {
                  return (
                    <div key={index} className="mx-2">
                      <h2 className="lg:text-2xl md:text-xl text-lg mb-6">
                        {otherel.subcategory}
                      </h2>

                      <div className="lg:space-y-5 md:space-y-4 space-y-4">
                        {otherel.data.map((card, index) => {
                          console.log("🚀 ~ file: index.js:68 ~ {otherel.data.map ~ card:", card)
                          return (
                            <CardJobs
                              title={card.title}
                              id={card.id}
                              category={card.category}
                              subcategory={card.subcategory}
                              pdf={card.pdf}
                              key={index}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="md:mb-0 mb-20">
          <p className="font-bold mb-2">Dein Ansprechpartner:</p>
          <CardTeam {...team[team.length - 1]} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// export async function getServerSideProps() {
//   const url = `${server}/api/karriere`;
//   const res = await fetch(url);
//   const jobs = await res.json();

//   return { props: { jobs } };
// }
