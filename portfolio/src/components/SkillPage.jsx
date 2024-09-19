import React from "react";

const SkillPage = () => {
  return (
    <section>
      <div class="hero min-h-[60vh] bg-secondary py-0">
        <div class="hero-content flex-col lg:flex-row px-10">
          <div className="mb-20">
            <div className="about-me mb-10">
              <h1 class="text-6xl font-display text-primary">About Me</h1>
            </div>
            <p class="text-xl text-black font-medium">
              My name is Vityea, I am a{" "}
              <span className="custom-underline">
                web developer and tech educator
              </span>{" "}
              from the great Kingdom of Cambodia. I recently just graduated with
              a{" "}
              <span className="custom-underline">
                bachelor’s degree in Computer Science
              </span>{" "}
              from Paragon International University and now working as a{" "}
              <span className="custom-underline">Coding & Robotics Mentor</span>{" "}
              at Tech for Kids Academy. Currently, I am also part of the U.S
              Ambassador’s Youth Council. <br /> <br />A little bit about myself
              is that I am Cambodia’s biggest One Piece fan ( self-proclaimed)
              and as for my hobbies, I enjoy playing video games, watching
              historical tv-shows and travelling. One of my dreams is to get a
              rally bike and vroom vroom across South-East Asia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
