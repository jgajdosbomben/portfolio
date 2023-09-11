import React from "react";
import { education, work } from "../data";

const Background = () => {
  return (
    <div>
      <h1 className="text-black dark:text-white text-3xl text-center font-bold px-10 py-10">Background</h1>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col flex-wrap justify-center divide-y divide-slate-200 [&>*]:py-8">
          <div className="w-full max-w-5xl mx-10">
            <div className="flex gap-10 flex-wrap md:flex-nowrap">
              {/* <!-- Vertical Timeline #1 --> */}
              <div className="-my-6">
                <h1 className="text-center font-bold text-2xl">Education</h1>
                {/* <!-- Item #1 --> */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  {/* Title*/}
                  <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">Full Stack Developer Program</div>
                  {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                      Feb 2023 - Jul 2023
                    </time>
                    <div className="text-lg text-black">InceptionU</div>
                  </div>
                  {/* Description*/}
                  <div className="text-black">Project based program with a focus on the MERN stack. </div>
                </div>

                {/* <!-- Item #2 --> */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  {/* Title*/}
                  <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">Certificate Holder - Essentials of RIM</div>
                  {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                      2013
                    </time>
                    <div className="text-lg text-black">ARMA International</div>
                  </div>
                  {/* Description*/}
                  <div className="text-black">
                    Completed certificate on the subject of the fundamentals of Records and Information Management.
                  </div>
                </div>

                {/* <!-- Item #3 --> */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  {/* Title*/}
                  <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">
                    Bachelor of Science - Applied Mathematics, Dance Minor
                  </div>
                  {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                      June 2008
                    </time>
                    <div className="text-lg text-black">University of Calgary</div>
                  </div>
                  {/* Description*/}
                  <div className="text-black">Completed my undergraduate degree.</div>
                </div>
              </div>
              {/* End of Education timeline*/}

              {/* Beginning of Experience Timeline */}
              <div className="w-full max-w-5xl mx-5">
                <div className="-my-6">
                  {/* <!-- Item #1 --> */}
                  <h1 className="text-center font-bold text-2xl">Experience</h1>
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    {/* Title*/}
                    <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">Medical Legal Records Technician</div>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                        Apr 2016 - Feb 2023
                      </time>
                      <div className="text-lg text-black">Office of the Chief Medical Examiner</div>
                    </div>
                    {/* Description*/}
                    <div className="text-black">Description of job</div>
                  </div>

                  {/* <!-- Item #2 --> */}
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    {/* Title*/}
                    <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">Records Analyst</div>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                        Aug 2011 - Jan 2016
                      </time>
                      <div className="text-lg text-black">ARC Resources Ltd.</div>
                    </div>
                    {/* Description*/}
                    <div className="text-black">Description of job</div>
                  </div>

                  {/* <!-- Item #3 --> */}
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    {/* Title*/}
                    <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">Records and Information Technician</div>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                        Feb 2011 - Aug 2011
                      </time>
                      <div className="text-lg text-black">ARC Resources Ltd.</div>
                    </div>
                    {/* Description*/}
                    <div className="text-black">Description of job</div>
                  </div>

                  {/* <!-- Item #4 --> */}
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    {/* Title*/}
                    <div className="font-bold text-lg text-bg-rose-800  mb-1 sm:mb-0">Records and Information Technician</div>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                        May 2010 - Dec 2010
                      </time>
                      <div className="text-lg text-black">DMA Canada Ltd. - Contract executed at Pengrowth Energy Corp.</div>
                    </div>
                    {/* Description*/}
                    <div className="text-black">Description of job</div>
                  </div>
                  {/* <!-- Item #5 --> */}
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    {/* Title*/}
                    <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">Customer Service Representative</div>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                        Dec 2009 - Apr 2010
                      </time>
                      <div className="text-lg text-black">BMO Bank of Montreal</div>
                    </div>
                    {/* Description*/}
                    <div className="text-black">Description of job</div>
                  </div>

                  {/* <!-- Item #7 --> */}
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    {/* Title*/}
                    <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">Dance Teacher</div>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                        Sep 2006 - Sep 2007
                      </time>
                      <div className="text-lg text-black">Airborne Dance Studio</div>
                    </div>
                    {/* Description*/}
                    <div className="text-black">Description of job</div>
                  </div>

                  {/* <!-- Item #8 --> */}
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    {/* Title*/}
                    <div className="font-bold text-xl text-bg-rose-800  mb-1 sm:mb-0">Medical Legal Records Technician</div>
                    {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-rose-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-rose-300 rounded-full">
                        Apr 2016 - Feb 2023
                      </time>
                      <div className="text-lg text-black">Office of the Chief Medical Examiner</div>
                    </div>
                    {/* Description*/}
                    <div className="text-black">Description of job</div>
                  </div>
                </div>
                {/* <!-- End: Vertical Timeline #1 --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
