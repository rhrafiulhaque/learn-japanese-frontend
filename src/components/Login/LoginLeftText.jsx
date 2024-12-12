import React from "react";
import LoginPagePicture from "../../assets/LoginPagePicture.jpg";
const LoginLeftText = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 relative">
      <div className="text-white">
        <img src={LoginPagePicture} alt="Illustration" className="mx-auto" />

        <h2 className="text-3xl font-bold mb-4">Login Now</h2>
        <p className="text-xl mb-4">
          Learn Japanese: A Journey from Beginner to Fluent Speaker
        </p>
        <p className="mb-8">
          Unlock the beauty and richness of the Japanese language with our
          comprehensive guide to learning Japanese. Whether you're a complete
          beginner or looking to polish your skills, this resource offers
          step-by-step lessons in vocabulary, grammar, writing systems
          (Hiragana, Katakana, Kanji), and conversational practice. With
          interactive exercises, audio clips, and cultural insights, you'll not
          only master Japanese but also gain a deeper understanding of Japan's
          fascinating culture. Start your language-learning adventure today and
          connect with millions of speakers worldwide!
        </p>
      </div>
    </div>
  );
};

export default LoginLeftText;
