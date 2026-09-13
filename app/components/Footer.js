export default function Footer() {
  return (
    <section className="bg-gray-100">
      <div className="px-10 w-full">
        <div className="max-w-5xl w-full mx-auto py-6">
          <div className="relative flex justify-between text-sm mt-8 mx-auto mb-16">
            <div className="z-1 ">
              <div className="font-semibold mb-4 text-base text-[#032b41]">Actions</div>
              <div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Summarist Magazine</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Cancel Subscription</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Help</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Contact us</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="font-semibold mb-4 text-base text-[#032b41]">Useful Links</div>
              <div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Pricing</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Summarist Business</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Gift Cards</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Authors & Publishers</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="font-semibold mb-4 text-base text-[#032b41]">Company</div>
              <div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">About</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Careers</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Partners</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Code of Conduct</a>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="text-[#394547] text-sm cursor-not-allowed--title">Other</div>
              <div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Sitemap</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Legal Notice</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Terms of Service</a>
                </div>
                <div className="mb-3 leading-5">
                  <a className="text-[#394547] text-sm cursor-not-allowed">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[#032b41] font-medium">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
