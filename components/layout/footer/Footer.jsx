"use client"
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import Nav from './Nav';
import Rights from './Rights';
import Image from 'next/image';
import { contactInfo, contactLinks } from '@/data/contact';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const container = useRef(null);
  const firstCol = useRef(null);
  const seconedCol = useRef(null);
  const bgImage = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const els = [firstCol.current, seconedCol.current, bgImage.current];
    // states 
    gsap.set(firstCol.current, { y: 100, opacity: 0 });
    gsap.set(seconedCol.current, { x: 100, opacity: 0 });
    gsap.set(bgImage.current, { y: 150, opacity: 0 });

    let ctx;

    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
            refreshPriority: -1,
          }
        });

        tl.to(firstCol.current, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }, 0);

        tl.to(seconedCol.current, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }, 0);

        tl.to(bgImage.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }, "<0.2");

      }, container);

    }, 150);

    return () => {
      clearTimeout(timer);
      ctx?.revert(); 
      ScrollTrigger.getAll()
        .filter(st => st.vars.trigger === container.current)
        .forEach(st => st.kill());
      gsap.set(els, { clearProps: "all" });
    };

  }, [pathname]); 

  return (
    <footer ref={container} className="relative">
      <div className="min-h-[88.9vh] relative">
        <div className='bg-b500 relative px-clamp-20 2xl:px-clamp-68 py-[87px] flex flex-col justify-between min-h-[88.9vh] overflow-hidden'>

          {/* top cols */}
          <div className='flex justify-between flex-wrap gap-clamp-64 relative z-10'>

            {/* first col */}
            <div className='flex flex-col gap-clamp-46 2xl:gap-clamp-60 3xl:gap-clamp-71'>
              <div
                ref={firstCol}
                className='flex flex-col gap-clamp-30 2xl:gap-clamp-38 3xl:gap-clamp-46 will-change-transform'
              >
                {/* footer heading */}
                <h3 className='text-balance capitalize text-clamp-36 2xl:text-clamp-48 3xl:text-clamp-64 leading-[1] font-heading font-bold mt-[-3px]'>
                  We strive to bring <br /> customer&apos;s ideas to life.
                </h3>

                {/* contact info */}
                <div className='flex flex-wrap gap-clamp-30 2xl:gap-clamp-38 3xl:gap-clamp-46 leading-[0.8]'>
                  {contactInfo.map((item) => (
                    <div key={item.title}>
                      <Link
                        href={item.link}
                        className='text-clamp-20 2xl:text-clamp-28 3xl:text-clamp-36 underline underline-offset-[7px] decoration-[2px] font-heading text-wd'
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* contact links */}
                <div className='flex gap-clamp-24'>
                  {contactLinks.map((item) => (
                    <div key={item.title}>
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* footer slogans */}
              <div className='font-body text-balance flex flex-col gap-[23px]'>
                <h5 className='font-semibold leading-none text-clamp-20'>O-Projects 2026</h5>
                <p className='leading-none text-clamp-18'>Open Sunday to Thursday</p>
                <p className='leading-none text-clamp-18'>7 Abdelmoneam Fawzy St, Elnozha, Cairo, Egypt</p>
              </div>
            </div>

            {/* second col */}
            <div
              ref={seconedCol}
              className='me-[calc(clamp(100px,13vw,250px)-68px)] mt-[24px] will-change-transform'
            >
              <Nav />
            </div>
          </div>

          {/* bottom */}
          <div className='relative z-10 mt-12'>
            <Rights />
          </div>

          {/* background image */}
          <div ref={bgImage} className="absolute bottom-0 end-0 z-0 will-change-transform">
            <Image
              src="/images/o-projects/o-projects.png"
              className='w-[clamp(100px,92vw,1766.4px)]'
              width={1765}
              height={574}
              alt="o-projects"
            />
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer