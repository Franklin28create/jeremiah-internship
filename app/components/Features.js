import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";

export default function Features() {
    return (
        <section id="features">
      <div className="px-10 py-0">
        <div className="max-w-5xl w-full mx-auto px-0 py-6">
          <div className="text-xl text-[#032b41] text-center mb-8 font-bold md:text-3xl">Understand books in few minutes</div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <AiFillFileText className="w-14 h-13 md:w-16 md:h-15" />
              </div>
              <div className="text-base text-[#032b41] mb-4 font-medium md:text-2xl">Read or listen</div>
              <div className="text-sm text-[#394547] font-light md:text-lg">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <AiFillBulb className="w-14 h-13 md:w-16 md:h-15" />
              </div>
              <div className="text-base text-[#032b41] mb-4 font-medium md:text-2xl">Find your next read</div>
              <div className="text-sm text-[#394547] font-light md:text-lg">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <AiFillAudio className="w-14 h-13 md:w-16 md:h-15" />
              </div>
              <div className="text-base text-[#032b41] mb-4 font-medium md:text-2xl">Briefcasts</div>
              <div className="text-lg text-[#394547] font-light md:text-sm">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div className="[&>*:last-child]:mb-0 flex flex-col md:flex-row gap-8 mb-8 md:gap-20 md:mb-24 mt-15">
            <div className="w-full flex flex-col justify-center">
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Enhance your knowledge</div>
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Achieve greater success</div>
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Improve your health</div>
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">
                Develop better parenting skills
              </div>
              <div className="text-2xl font-medium text-[#6b75b] mb-4">Increase happiness</div>
              <div className="text-2xl font-medium text-[#6b75b] mb-0">
                Be the best version of yourself!
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4] px-10 py-6">
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-1">93%</div>
                <div className="text-sm font-medium mt-1 text-[#394547] md:text-base">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-1">96%</div>
                <div className="text-sm font-medium mt-1 text-[#394547] md:text-base">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-1">90%</div>
                <div className="text-sm font-medium mt-1 text-[#394547] md:text-base">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div className="[&>*:last-child]:mb-0 flex flex-col md:flex-row gap-8 mb-8 md:gap-20 md:mb-24 mt-15">
            <div
              className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4] px-10 py-6 order-1 md:order-0"
            >
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-1">91%</div>
                <div className="text-sm font-medium mt-1 text-[#394547] md:text-base">
                  of Summarist members <b>report feeling more productive</b>
                   after incorporating the service into their daily routine.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-1">94%</div>
                <div className="statistics__data--title">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-bold mt-1">88%</div>
                <div className="text-sm font-medium mt-1 text-[#394547] md:text-base">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col justify-center"
            >
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Expand your learning</div>
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Accomplish your goals</div>
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Strengthen your vitality</div>
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Become a better caregiver</div>
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Improve your mood</div>
              <div className="text-2xl md:text-3xl font-medium text-[#6b75b] mb-4">Maximize your abilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}