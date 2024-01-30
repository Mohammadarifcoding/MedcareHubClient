import React from 'react';

const AboutDoc = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center items-center gap-3 ">
        {/* card */}
        <div className="card ">
          <img
            src="https://i.ibb.co/3zV2fzV/female-doctor-hospital-with-stethoscope-23-2148827776.jpg"
            alt=""
          />
          <div className="card__content flex flex-col mx-auto items-center justify-center">
            <p className="card__title text-center">Dr.David Lorenz</p>
            <p className="card__description text-center font-medium">
              {" "}
              (Cardiologist) A cardiologist is a doctor who specializes in the
              diagnosis and treatment of heart-related conditions and diseases.
            </p>
          </div>
        </div>
        <div className="card ">
          <img
            className=" "
            src="https://i.ibb.co/mNzqJRg/22184113-healthcare-medical-and-future-technology-concept-male-doctor-with-stethoscope-and-virtual-s.jpg"
            alt=""
          />
          <div className="card__content flex flex-col mx-auto items-center justify-center">
            <p className="card__title text-center">Dr.Havard Kleys</p>
            <p className="card__description text-center font-medium">
              {" "}
              (Neurologist) Neurologists focus on disorders of the nervous system,
              including the brain, spinal cord, and peripheral nerves.
            </p>
          </div>
        </div>
        <div className="card ">
          <img
            src="https://i.ibb.co/PD86wbz/dc04aaae4d9a84ad7c4a3be7bc4e9766.jpg"
            alt=""
          />
          <div className="card__content flex flex-col mx-auto items-center justify-center">
            <p className="card__title text-center">Dr.Londat Ficu</p>
            <p className="card__description text-center font-medium ">
              {" "}
              (Orthopedic Surgeon) These doctors specialize in the musculoskeletal
              system, dealing with conditions and injuries affecting bones,
              joints, muscles, and ligaments.
            </p>
          </div>
        </div>
        <div className="card ">
          <img
            src="https://i.ibb.co/p1sGB8G/doctor-man-standing-straight-with-arms-crossed-perfect-medical-service-in-clinic-happy-future-in-med.jpg"
            alt=""
          />
          <div className="card__content flex flex-col mx-auto items-center justify-center">
            <p className="card__title text-center">Dr.Araid Wax</p>
            <p className="card__description text-center font-medium">
              (Dermatologist) Dermatologists specialize in the diagnosis and
              treatment of skin, hair, and nail disorders, as well as various
              cosmetic procedures.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutDoc;