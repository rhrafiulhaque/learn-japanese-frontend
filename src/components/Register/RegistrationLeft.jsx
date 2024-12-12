import React from "react";
import RegisterPagePicture from "../../assets/RegisterPagePicture.jpg";

const RegistrationLeft = () => {
  return (
    <div className="hidden  lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12  h-full fixed left-0 top-0">
      <div className="text-white">
        <img
          src={RegisterPagePicture}
          alt="Illustration"
          className="mx-auto 2xl:ml-0 max-h-64  max-w-lg"
        />

        <div className="mt-8">
          <h2 className="text-3xl font-bold mt-5">Register Now</h2>
          <p className="text-xl mb-4 font-medium">
            Learn Japanese: A Journey from Beginner to Fluent Speaker
          </p>
          <p className="mb-8 max-w-lg">
            Unlock the beauty and richness of the Japanese language with our
            comprehensive guide to learning Japanese. Whether you're a complete
            beginner or looking to polish your skills, this resource offers
            step-by-step lessons in vocabulary, grammar, writing systems
            (Hiragana, Katakana, Kanji), and conversational practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationLeft;
