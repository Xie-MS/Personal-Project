import React from "react";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  TypographyIcon,
  QuoteIcon,
  CodeIcon,
  LinkIcon,
  HeadingIcon,
  BoldIcon,
  ItalicIcon,
  ListUnorderedIcon,
  ListOrderedIcon,
  TasklistIcon,
  MentionIcon,
  FileMediaIcon,
  CrossReferenceIcon,
  ReplyIcon,
  ChevronDownIcon,
  GearIcon,
  InfoIcon,
  CheckIcon,
  MarkdownIcon,
} from "@primer/octicons-react";

import UserImg from "../src/img/userImg.png";

import SharedListData from "./SharedListData";
import api from "./api";

function NewIssuePage() {
  const [preview, setPreview] = useState(false);
  const [listClose, setListClose] = useState(false);
  const [itemList, setItemList] = useState(false);
  const [targetText, setTargetText]: any = useState("");
  const [issueTitle, setIssueTitle]: any = useState("");
  const [issueContainer, setIssueContainer]: any = useState("");

  const [renderAssigneeData, setRenderAssigneeData]: any = useState([]);
  const [renderLabelData, setRenderLabelData]: any = useState([]);

  const [assigneeSelectData, setAssigneeSelectData]: any = useState([]);
  const [labelSelectData, setLabelSelectData]: any = useState([]);

  const targetAssigneeSpan = useRef<HTMLParagraphElement | null>(null);
  const targetLabelSpan = useRef<HTMLParagraphElement | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAssigneeList() {
      if (targetText === targetAssigneeSpan.current?.outerText) {
        const data = await api.getIssuesAssignee();
        setRenderAssigneeData(data);
      } else if (targetText === targetLabelSpan.current?.outerText) {
        const data = await api.getLabels();
        setRenderLabelData(data);
      }
    }
    getAssigneeList();
  }, [targetText]);

  function AssigneeSelect() {
    if (assigneeSelectData.length !== 0) {
      return renderAssigneeData.map(
        (_item: any, assigneeSelectIndex: number) => {
          return (
            <button
              className={`${
                assigneeSelectData.includes(
                  renderAssigneeData[assigneeSelectIndex].login
                )
                  ? "flex"
                  : "hidden"
              } justify-start items-center mt-2`}
            >
              <img
                src={`${renderAssigneeData[assigneeSelectIndex].avatar_url}`}
                alt=""
                className="md:w-[5%] rounded-full mr-1 lg:w-[9%] xl:w-[9%]"
              />
              <p className="text-xs font-semibold">
                {renderAssigneeData[assigneeSelectIndex].login}
              </p>
            </button>
          );
        }
      );
    } else if (assigneeSelectData.length === 0) {
      return (
        <p className="text-xs flex justify-start items-center">
          No one—<p className="hover:text-[#0969da]">assign yourself</p>
        </p>
      );
    }
  }

  function LabelseSelect() {
    if (labelSelectData.length !== 0) {
      return renderLabelData.map((_item: any, labelSelectIndex: number) => {
        return (
          <button
            style={{
              backgroundColor: `#${renderLabelData[labelSelectIndex].color}`,
            }}
            className={`${
              labelSelectData.includes(renderLabelData[labelSelectIndex].name)
                ? "flex"
                : "hidden"
            } text-xs font-semibold justify-center items-center rounded-xl border-[1px] border-solid border-gray-50 mr-1 mb-1 px-[7px] h-[20px]`}
          >
            {renderLabelData[labelSelectIndex].name}
          </button>
        );
      });
    } else if (labelSelectData.length === 0) {
      return <p className="text-xs justify-start items-center">Noneyet</p>;
    }
  }

  console.log(labelSelectData, assigneeSelectData);

  async function setIssue() {
    const data = await api.setIssue({
      owner: "Xie-MS",
      repo: "Personal-Project",
      title: issueTitle,
      body: issueContainer,
      labels: labelSelectData,
      assignees: assigneeSelectData,
    });

    navigate(`/IssuePage`);
    // .then((Labeldata) => {
    //   dispatch({
    //     type: "CreateLabels",
    //     payload: { Labeldata },
    //   });
    // });
  }

  return (
    <div className="md:block mt-6 px-4 relative lg:flex justify-evenly items-start lg:px-6 xl:flex xl:px-6">
      <div className="lg:relative flex justify-evenly items-start xl:flex relative">
        <div className="md:hidden lg:block w-[7.24%] xl:block">
          <img
            src={UserImg}
            alt=""
            className="w-[70%] rounded-full sm:hidden"
          />
        </div>
        <div className="md:w-full lg:w-[88.7%] xl:w-[88.7%]">
          <div>
            <div className="md:h-[328px] md:border-[0px] lg:border-[1px] lg:border-solid lg:border-gray-200 lg:rounded-md lg:h-[417px] lg:mb-2 xl:border-[1px] xl:border-solid xl:border-gray-200 xl:rounded-md xl:h-[417px] xl:mb-2">
              <div className="md:mb-4 md:px-0 md:py-0 lg:mb-0 lg:px-2 lg:py-2 xl:mb-0 xl:px-2 xl:py-2">
                <input
                  type="text"
                  defaultValue="Title"
                  className="px-3 py-[5px] border-[1px] border-solid border-gray-400 bg-slate-50 rounded-md w-full lg:focus:bg-white lg:focus:border-[#218bff] xl:focus:bg-white xl:focus:border-blue-400"
                  onChange={(e) => {
                    setIssueTitle(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <div className="md:w-full md:mt-0 md:mx-0 lg:mt-2 lg:mx-2 lg:flex lg:justify-between lg:items-end  xl:mt-2 xl:mx-2 xl:flex xl:justify-between xl:items-end">
                  <div className="lg:flex lg:justify-between lg:items-end md:w-full xl:flex xl:justify-between xl:items-end ">
                    <button
                      className={`${
                        preview
                          ? "border-none bg-white"
                          : "border-gray-400 bg-slate-50"
                      } py-2 px-5 md:border-[1px] border-solid md:w-[50%] lg:w-auto lg:border-[1px] lg:border-b-[0px] lg:border-gray-200 lg:rounded-t-md xl:w-auto xl:border-[1px] xl:border-b-[0px] xl:border-gray-200 xl:rounded-t-md`}
                      onClick={() => {
                        setPreview(false);
                      }}
                    >
                      <p className="lg:text-sm xl:text-sm">Write</p>
                    </button>
                    <button
                      className={`${
                        preview
                          ? "border-gray-200 border-t-[1px] border-r-[1px] border-l-[1px] border-b-[0px] bg-slate-50 rounded-t-md"
                          : "bg-white border-b-[1px] border-solid border-gray-200"
                      } py-2 px-5 md:border-t-[1px] md:border-r-[1px] md:border-b-[1px] border-solid border-gray-400 md:w-[50%] lg:w-auto xl:w-auto`}
                      onClick={() => {
                        setPreview(true);
                      }}
                    >
                      <p className="lg:text-sm xl:text-sm">Preview</p>
                    </button>
                  </div>
                  <div className="md:hidden lg:w-[100%] xl:w-[100%]">
                    <hr className="md:hidden lg:block xl:block" />
                  </div>
                </div>

                <div className="flex justify-between items-start pt-2 px-2 mb-2 lg:mb-0 xl:mb-0">
                  <div className="md:block lg:hidden xl:hidden">
                    <details>
                      <summary className="flex ml-[5px] mr-1 py-2 px-1">
                        <TypographyIcon size={16} />
                        <ChevronDownIcon size={16} />
                      </summary>
                      <button className="ml-[5px] mr-1 py-2 px-1">
                        <HeadingIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1">
                        <BoldIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1">
                        <ItalicIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1">
                        <ListUnorderedIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1">
                        <ListOrderedIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1">
                        <TasklistIcon size={16} />
                      </button>
                    </details>
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="md:hidden lg:flex xl:flex">
                      <button className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <HeadingIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <BoldIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <ItalicIcon size={16} />
                      </button>
                    </div>
                    <div className="md:hidden lg:flex">
                      <button className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <ListUnorderedIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <ListOrderedIcon size={16} />
                      </button>
                      <button className="ml-[5px] mr-1 py-2 px-1 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <TasklistIcon size={16} />
                      </button>
                    </div>
                    <div>
                      <div>
                        <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                          <QuoteIcon size={16} />
                        </button>
                        <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                          <CodeIcon size={16} />
                        </button>
                        <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                          <LinkIcon size={16} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <MentionIcon size={16} />
                      </button>
                      <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <FileMediaIcon size={16} />
                      </button>
                      <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <CrossReferenceIcon size={16} />
                      </button>
                      <button className="ml-[5px] py-2 px-2 lg:py-1 lg:px-1 lg:ml-[6px] lg:mx-1 xl:py-1 xl:px-1 xl:ml-[6px] xl:mx-1">
                        <ReplyIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-2 lg:mx-2 xl:mx-2">
                <div
                  className={`${
                    preview ? "hidden" : "block"
                  } lg:h-[230px] lg:px-0 lg:py-0 border-[1px] border-solid border-gray-400 bg-slate-100 rounded-md w-full relative md:border-0 px-2 py-2 md:h-[200px] xl:h-[230px] xl:px-0 xl:py-0`}
                >
                  <div>
                    <textarea
                      cols="30"
                      rows="10"
                      defaultValue="Leave a comment"
                      className="md:h-[200px] px-2 py-2 border-[1px] md:border-b-[0px] border-solid border-gray-400 bg-slate-100 rounded-md w-full lg:focus:bg-white lg:border-b-[1px] border-t-[0px] border-r-[0px] border-l-[0px] lg:border-dashed lg:h-[200px] lg:rounded-b-[0px] xl:focus:bg-white xl:border-dashed xl:h-[200px] xl:rounded-b-[0px]"
                      onChange={(e) => {
                        setIssueContainer(e.target.value);
                      }}
                    />
                  </div>
                  <div className="md:hidden lg:absolute bottom-0 flex justify-between items-center w-full px-[6px] py-[6px] lg:h-[30px]  xl:absolute xl:h-[30px]">
                    <button>
                      <p className="lg:text-sm xl:text-sm">
                        Attach files by dragging & dropping, selectimg or
                        pasting them.
                      </p>
                    </button>
                    <button>
                      <MarkdownIcon size={16} />
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    preview ? "block" : "hidden"
                  } px-2 pb-2 w-full h-[191px] border-b-[2px] border-solid border-[#d0d7de]`}
                >
                  <p className="text-sm">Nothing to preview</p>
                </div>
                <div className="md:hidden">
                  <div className="flex justify-between items-center mt-2">
                    <div className="md:hidden lg:flex justify-between items-center xl:flex">
                      <MarkdownIcon
                        size={16}
                        className="lg:mr-[2px] xl:mr-[2px]"
                      />
                      <p className="lg:text-xs xl:text-xs">
                        Styling with Markdown is supported
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 lg:mt-0 lg:pt-0 xl:mt-0 xl:pt-0">
                      <button
                        className={`${
                          issueTitle !== "" ? "bg-[#2DA44E]" : "bg-[#94d3a2]"
                        } mt-6 px-4 py-[5px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] w-full bg-[#94d3a2] rounded-md lg:mt-0 xl:mt-0`}
                        onClick={() => {
                          setIssue();
                        }}
                      >
                        <p className="text-sm text-white">Submit new issue</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-2 text-xs">
            <p className="flex justify-start items-center">
              <div className="mr-1">
                <InfoIcon size={16} className="fill-[#57606a]" />
              </div>
              Remember, contributions to this repository should follow our{" "}
              <a href="#" className="text-[#0969da]">
                GitHub Community Guidelines.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-full lg:w-[240px] xl:w-[256px]">
        <div className="md:pt-4 lg:pt-0 xl:pt-0">
          <div className=" xl:flex justify-between items-center mb-[10px] relative">
            <p
              className="py-1 text-xs mb-1 hover:text-[#0969da]"
              ref={targetAssigneeSpan}
            >
              Assignees
            </p>
            <div
              className="pt-4 cursor-pointer xl:mt-[2px] xl:pt-0 lg:mt-[2px] lg:pt-0"
              onClick={() => {
                setItemList(true);
                setListClose(true);
                setTargetText(targetAssigneeSpan.current?.outerText);
              }}
            >
              <GearIcon size={16} />
            </div>
          </div>
          {AssigneeSelect()}
        </div>
        <div
          className={`${
            itemList ? "block" : "hidden"
          } md:bg-black md:opacity-60 top-0 bottom-0 left-0 right-0 fixed md:z-10`}
          onClick={() => {
            setListClose(false);
            setItemList(false);
          }}
        />
        <div
          className={`${
            targetText === targetAssigneeSpan.current?.outerText
              ? "xl:top-[40px] md:h-[775px] lg:z-20 xl:z-20 md:top-[-100px]"
              : "xl:top-[115px] xl:z-30 md:top-[-100px] md:max-h[775px]"
          } md:left-[2.3%] md:bottom-[25%] md:top-[-470px] text-sm md:w-[95.5%] xl:absolute top-0 bottom-0 bg-white border-[1px] border-solid border-gray-300 rounded-md xl:right-[10px] xl:h-fit lg:h-fit md:z-30`}
          onClick={() => {
            setListClose(false);
            setItemList(false);
            setTargetText("");
          }}
        >
          <SharedListData
            setListClose={setListClose}
            itemList={itemList}
            setItemList={setItemList}
            targetText={targetText}
            renderAssigneeData={renderAssigneeData}
            renderLabelData={renderLabelData}
            assigneeSelectData={assigneeSelectData}
            setAssigneeSelectData={setAssigneeSelectData}
            labelSelectData={labelSelectData}
            setLabelSelectData={setLabelSelectData}
          />
        </div>
        <div>
          <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center relative">
            <p
              className="py-1 text-xs mb-1 hover:text-[#0969da]"
              ref={targetLabelSpan}
            >
              Labels
            </p>
            <div
              className="pt-4 cursor-pointer xl:mt-[2px] xl:pt-0 lg:mt-[2px] lg:pt-0"
              onClick={() => {
                setListClose(true);
                setItemList(true);
                setTargetText(targetLabelSpan.current?.outerText);
              }}
            >
              <GearIcon size={16} />
            </div>
          </div>
          <div className="lg:flex lg:justify-start lg:items-center xl:flex xl:justify-start xl:items-center">
            {LabelseSelect()}
          </div>
        </div>

        <div>
          <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
            <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Projects</p>
            <div>
              <GearIcon size={16} />
            </div>
          </div>
          <p className="text-xs flex justify-start items-center">Noneyet</p>
        </div>
        <div>
          <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
            <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Milestone</p>
            <div>
              <GearIcon size={16} />
            </div>
          </div>
          <p className="text-xs flex justify-start items-center">Noneyet</p>
        </div>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center">
          <p className="py-1 text-xs mb-1">Development</p>
          <p className="text-xs flex justify-start items-center">
            shows branches and pull requests linked to this issue.
          </p>
        </div>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center">
          <p className="py-1 text-xs mb-1">Helpful resources</p>
          <p className="text-xs flex justify-start items-center text-[#0969da]">
            GitHub Community Guidelines
          </p>
        </div>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center"></div>
      </div>

      <div className="md:w-full mt-4 pt-4 md:block lg:hidden xl:hidden">
        <button
          className={`${
            issueTitle !== "" ? "bg-[#2DA44E]" : "bg-[#94d3a2]"
          } mt-6 px-4 py-[5px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] w-full rounded-md lg:mt-0 xl:mt-0`}
          onClick={() => {
            setIssue();
          }}
        >
          <p className="text-sm text-white">Submit new issue</p>
        </button>
      </div>
    </div>
  );
}

export default NewIssuePage;
