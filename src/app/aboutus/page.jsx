"use client";
import Hero from "../components/hero";
import { useState } from "react";
export default function AboutUs() {
  //expanded toggles
  const [AboutUs, SetAboutUs] = useState(false);
  const [OurMission, SetOurMission] = useState(false);
  const [WhatToExpect, SetWhatToExpect] = useState(false);
  const [WhyItMatters, SetWhyItMatters] = useState(false);
  //On Click Functions, changes the state
  const toggleAboutUs = () => {
    SetAboutUs(!AboutUs);
  }
  const toggleOurMission = () => { SetOurMission(!OurMission) };
  const toggleWhatToExpect = () => { SetWhatToExpect(!WhatToExpect) };
  const toggleWhyItMatters = () => { SetWhyItMatters(!WhyItMatters) };
  return (<> <main className="max-w-5xl mx-auto my-6 p-4">
    {/*Background box everything sits on*/}
    <div className="hidden wrapper  md:block relative  md:py-30">
      <h1 className="text-4xl text-center">About Us</h1>
      <ul>
        <li className="bg-gradient-to-tl from-orange-0 via-purple-200 to-orange-300 p-4 flex flex-row justify-between space-x-8 border-solid border-1 rounded-xl shadow-sm border-gray-950">
          <div onClick={toggleAboutUs} className="text-center justify-center"><p className="text-4xl">About BSides SWFL</p></div>
          {!AboutUs && (
            <div className="max-w-160"><p className="overflow-hidden truncate max-h-120 justify-center"><strong>BSides Southwest Florida (Bsides SWFL) </strong> is a community-driven cybersecurity conference designed to create space for open conversation, hands-on learning, and professional growth. As part of the global <a href="#">Security BSides</a> movement, our event brings together a diverse mix of security professionals, students, researchers, and curious minds to explore and advance the field of information security.</p></div>)}
          {AboutUs && (<div><p className="justify-center"><strong>BSides Southwest Florida (Bsides SWFL) </strong> is a community-driven cybersecurity conference designed to create space for open conversation, hands-on learning, and professional growth. As part of the global <a href="#">Security BSides</a> movement, our event brings together a diverse mix of security professionals, students, researchers, and curious minds to explore and advance the field of information security.</p></div>)}
        </li>
        <li className="bg-gradient-to-tl from-orange-0 via-purple-200 to-orange-300 p-4 flex flex-row justify-between space-x-8 mt-6 border-solid border-1 rounded-xl shadow-sm border-gray-950">
          <div onClick={toggleOurMission} className="text-center justify-center"><p className="text-4xl">Our Mission</p></div>
          {OurMission && (
            <div className="max-w-180 justify-center"><p className="max-w-180 flex-1">Our mission is to provide a welcoming, inclusive environment where people of all skill levels can connect, share knowledge, and collaborate on solutions to today's cybersecurity challenges. We believe in lowering barriers to entry, uplifting new voices, and creating opportunities to grow and give back to the community.</p></div>)}
          {!OurMission && (
            <div className="max-w-180 justify-center"><p className="overflow-hidden truncate max-w-180 flex-1">Our mission is to provide a welcoming, inclusive environment where people of all skill levels can connect, share knowledge, and collaborate on solutions to today's cybersecurity challenges. We believe in lowering barriers to entry, uplifting new voices, and creating opportunities to grow and give back to the community.</p></div>)}
        </li>
        <li className="bg-gradient-to-tl from-orange-0 via-purple-200 to-orange-300 p-4 flex flex-row justify-between space-x-8 mt-6 border-solid border-1 rounded-xl shadow-sm border-gray-950">
          <div onClick={toggleWhatToExpect} className="text-center justify-center"><p className="text-4xl">What to Expect</p></div>
          {!WhatToExpect && (<div className="max-w-180"><p className="overflow-hidden truncate max-h-180 justify-center">BSides SWFL offers <strong>Engaging Talks, Interactive Villages, Workshops, Opportunites to connect</strong>, etc. Whether You're just beginning your journey or you've been in the industry for years, BSides SWFL is a place where you can share, learn, and be part of something meaningul.</p></div>)}
          {WhatToExpect && (
            <div className="text-center justify-center"><p className="max-w-180 flex-1">Bsides SWFL is a conference built by the community, for the community. We offer:</p>
              <ul className="text-left indent-3 list-disc">
                <li><strong>Engaging Talks</strong> on timely and relevant cybersecurity topics.</li>
                <li><strong>Interactive Villages</strong> and hands-on activities.</li>
                <li><strong>Workshops</strong> that let attendees apply what they learn.</li>
                <li><strong>Opportunities to Connect</strong> with peers, mentors, and industry experts.</li>
              </ul>
              <p className="max-w-180 flex-1">Whether you're just beginning your journey or you've been in the industry for years, BSides SWFL is a place where you can share, learn, and be part of something meaningful.
              </p></div>)}
        </li>
        <li className="bg-gradient-to-tl from-orange-0 via-purple-200 to-orange-300 p-4 flex flex-row justify-between space-x-8 mt-6 border-solid border-1 rounded-xl shadow-sm border-gray-950">
          <div onClick={toggleWhyItMatters} className="text-center justify-center"><p className="truncate text-4xl">Why It Matters</p></div>
          {WhyItMatters && (
            <div className="max-w-180  text-center justify-center"><p className="flex-1">Traditional conferences often come with barriers: cost, exclusivity, or limited speaker slots. BSides flips the script by offering a platform where more voices can be heard, and more people can participate. We're here to celebrate curiosity, encourage growth, and help build a stronger, more resilient security community in Southwest Florida.</p></div>)}
          {!WhyItMatters && (
            <div className="max-w-160  text-center justify-center"><p className="overflow-hidden truncate flex-1">Traditional conferences often come with barriers: cost, exclusivity, or limited speaker slots. BSides flips the script by offering a platform where more voices can be heard, and more people can participate. We're here to celebrate curiosity, encourage growth, and help build a stronger, more resilient security community in Southwest Florida.</p></div>)}
        </li>
      </ul>
    </div>
    {/*Mobile side*/}
    <div className="visible sm:block md:invisible relative  md:py-30">
      <h1 className="text-4xl text-center">About Us</h1>
      <ul>
        <li className="p-4 flex flex-col justify-between space-x-8 border-solid border-1 rounded-xl shadow-sm border-gray-950">
          <div onClick={toggleAboutUs} className="text-center justify-center"><p className="text-4xl">About BSides SWFL</p></div>
          {!AboutUs && (
            <div><p className="overflow-hidden truncate max-h-180 justify-center"><strong>BSides Southwest Florida (Bsides SWFL) </strong> is a community-driven cybersecurity conference designed to create space for open conversation, hands-on learning, and professional growth. As part of the global <a href="#">Security BSides</a> movement, our event brings together a diverse mix of security professionals, students, researchers, and curious minds to explore and advance the field of information security.</p></div>
          )}
          {AboutUs && (
            <div><p className="max-Zh-180 justify-center"><strong>BSides Southwest Florida (Bsides SWFL) </strong> is a community-driven cybersecurity conference designed to create space for open conversation, hands-on learning, and professional growth. As part of the global <a href="#">Security BSides</a> movement, our event brings together a diverse mix of security professionals, students, researchers, and curious minds to explore and advance the field of information security.</p></div>
          )}</li>
        <li className="p-4 flex flex-col justify-between space-x-8 border-solid border-1 rounded-xl shadow-sm border-gray-950">
          <div onClick={toggleOurMission} className="text-center justify-center"><p className="turncate text-4xl">Our Mission</p></div>
          {!OurMission && (
            <div><p className="overflow-hidden truncate max-h-180 justify-center">Our mission is to provide a welcoming, inclusive environment where people of all skill levels can connect, share knowledge, and collaborate on solutions to today's cybersecurity challenges. We believe in lowering barriers to entry, uplifting new voices, and creating opportunities to grow and give back to the community</p></div>)}
          {OurMission && (
            <div><p className="max-h-180 justify-center">Our mission is to provide a welcoming, inclusive environment where people of all skill levels can connect, share knowledge, and collaborate on solutions to today's cybersecurity challenges. We believe in lowering barriers to entry, uplifting new voices, and creating opportunities to grow and give back to the community</p></div>)}</li>
        <li className="p-4 flex flex-col justify-between space-x-8 border-solid border-1 rounded-xl shadow-sm border-gray-950">
          <div onClick={toggleWhatToExpect} className="text-center justify-center"><p className="turncate text-4xl">What To Expect</p></div>
          {!WhatToExpect && (<div><p className="overflow-hidden truncate max-h-180 justify-center">BSides SWFL offers <strong>Engaging Talks, Interactive Villages, Workshops, Opportunites to connect</strong></p></div>)}
          {WhatToExpect && (
            <div><p className="max-h-180 justify-center">Bsides SWFL is a conference built by the community, for the community. We offer:</p>
              <ul className="text-left indent-3 list-disc">
                <li><strong>Engaging Talks</strong> on timely and relevant cybersecurity topics.</li>
                <li><strong>Interactive Villages</strong> and hands-on activities.</li>
                <li><strong>Workshops</strong> that let attendees apply what they learn.</li>
                <li><strong>Opportunities to Connect</strong> with peers, mentors, and industry experts.</li>
              </ul>
              <p className="max-w-180 flex-1">Whether you're just beginning your journey or you've been in the industry for years, BSides SWFL is a place where you can share, learn, and be part of something meaningful.
              </p>
            </div>)}
        </li>
        <li className="p-4 flex flex-col justify-between space-x-8 border-solid border-1 rounded-xl shadow-sm border-gray-950">
          <div onClick={toggleWhyItMatters} className="text-center justify-center"><p className="turncate text-4xl">Why It Matters</p></div>
          {WhyItMatters == false && (
            <div><p className="overflow-hidden truncate max-h-180 justify-center">Traditional conferences often come with barriers: cost, exclusivity, or limited speaker slots. BSides flips the script by offering a platform where more voices can be heard, and more people can participate. We're here to celebrate curiosity, encourage growth, and help build a stronger, more resilient security community in Southwest Florida</p></div>)}
          {WhyItMatters && (
            <div><p className="max-h-180 justify-center">Traditional conferences often come with barriers: cost, exclusivity, or limited speaker slots. BSides flips the script by offering a platform where more voices can be heard, and more people can participate. We're here to celebrate curiosity, encourage growth, and help build a stronger, more resilient security community in Southwest Florida</p>
            </div>)}
        </li>
      </ul>
    </div>
  </main>
  </>)
}