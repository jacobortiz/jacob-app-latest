import { Metadata } from "next";

// minor change

export const metadata: Metadata = {
  title: "Projects",
  description: "some projects I have done",
};

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        relevant experience
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          OOP. proficient in object orient design, data structures and algorithms
          (C/C++, Java, Python)
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Android/iOS . Experience with building and developing mobile apps for
          both platforms
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          ML/AI. Experience developing and creating jupyter notebooks, exploring
          data science skills and machine learning methods
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert sm:mt-10">
        <p>explore all</p>
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jacobortiz"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">github</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
