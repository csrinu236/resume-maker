import Highlight from "@/components/Highlight";

export default function Home() {
  const printExp = () => {
    const startDate = new Date("July 4, 2022");
    const currentDate = new Date();

    const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // console.log(`${years} years and ${months} months`);
    return `${years}y, ${months}m`;
  };
  return (
    <>
      <section className="section">
        <div className="section-center main-center">
          <div className="user-container">
            <div className="user-bio">
              <div className="user-container theme-black">
                <h2 className="title">CHENNA SREENU</h2>
                <h4 className="thin mb-2 role">
                  <i>Front End Web Developer (Next.js)</i>
                </h4>
                <h5 className="icon-control thin">
                  <span>
                    <i class="fa-solid fa-envelope fa-bounce fa-lg fa-fw"></i>
                  </span>
                  csrinu236@gmail.com
                </h5>
                <h5 className="icon-control thin">
                  <span>
                    <i class="fa-solid fa-location-dot fa-flip fa-lg fa-fw"></i>
                  </span>
                  Hyderabad, India
                </h5>
                <h5 className="icon-control thin">
                  <span>
                    <i class="fa-brands fa-linkedin fa-lg fa-fw"></i>
                  </span>
                  <a href="https://www.linkedin.com/in/chenna-sreenu-53b587189/">LinkedIn</a>
                </h5>
                <h5 className="icon-control thin mb-0">
                  <span>
                    <i class="fa-brands fa-github fa-lg fa-fw"></i>
                  </span>
                  <a href="https://github.com/csrinu236">Github</a>
                </h5>
              </div>
              {/* =================================================== */}
              {/* =================================================== */}
              {/* =================================================== */}
            </div>
            <div className="user-info">
              <div className="user-container">
                <h3>EDUCATION</h3>
                <div className="user-details">
                  <h5 className="thin mb-0">BTech in Agriculture & Food Engineering</h5>
                  <h5 className="icon-control">
                    <span>
                      <i class="fa-solid fa-location-dot fa-lg fa-fw"></i>
                    </span>
                    IIT Kharagpur, West Bengal
                  </h5>
                  <h5 className="icon-control">
                    <span>
                      <i class="fa-solid fa-calendar-days fa-lg fa-fw"></i>
                    </span>
                    Aug 2018 - Jun 2022
                  </h5>
                </div>

                <div className="user-details">
                  <h5 className="thin">Relevant Course Covered</h5>

                  <h5 className="icon-control">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    Programming(C, C++) & Data Structures
                  </h5>
                </div>
              </div>
              <div className="user-container">
                <h3>SKILLS</h3>

                <div className="user-details">
                  <h5 className="icon-control thin">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    <span>
                      <b>HTML, Scss/Sass:</b> Proficient in writing HTML, Scss, making responsive websites and debugging in browser developer tools.
                    </span>
                  </h5>
                  <h5 className="icon-control thin">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    <span>
                      <b>JavaScript:</b> Highly proficient in writing modern ES6, including arrow functions, spread operators, rest operators,
                      Promises, destructering of objects, and other ES6 features.
                    </span>
                  </h5>
                  <h5 className="icon-control thin">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    <span>
                      <b>Next.js:</b> Extensive hands-on experience with Next.js & it's features, file based routing, server side renedering,
                      incremental static generation, useSWR hook, middleware gained while working on the development of JioTV.
                    </span>
                  </h5>
                  <h5 className="icon-control thin">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    <span>
                      <b>RxJS Observables:</b> Proficient in utilizing RxJS Observables for handling cross component communications and managing
                      global states within components.
                    </span>
                  </h5>
                  <h5 className="icon-control thin">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    <span>
                      <b>Webpack: </b>Hands-on experience with Webpack for bundling packages to be used internally within the company, reducing
                      dependency on external NPM packages.
                    </span>
                  </h5>
                  <h5 className="icon-control thin">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    <span>
                      <b>Docker & Kubernetes: </b>Hands-on experience on writing Dockerfiles and Kubernetes deployment files, thus able to debug
                      bugs/issues of a website in production.
                    </span>
                  </h5>
                </div>
              </div>
              <div className="user-container">
                <h3>OTHER INTERESTS</h3>
                <div className="user-details">
                  <h5 className="icon-control thin">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    <span>
                      <b>Reading Books:</b> I love to read Self Help books and Finance related books.
                    </span>
                  </h5>
                  <h5 className="icon-control thin">
                    <span>
                      <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                    </span>
                    <span>
                      <b>Trecking Hills/Mountains</b> I love to treck mountains on weekends.
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="job-container">
            <div className="user-container career-objective">
              <h3>CAREER OBJECTIVE</h3>
              <h5 className="icon-control thin">
                Despite not originating from a Computer Science stream, I have cultivated enough passion for World of Web Development, particularly
                for the continuously advancing Browsers support for Javascript and Developer tools support for the HTML, CSS and Javascript. My goal
                is to keep on upskilling myself to contribute my skills to make a meaningful impact by delivering innovative web solutions.
              </h5>
            </div>
            <div className="user-container experience-container">
              <h3>EXPERIENCE</h3>
              <h4 className="thin role">
                <Highlight>Front End Web Developer (Next.js) at Jio Platforms Limited</Highlight>
              </h4>
              <h5 className="icon-control">
                <span>
                  <i class="fa-solid fa-calendar-days fa-lg fa-fw"></i>
                </span>
                {`Jul 2022 to ${new Intl.DateTimeFormat("en-IN", {
                  year: "numeric",
                  month: "short",
                }).format(new Date().getTime())} (${printExp()})`}
              </h5>
              <h5 className="icon-control">
                <span>
                  <i class="fa-solid fa-location-dot fa-lg fa-fw"></i>
                </span>
                NaviMubai, Maharastra
              </h5>
              <h5 className="icon-control thin">
                <span>
                  <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                </span>
                <span>
                  Proposed
                  <Highlight>Custom Cookie Based User Authentication Logic</Highlight>
                  in current JioTV web application (Next.js) without using any external NPM packages recommended (like NextAuth) in Next.js docs and
                  thus
                  <Highlight>avoided Flickering of the application</Highlight> and <Highlight>the use of external npm package</Highlight>.
                </span>
              </h5>
              <h5 className="icon-control thin">
                <span>
                  <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                </span>
                <span>
                  Wrote
                  <Highlight>Custom Infinite Scroll Logic</Highlight>
                  in current JioTV web application (Next.js) for all pages using
                  <Highlight>Intersection Observer</Highlight>, thus
                  <Highlight>avoided</Highlight> the use of
                  <Highlight>external NPM packages</Highlight>
                  and <Highlight>reduced build size to some extent.</Highlight>
                </span>
              </h5>
              <h5 className="icon-control thin">
                <span>
                  <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                </span>
                <span>
                  Good at writing
                  <Highlight> Dockerfiles and Kubernetes</Highlight> deployment files and developed a way(
                  <a
                    className="medium-link"
                    title="Medium Article"
                    href="https://medium.com/@csrinu236/deploying-next-js-applications-using-the-nginx-server-1-2-72f8c44ed9aa"
                  >
                    <Highlight>open medium article</Highlight>
                  </a>
                  ) of how <Highlight>Nextjs applications</Highlight> can be deployed into production (kubernetes clustor) with{" "}
                  <Highlight>2 servers(nginx and nextjs).</Highlight>
                </span>
              </h5>
              <h5 className="icon-control thin">
                <span>
                  <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                </span>
                <span>
                  Also worked on JioThanqAPIs
                  <Highlight>(express js project)</Highlight>
                  which covers
                  <Highlight>
                    authentication & authorization, express middlewares, JWT token, hashing passwords, access token, refresh token, controllers,
                    MongoDB, mongoose schemas, aggregate methods, pre&post hooks
                  </Highlight>
                  , etc.
                </span>
              </h5>
              <h5 className="icon-control thin">
                <span>
                  <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                </span>
                <span>
                  Conducted R&D on
                  <Highlight>Service Workers, Progressive Web Apps (PWAs), and Trusted Web Activities (TWAs)</Highlight>
                  and delivered a presentation to my team on transforming the JioTV website into a <Highlight>Lite version</Highlight> for Android
                  same like
                  <Highlight>Instagram Lite and Facebook Lite</Highlight>.
                </span>
              </h5>
            </div>
            <div className="user-container">
              <h3>HIRE ME FOR</h3>
              <h5 className="icon-control thin">
                <span>
                  <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                </span>
                <span>
                  <b>Front End Web Developer(Next.js/React): </b> Next.js is almost same as ReactJs except few minor differences. So Hire me for a
                  Front End Web Developer role in React or NextJs technologies.
                </span>
              </h5>
              <h5 className="icon-control thin">
                <span>
                  <i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg fa-fw"></i>
                </span>
                <span>
                  <b>Backend Developer(NodeJs/ExpressJs): </b> I also worked on Backend, I am also curious to upskill myself to become a full stack
                  developer as well.
                </span>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
