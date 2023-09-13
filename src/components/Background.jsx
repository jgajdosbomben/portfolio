import React from "react";
import { education, work } from "../data";

const Background = () => {
  return (
    <div className="p-10 text-black dark:text-white">
      <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-800 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-rose-300 to-purple-800 text-center leading-tight pb-10">
        Background
      </h1>

      <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-10 pl-10">
        {/* <!-- Vertical Timeline #1 --> */}
        <div className="-my-6">
          <h1 className="text-center font-bold text-2xl underline decoration-solid pb-3">Education</h1>
          {/* <!-- Item #1 --> */}
          <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
            {/* Title*/}
            <div className="font-bold text-xl text-black dark:text-white mb-1 sm:mb-0">Full Stack Developer Program</div>
            {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-14 mb-3 sm:mb-0 text-black text-center bg-[#e1aabb] rounded-lg">
                Feb 2023
                <br /> - <br />
                Jul 2023&nbsp;
              </time>
              <div className="text-lg text-black dark:text-white">InceptionU</div>
            </div>
            {/* Description*/}
            <div className="text-black dark:text-white">
              Project based professional development program with a focus on the "MERN" stack (JavaScript, React, HTML, CSS,
              ExpressJS, NodeJS, MongoDB), as well and essential skills such as agile development, scrum methodology, critical
              thinking, systems thinking, and computational thinking.
            </div>
          </div>

          {/* <!-- Item #2 --> */}
          <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
            {/* Title*/}
            <div className="font-bold text-xl text-black dark:text-white  mb-1 sm:mb-0"> Essentials of RIM Certificate</div>
            {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-14 mb-3 sm:mb-0 text-black bg-[#e1aabb] rounded-lg">
                2013
              </time>
              <div className="text-lg text-black dark:text-white">ARMA International</div>
            </div>
            {/* Description*/}
            <div className="text-black dark:text-white">
              Completed certificate on the subject of the fundamentals of Records and Information Management.
            </div>
          </div>

          {/* <!-- Item #3 --> */}
          <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
            {/* Title*/}
            <div className="font-bold text-xl text-black dark:text-white  mb-1 sm:mb-0">
              B.Sc. Applied Mathematics, Dance Minor
            </div>
            {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-20 h-14 mb-3 sm:mb-0 text-black bg-[#e1aabb] rounded-lg">
                June 2008
              </time>
              <div className="text-lg text-black dark:text-white">University of Calgary</div>
            </div>
            {/* Description*/}
            <div className="text-black dark:text-white">Completed undergraduate degree.</div>
          </div>
        </div>
        {/* End of Education timeline*/}

        {/* Beginning of Experience Timeline */}
        <div className="pt-10 sm:pt-0">
          <div className="-my-6">
            {/* <!-- Item #1 --> */}
            <h1 className="text-center font-bold text-2xl underline decoration-solid pb-3">Experience</h1>
            <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
              {/* Title*/}
              <div className="font-bold text-xl text-black dark:text-white  mb-1 sm:mb-0">Medical Legal Records Technician</div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-14 mb-3 sm:mb-0 text-black text-center bg-[#e1aabb] rounded-lg">
                  Apr 2016 <br /> - <br />
                  Feb 2023
                </time>
                <div className="text-lg text-black dark:text-white">Office of the Chief Medical Examiner</div>
              </div>
              {/* Description*/}
              <div className="text-black dark:text-white">
                Managed files related to death investigations in accordance with government regulations. Communicated with next of
                kin and stakeholders regarding confidential information. Acted as interim supervisor of Records unit from Sep 2016
                to Sep 2017.{" "}
              </div>
            </div>

            {/* <!-- Item #2 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
              {/* Title*/}
              <div className="font-bold text-xl text-black dark:text-white  mb-1 sm:mb-0">Records Analyst</div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-20 h-14 mb-3 sm:mb-0 text-black text-center bg-[#e1aabb] rounded-lg">
                  Aug 2011
                  <br /> - <br />
                  Jan 2016
                </time>
                <div className="text-lg text-black dark:text-white">ARC Resources Ltd.</div>
              </div>
              {/* Description*/}
              <div className="text-black dark:text-white">
                Responsible for information governance including business classification and retention schedule, legal research,
                policies, procedures, and business continutity planning. Executed acquisition/divestment and retention/destruction
                projects, RIM maturity assessments, inventories of sensitive records, training of staff, and reports to
                management.{" "}
              </div>
            </div>

            {/* <!-- Item #3 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
              {/* Title*/}
              <div className="font-bold text-xl text-black dark:text-white  mb-1 sm:mb-0">Records and Information Technician</div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-20 h-14 mb-3 sm:mb-0 text-black text-center bg-[#e1aabb] rounded-lg">
                  Feb 2011
                  <br /> - <br />
                  Aug 2011
                </time>
                <div className="text-lg text-black dark:text-white">ARC Resources Ltd.</div>
              </div>
              {/* Description*/}
              <div className="text-black dark:text-white">
                Managed daily operations of file collections including the life cycle of records, requests, and corresponding with
                business units.
              </div>
            </div>

            {/* <!-- Item #4 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
              {/* Title*/}
              <div className="font-bold text-xl text-black dark:text-white  mb-1 sm:mb-0">Records and Information Technician</div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-20 h-14 mb-3 sm:mb-0 text-black text-center bg-[#e1aabb] rounded-lg">
                  May 2010
                  <br /> - <br />
                  Dec 2010
                </time>
                <div className="text-lg text-black dark:text-white">
                  DMA Canada Ltd. - Contract executed at Pengrowth Energy Corp.
                </div>
              </div>
              {/* Description*/}
              <div className="text-black dark:text-white">
                Analyzed and audited well files and converted them into the new physical record format.
              </div>
            </div>
            {/* <!-- Item #5 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
              {/* Title*/}
              <div className="font-bold text-xl text-black dark:text-white  mb-1 sm:mb-0">Customer Service Representative</div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-20 h-14 mb-3 sm:mb-0 text-black text-center bg-[#e1aabb] rounded-lg">
                  Dec 2009
                  <br /> - <br />
                  Apr 2010
                </time>
                <div className="text-lg text-black dark:text-white">BMO Bank of Montreal</div>
              </div>
              {/* Description*/}
              <div className="text-black dark:text-white">
                Assisted customers with their banking needs and executed numerous banking processes.
              </div>
            </div>

            {/* <!-- Item #6 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group hover:-translate-y-0.5 hover:scale-100 hover:bg-[#f4dddd] duration-300 hover:dark:bg-inherit">
              {/* Title*/}
              <div className="font-bold text-xl text-black dark:text-white  mb-1 sm:mb-0">Dance Teacher</div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-600 before:dark:bg-neutral-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-[#620646] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-20 h-14 mb-3 sm:mb-0 text-black text-center bg-[#e1aabb] rounded-lg">
                  Sep 2006
                  <br /> - <br />
                  Sep 2007
                </time>
                <div className="text-lg text-black dark:text-white">Airborne Dance Studio</div>
              </div>
              {/* Description*/}
              <div className="text-black dark:text-white">
                Educated students aged 5-6 on introductory ballet repertoire and planned choreography for year end recital.{" "}
              </div>
            </div>
          </div>
          {/* <!-- End: Vertical Timeline #1 --> */}
        </div>
      </div>
    </div>
  );
};

export default Background;
