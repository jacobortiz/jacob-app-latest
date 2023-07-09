import Image from 'next/image'

import { Suspense } from 'react'

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

// function Badge(props) {
//   return (
//     <a
//       {...props}
//       target="_blank"
//       className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
//     />
//   );
// }

// function ChannelLink({ image, link, name, subscribers }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
//     >
//       <div className="flex items-center space-x-3">
//         <div className="relative h-16">
//           <Image
//             alt={name}
//             src={image}
//             height={64}
//             width={64}
//             sizes="33vw"
//             className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
//           />
//           <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
//             <svg
//               width="15"
//               height="11"
//               viewBox="0 0 15 11"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M4.23047 7.01409V7.01437C4.23422 7.15313 4.23547 7.29269 4.25879 7.43058C4.28362 7.57647 4.3191 7.71873 4.38678 7.85115C4.47829 8.03036 4.60358 8.18176 4.76263 8.30534C4.87653 8.3941 5.00097 8.46458 5.13871 8.50903C5.33954 8.57377 5.54674 8.59857 5.75698 8.59979C5.88814 8.60062 6.01923 8.60389 6.15045 8.60334C7.10333 8.59934 8.05624 8.61022 9.00917 8.59747C9.13561 8.59577 9.25999 8.58034 9.3841 8.55766C9.62196 8.51416 9.83217 8.41265 10.012 8.25241C10.2216 8.06562 10.3631 7.83697 10.4269 7.56105C10.4687 7.38068 10.4791 7.19771 10.4809 7.01407V6.97744C10.4809 6.96324 10.4755 3.85737 10.475 3.81632C10.4736 3.70356 10.4653 3.59162 10.4441 3.48066C10.4184 3.34545 10.382 3.21369 10.3173 3.09137C10.2488 2.96211 10.1631 2.84593 10.057 2.74437C9.89467 2.58878 9.70728 2.47877 9.48904 2.42056C9.29202 2.36806 9.09102 2.35635 8.88851 2.35655C8.88786 2.35564 8.88747 2.35457 8.88739 2.35345H5.82286C5.82286 2.3545 5.82286 2.35553 5.82269 2.35655C5.70776 2.35866 5.59268 2.35778 5.47836 2.37196C5.35313 2.38751 5.22907 2.41094 5.11054 2.45469C4.92382 2.5237 4.76158 2.63118 4.62301 2.77472C4.466 2.93723 4.35528 3.1253 4.29663 3.34425C4.24421 3.53959 4.2328 3.73881 4.23252 3.93945"
//                 fill="white"
//               />
//               <path
//                 d="M7.75735 9.75221L5.18249 9.7052C4.34881 9.68881 3.51306 9.72152 2.69572 9.55178C1.45237 9.29819 1.36428 8.05475 1.27211 7.01174C1.14511 5.5454 1.19428 4.05245 1.43394 2.59835C1.56925 1.78245 2.10171 1.29559 2.92514 1.24262C5.70483 1.05035 8.50301 1.07313 11.2765 1.16283C11.5695 1.17106 11.8644 1.216 12.1532 1.26716C13.579 1.51668 13.6137 2.92577 13.7062 4.11196C13.7983 5.31039 13.7594 6.51497 13.5833 7.70524C13.4419 8.69075 13.1715 9.5172 12.0303 9.59698C10.6005 9.7013 9.20347 9.78529 7.76961 9.75855C7.76967 9.75221 7.76144 9.75221 7.75735 9.75221ZM6.24358 7.25718C7.32108 6.63951 8.37802 6.03213 9.44936 5.4186C8.36985 4.80093 7.31492 4.19356 6.24358 3.58003V7.25718Z"
//                 fill="#FF0000"
//               />
//             </svg>
//           </div>
//         </div>
//         <div className="flex flex-col">
//           <p className="font-bold text-neutral-900 dark:text-neutral-100">
//             {name}
//           </p>
//           <p className="text-neutral-600 dark:text-neutral-400">
//             {subscribers} subscribers
//           </p>
//         </div>
//       </div>
//       <div className="text-neutral-700 dark:text-neutral-300">
//         <ArrowIcon />
//       </div>
//     </a>
//   );
// }


export default function Page() {
  return (
    <section>
      <h1 className='font-bold text-2xl mb-8 tracking-tighter'>
        hi, im jacob, CURRENTLY WORKING
      </h1>

      <p className="prose prose-neutral dark:prose-invert">
        I am student at San Jose State, current pursuing MSCS.
        Graduated from CSU, Montery Bay.
        technical skills from ranging from C++/Java/Python
        as well as skills in JS, React, and cloud deployment
      </p>


      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel fugiat iure quidem, iusto quis aliquam itaque qui harum dolorem cum obcaecati culpa at expedita quia eligendi voluptas aut possimus?
        </p>
      </div>

      {/* <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          image={avatar}
          name="@jakey"
          subscribers={leerobSubscribers.toLocaleString()}
          link="https://www.youtube.com/@jakey"
        />
      </div> */}

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id veritatis eius ad dolore dignissimos dolorum, iusto ab, doloremque ipsam itaque vitae? Nam, reprehenderit sed eum provident quibusdam delectus nesciunt.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae incidunt magni, ducimus dignissimos corporis fugiat possimus ex repellat cum veritatis! Adipisci cumque non ipsum beatae eligendi, necessitatibus quas vitae tenetur?
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia molestiae exercitationem quisquam doloribus, eum voluptates nulla non aspernatur, obcaecati unde nobis labore distinctio! Dolores rerum blanditiis obcaecati doloremque in!
        </p>
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.tiktok.com/@jortiz99_"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me on tiktok</p>
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
      </ul>

    </section>
  )
}
