import React from 'react';

const AboutUsServiece = () => {
    return (
        <div>
        <h1 className="md:text-4xl font-bold text-center text-[#0360D9] pt-12 pb-12 ">
          Reliable <span className="text-[#021526]">Services</span>
        </h1>
        
  <p></p>
        <div className="flex md:flex-row flex-col justify-center items-center mx-auto gap-4 py-6">
          <div>
            <div className="w-[300px] ">
              <img
                className="w-[300px] h-[200px]"
                src="https://i.ibb.co/VYzp9Hx/ebd13cefb0cbca138fd2d2834a001572.jpg"
                alt=""
              />
              <h1 className="md:text-xl font-bold text-[#0360D9] pt-3 text-center">
                Dental Implant
              </h1>
              <p className="text-sm font-medium  text-[#2E2E2E] pt-3 text-center">
                Dental implants are a popular and effective solution for replacing
                missing teeth. This surgical procedure involves placing titanium
                posts into the jawbone, acting as artificial tooth roots.
              </p>
            </div>
          </div>
          <div>
            <div className="w-[300px]">
              <img
                className="w-[300px] h-[240px]"
                src="https://i.ibb.co/37RtMkX/Cost-Web-1.png"
                alt=""
              />
              <h1 className="text-xl font-bold text-[#0360D9] pt-3 text-center">
                Lens Implant Surgery
              </h1>
              <p className="text-sm font-medium text-[#2E2E2E] pt-3 text-center">
                Dental implants are a popular and effective solution for replacing
                missing teeth. This surgical procedure involves placing titanium
                posts into the jawbone, acting as artificial tooth roots.
              </p>
            </div>
          </div>
          <div>
            <div className="w-[300px]">
              <img
                className="w-[300px] h-[200px]"
                src="https://i.ibb.co/FKNKDjJ/Nurse-or-doctor-will-remove-the-birth-control-implant.jpg"
                alt=""
              />
              <h1 className="text-xl font-bold text-[#0360D9] pt-3 text-center">
                Birth Control Implant
              </h1>
              <p className="text-sm font-medium  text-[#2E2E2E] pt-3 text-center">
                Dental implants are a popular and effective solution for replacing
                missing teeth. This surgical procedure involves placing titanium
                posts into the jawbone, acting as artificial tooth roots.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUsServiece;