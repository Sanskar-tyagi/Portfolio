import React from "react";
import styled from "styled-components";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import {
  TbBrandVite,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandPrisma,
} from "react-icons/tb";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .mainDesc {
    width: 45vw;
    height: 60vh;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    border-top-left-radius: 0;
    border-left: 0px !important;
    border-bottom-left-radius: 0;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  @media only screen and (max-width: 968px) {
    align-items: center;
    .mainDesc {
      width: 90vw;
    }
  }
`;
function Right({ data }) {
  const Icons = ({ icon, cls, fill }) => {
    if (icon == "react") {
      return <IoLogoReact size={"26px"} fill={fill} />;
    }
    if (icon == "mongoDB") {
      return <BiLogoMongodb size={"26px"} fill={fill} />;
    }
    if (icon == "node") {
      return <IoLogoNodejs size={"26px"} fill={fill} />;
    }

    if (icon == "Js") {
      return <TbBrandJavascript size={"26px"} fill={fill} />;
    }
    if (icon == "Html") {
      return <TbBrandHtml5 size={"26px"} fill={fill} />;
    }
    if (icon == "TS") {
      return <TbBrandTypescript size={"26px"} fill={fill} />;
    }
    if (icon == "Prisma") {
      return <TbBrandPrisma size={"26px"} fill={fill} />;
    }
    if (icon == "Nextjs") {
      return <TbBrandNextjs size={"26px"} fill={fill} />;
    }
    if (icon == "Css") {
      return <DiCss3 size={"26px"} fill={fill} />;
    }
    if (icon == "Tailwind") {
      return <SiTailwindcss size={"26px"} fill={fill} />;
    }
    ``;
    if (icon == "express") {
      return (
        <SiExpress
          className="rounded-md p-1"
          size={"28px"}
          style={{ background: "white" }}
          fill={fill}
        />
      );
    }
  };

  return (
    <Box key={data.desc}>
      <h1>{data.timeline}</h1>
      <div className="mainDesc flex flex-col justify-evenly items-center">
        <h1 className="mt-2 underline underline-offset-4 decoration-rose-300">
          My Task
        </h1>
        <span className="px-10 md:text-sm lg:text-base text-xs">
          {data.desc}
        </span>

        <div className="flex flex-col justify-center items-center ">
          <h2 className="my-2 text-xl">Tech Used</h2>
          <div className="flex p-4  gap-4">
            {data.tech.map((item) => {
              return (
                <div className="flex sm:flex-row xl:flex-row md:flex-col flex-col justify-center items-center gap-1 ">
                  <Icons fill={item.fill} icon={item.name} />
                  <span className="md:text-sm  lg:text-base text-xs">
                    {item.name}
                  </span>{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Right;
