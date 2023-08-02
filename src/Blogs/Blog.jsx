import React from "react";
import Avatar from "../images/avatar.png";
import Main from "../images/main_pic.png";

const Blog = () => {
  return (
    <div className=" w-full h-auto my-20">
      <div>
        <p className=" font-regular text-sm text-[#141E3E] mx-10">
          Dote | Blog | Staff development | What is preschool behavior
          management?
        </p>
        <h1 className="mx-10 font-extrabold text-black text-4xl">
          What exactly is behaviour management in preschool?
        </h1>
      </div>

      <div className="mx-10 my-10 flex flex-row">
        <img className=" w-12 h-12" src={Avatar} alt="Avatar" />
        <label className="mx-2 my-3">Ahmed K.</label>
        <div className=" mx-1 w-0.5 h-6 my-3 bg-black rounded-lg"></div>
        <label className="mx-2 my-3 text-black">15 March,2023</label>
      </div>

      <div className=" flex justify-center items-center  mx-10">
        <img
          className=" h-1/3 w-full items-center bg-cover"
          src={Main}
          alt="Main"
        />
      </div>

      <div className=" flex flex-col mx-10 mt-20">
        <span className=" font-regular text-sm text-[#141E3E]">
          Preschool behavior management uses strategies to support children in
          learning, increase prosocial behaviors, and reduce challenging
          behaviors.
        </span>
        <span className=" font-regular text-sm text-[#141E3E] mt-16">
          Behavior management for preschoolers is vital as it helps set
          expectations, forms the foundation for social-emotional learning,
          creates a conducive learning classroom environment, provides
          strategies families can use at home, and promotes positive behavior.
        </span>

        <span className=" text-primary text-3xl font-bold mt-10">
          Benefits of effective preschool behavior management
        </span>
        <span className=" text-[#141E3E] font-semibold text-2xl">
          The benefits of effective preschool behavior management include:
        </span>
      </div>

      <div className=" flex flex-col justify-start items-start mt-10 mx-10">
        <span className=" font-semibold text-2xl text-black">
          1. Sets expectations
        </span>
        <span className=" font-regular text-[#141E3E] text-sm mt-10 w-1/2">
          Developing a preschool behavior management plan and sharing it with
          the children is the best way to set expectations correctly. This way,
          the children know what behavior is acceptable.
        </span>
      </div>


      <div className=" flex flex-col justify-start items-start mt-10 mx-10">
        <span className=" font-semibold text-2xl text-black">
        2. Forms the foundation for social-emotional learning
        </span>
        <span className=" font-regular text-[#141E3E] text-sm mt-10 w-1/2">
        Besides learning to read and write, children need to develop social-emotional behaviors like regulating their emotions, social awareness, and relationship skills. Clear, concise, and easy to understand classroom rules can help children manage their stress levels and create an environment where they feel safe. A solid behavior management plan may also support children’s ability to communicate with others and listen well. Learning these essential social-emotional skills at an early age sets them up for success later in life.
        </span>
      </div>

      <div className=" flex flex-col justify-start items-start mt-20 mx-10">
        <span className=" font-semibold text-4xl text-black">
        Wrapping Up
        </span>
        <span className=" font-regular text-[#141E3E] text-sm mt-10 w-1/2">
        Strategies that build consistent community and positive experiences in your classroom will reduce the occurrence of behavior problems at your preschool. Setting clear expectations around acceptable behavior will help your children learn positive values and habits that will enhance their learning environment.
        </span>
      </div>

      <div className=" flex flex-col justify-start items-start mt-20 mx-10">
        <span className=" font-semibold text-4xl text-black">
        Further Reading:
        </span>
        <span className=" font-regular text-[#141E3E] text-sm mt-2 w-1/2">
       * Family Engagement in Early Education
        </span>

        <span className=" font-regular text-[#141E3E] text-sm mt-2 w-1/2">
       * Top Tips for Preschool Classroom Management
        </span>
      </div>

    </div>
  );
};

export default Blog;
