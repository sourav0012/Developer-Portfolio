import React, { useRef, useState } from "react";


const BentoTilt =({ children, className=''})=>{
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();
    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

      const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    setTransformStyle(newTransform);
  };

    const handleMouseLeave = () => {
        setTransformStyle('');

    };


    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseDown={handleMouseLeave} style={{ transform: transformStyle }} >
            {children} 
        </div>
    )
}

const Bentocard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-fit object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-[30rem] text-xl md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section id="feature" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10 ">
        <div className="px-5 py-32">
          <p className="font-circular-web text-xl text-blue-50">
            What Technologies i know?
          </p>
          <p className="max-w-[50rem] font-circular-web text-lg text-blue-50 opacity-50">
            I have a solid understanding of web development concepts and enjoy creating interactive, user-friendly interfaces. I focus on building clean, responsive designs and bringing ideas to life with smooth functionality. I continuously improve my skills through real-world projects, aiming to deliver professional, efficient, and visually engaging digital experiences.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <Bentocard
            src="videos/vd7.mp4"
            title={
              <>
                re<b>a</b>ct.js
              </>
            }
            description="I use React jS to build dynamic and interactive web applications that deliver exceptional user experiences. My expertise in React jS allows me to create engaging and responsive interfaces that are both visually appealing and easy to navigate."
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <Bentocard
              src="videos/vd3.mp4"
              title={
                <>
                  expr<b>e</b>ss.JS
                </>
              }
              description="I use Express.js to develop robust and scalable server-side applications. I have experience in creating dynamic and responsive web applications that are both visually appealing and easy to navigate."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <Bentocard
              src="videos/vd6.mp4"
              title={
                <>
                  m<b>o</b>ngodb
                </>
              }
              description="I use MongoDB to design and manage the database for my web applications. MongoDb is a popular NoSQL database that allows me to store and retrieve data in a flexible and efficient way."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <Bentocard
              src="videos/vd2.mp4"
              title={
                <>
                  no<b>d</b>e.JS
                </>
              }
              description="I use Node.js to build server-side applications. Where Nodejs is a runtime environment that allows me to execute JavaScript code on the server-side, making it possible to create dynamic and responsive web applications."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            
              <Bentocard
              src="videos/vd1.mp4"
              title={
                <>
                  g<b>s</b>ap
                </>
              }
              description="I use Gsap to add animation to my web applications. Gsap is a popular JavaScript library that allows me to create smooth and engaging animations for my web applications."
            />

              {/* <TiLocationArrow className="m-5 scale-[5] self-end" /> */}
            
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <Bentocard
              src="videos/vd5.mp4"
              title={
                <>
                  i will learn other Technologies then i will add it here
                </>
              }
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Feature;
