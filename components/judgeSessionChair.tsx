"use client";
import React, { useState } from "react";
import MainTitle from "@/common/mainTitle";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { judgeSessionChair } from "@/lib/data";

export default function JudgeSessionChair() {
  const { sectionRefs } = useActiveSectionContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sortedConferenceData = [...judgeSessionChair].sort(
    (a, b) => parseInt(b.date) - parseInt(a.date)
  );

  return (
    <>
      <div
        className="mb-24 scroll-mt-10"
        ref={(el) => (sectionRefs.current["JUDGE (Session Chair)"] = el)}
        id="judgeChair"
      >
        <MainTitle
          heading={{ title: "JUDGE (Session Chair)", icon: FaMicrophoneAlt }}
        />
        <div className="mt-12">
          {/* {sortedConferenceData.map((conf, index) => (
            <div
              className="dark:bg-[#212529] bg-[#F8F9FA] p-6 rounded-lg w-full mb-6 cursor-pointer transition-all duration-300"
              onClick={() => toggleAccordion(index)}
              key={index}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h2 className="text-2xl font-bold text-[#212529] dark:text-white">
                  {conf?.conferenceName} | {conf?.event}
                </h2>
              </div>

              <p className="text-gray-400 text-sm mt-2">
                {conf?.role} | {conf?.event}
              </p>

              <div className="mt-3">
                <span className="bg-yellow text-black px-3 py-1 text-sm font-semibold rounded-md">
                  {conf?.date}
                </span>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <hr className="my-4 border-gray-700" />
                <p className="text-[#212529] dark:text-white">
                  {conf?.conferenceSortName} {" | "}
                  <span className="text-yellow-400 font-semibold">
                    {conf?.conferenceName}
                  </span>
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
      <hr className="mb-24 dark:bg-white bg-black dark:opacity-10" />
    </>
  );
}
