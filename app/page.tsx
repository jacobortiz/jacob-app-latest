import Image from 'next/image'

import { Suspense } from 'react'

import kuma from '@/public/kuma.jpg'
import tahoe from '@/public/tahoe.jpeg'
import sjsu from '@/public/sjsu.jpg'

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
      <h1 className='font-bold text-2xl mb-8 tracking-tighter'>
        jacob ortiz-rodriguez
      </h1>

      <div className="columns-2 sm:columns-2 gap-2 my-8">
        <div className="relative h-40 sm:h-80 sm:mb-2">
          <Image
            alt="sjsu campus"
            src={sjsu}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>

        <div className="relative h-40 sm:h-80 sm:mb-2">
          <Image
            alt="tahoe picture"
            src={tahoe}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>

        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="my dog"
            src={kuma}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>

      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          MSCS student @ San Jose State. <br />
          Graduated from CSU, Montery Bay.
          technical skills from ranging from C++/Java/Python
          as well as skills in JS, React, and cloud deployment
          I believe my 
          curiosity, enthusiasm, and abilities will allow me to make a positive 
          contribution to any work that I will do.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I also enjoy going on trips and spending some time outdoors with my dog
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <h1 className='font-bold text-2xl mb-8 tracking-tighter'>
          relevant experience
        </h1>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          proficient in object orient design, data strucutres and algorithms (C/C++, Java, Python)
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Android/iOS . Experience with building and developing mobile apps for both platforms
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          ML/AI. Experience developing and creating jupyter notebooks, exploring data science skills and machine learning methods
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert sm:mt-1">
        <p>
          follow me on
        </p>
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jacobortiz99/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.tiktok.com/@jortiz99_"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">tiktok</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/jacobortiz90_/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">instagram</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@jakey_gaming"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">youtube</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://jacob-ortiz.vercel.app/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2"> my old site</p>
          </a>
        </li>
      </ul>

    </section>
  )
}