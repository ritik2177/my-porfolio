import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Education",
            content: (
                <div>
                    {/* BCA Section */}
                    <h2 className="text-sm md:text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                        🎓 Bachelor of Computer Applications (BCA)
                    </h2>
                    <h3 className="text-xs md:text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                        Ewing Christian College, Praygraj
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-1">
                        2023 – 2026 (Expected)
                    </p>
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                        CGPA: <span className="font-semibold">8.2/10</span>
                    </p>
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-6">
                        Currently pursuing my BCA with a strong focus on web development, programming, and database management. Actively involved in coding competitions and tech fests.
                    </p>

                    {/* Class XII Section */}
                    <h2 className="text-sm md:text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                        🏫 Senior Secondary (Class XII)
                    </h2>
                    <h3 className="text-xs md:text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                        Kendriya Vidyalaya School, Praygraj
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-1">
                        Year: 2021
                    </p>
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                        Percentage: <span className="font-semibold">78%</span>
                    </p>
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                        Completed with a science stream, specializing in Computer Science. Participated in school-level tech events and project-based learning activities.
                    </p>
                </div>
            ),
        },     
       {
  title: "Projects",
  content: (
    <div>
      {/* Project Grid with Images */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-10">
        {/* Cloudinary SaaS */}
        <div className="flex flex-col gap-2">
          <h2 className="text-sm md:text-lg font-bold text-neutral-800 dark:text-neutral-100">
            🚀 Cloudinary SaaS
          </h2>
          <a href="https://your-cloudinary-saas-link.com" target="_blank" rel="noopener noreferrer">
            <img
              src="image/3.png"
              alt="Cloudinary SaaS"
              className="w-full h-40 md:h-56 rounded-lg object-cover shadow-md"
            />
          </a>
          <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            A full-stack SaaS platform integrating Cloudinary for media upload and management.
          </p>
        </div>

        {/* Currency Exchanger */}
        <div className="flex flex-col gap-2">
          <h2 className="text-sm md:text-lg font-bold text-neutral-800 dark:text-neutral-100">
            💱 Currency Exchanger
          </h2>
          <a href="https://your-currency-exchanger-link.com" target="_blank" rel="noopener noreferrer">
            <img
              src="image/4.png"
              alt="Currency Exchanger"
              className="w-full h-40 md:h-56 rounded-lg object-cover shadow-md"
            />
          </a>
          <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            A real-time currency exchange tool using live APIs to convert between global currencies.
          </p>
        </div>

        
      </div>

      {/* Text-Based List of Projects */}
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          A collection of my personal and academic projects showcasing my skills in frontend and backend development.
        </p>
        <div className="mb-8 space-y-2">
          <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ <span><strong>Cloudinary SaaS</strong> – A media upload and compression platform built using Cloudinary and Next.js.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ <span><strong>Weather App</strong> – A real-time weather app fetching data from the OpenWeatherMap API.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ <span><strong>Fresh Finale Fiesta</strong> – An event management platform for college farewell and fresher functions.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ <span><strong>Currency Converter</strong> – A live currency exchange tool with multi-currency support using APIs.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ <span><strong>Password Generator</strong> – A secure and customizable password generator with copy-to-clipboard support.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ <span><strong>Quiz App</strong> – A browser-based interactive quiz application to test general knowledge and logic.</span>
          </div>
        </div>
      </div>
    </div>
  ),
},


        {
            title: "Skill",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Core Skill
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ HTML, CSS, JavaScript
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ React.js, Next.js, Tailwind CSS
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Node.js-basic, Express.js
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Git & GitHub
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ REST APIs
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Responsive Web Design
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Firebase, Cloudinary
                        </div><br />
                        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                            Tools
                        </p>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ VS Code, Figma (basic), Postman, Netlify, Vercel
                        </div><br />
                        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                            Soft Skills
                        </p>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Teamwork, Time Management, Communication
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Fast Learner, Self-Motivated, Critical Thinking
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="image/14.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="image/13.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="image/15.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="image/8.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Achivment",
            content: (
                <div>
                    {/* <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p> */}
                    <div>
      <h2 className="mb-2 text-base font-semibold text-neutral-800 md:text-lg dark:text-neutral-100">
        Software Development Intern – Tuition-Ed
      </h2>
      <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Currently working as a software development intern at Tuition-Ed. Im actively collaborating with the development team to build their official website, aimed at helping NRI (Non-Resident Indian) children connect with our tutor team. The goal is to provide online tuition support for students living abroad.
      </p>
      <div className="text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
        🔧 Working on front-end as well as backend development.  
        <br />
        🌐 Main focus is to stay upto date accoding to present in world.
      </div><br />
    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="image/1.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="image/10.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        {/* <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        /> */}
                    </div>
                </div>
            ),
        },
        {
            title: "Social Media",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Feel free to connect with me on social media or email me at ritikkvs2177@gmail.com.
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        You can also reach out via phone or WhatsApp at +91 95555 03658 for any inquiries or collaborations.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="image/8.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="image/9.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
              src="image/11.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
                        <img
              src="image/12.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
                    </div>
                </div>
            ),
        },
        {
  title: "Resume",
  content: (
    <div>
      <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Here is a quick overview of my education, skills, and experience in a single document.
        You can view or download my resume using the link below.
      </p>

      <div className="mb-4">
        <img
    src="image/16.png" // Replace with your image path
    alt="Ritik's Resume"
    className="max-h-screen w-auto object-contain rounded-lg shadow-md"
  />
      </div>

      <a
        href="image/resumeRitik.pdf" // Replace with actual resume path
        download="Ritik_Kumar_Resume.pdf"
        className="inline-block px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 md:text-sm"
      >
        📄 Download Resume
      </a>
    </div>
  )
},

    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
