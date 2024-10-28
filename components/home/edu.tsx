export const Education = () => {
    return (
        <section className="flex flex-col gap-x-8 pb-52 gap-y-2 xl:mt-32 font-inter scroll-mt-12 lg:scroll-mt-48" id="education">
          <h2 className="font-inter font-medium text-3xl mt-4 text-center lg:text-left">
            Educational Background🎓
          </h2>
        <div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#393042] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 dark:bg-emerald-600 dark:text-emerald-100 rounded-full">2018 - 2023</time>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-200">Secondary & High School</div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#313638] dark:text-[#e0e0e0] font-medium"><a href="https://psuwit.ac.th/">PSU.Wittayanusorn School</a></span>
                  <span className="text-[#525a5e] dark:text-[#b7bfc4]">Hat Yai, Thailand</span>
              </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#393042] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 dark:bg-emerald-600 dark:text-emerald-100 rounded-full">present</time>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-200">Bachelor's degree (current)</div>
              </div>
              <div className="flex flex-col">
                  <span className="text-[#313638] dark:text-[#e0e0e0] font-medium"><a href="https://kmutt.ac.th/">King Mongkut's University of Technology Thonburi</a></span>
                  <span className="text-[#525a5e] dark:text-[#b7bfc4]"><a href="https://www.cpe.kmutt.ac.th/en/">B.Eng, Computer Engineering</a></span>
                  <span className="text-[#525a5e] dark:text-[#b7bfc4]">Bangkok, Thailand</span>
              </div>
          </div>
        </div>
      </section>
    )
}