import React from "react";

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

function NewIssuePage() {
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
                  className="px-3 py-[5px] border-[1px] border-solid border-gray-400 bg-slate-50 rounded-md w-full"
                />
              </div>
              <div className="w-full">
                <div className="md:w-full md:mt-0 md:mx-0 lg:mt-2 lg:mx-2 lg:flex lg:justify-between lg:items-end  xl:mt-2 xl:mx-2 xl:flex xl:justify-between xl:items-end">
                  <div className="lg:flex lg:justify-between lg:items-end md:w-full xl:flex xl:justify-between xl:items-end ">
                    <button className="py-2 px-5 md:border-[1px] border-solid border-gray-400 md:w-[50%] lg:w-auto lg:border-[1px] lg:border-b-[0px] lg:border-gray-200 lg:rounded-t-md  xl:w-auto xl:border-[1px] xl:border-b-[0px] xl:border-gray-200 xl:rounded-t-md  ">
                      <p className="lg:text-sm xl:text-sm">Write</p>
                    </button>
                    <button className="py-2 px-5 md:border-t-[1px] md:border-r-[1px] md:border-b-[1px] border-solid border-gray-400 bg-slate-50 md:w-[50%] lg:w-auto lg:border-[0px] lg:bg-white lg:border-b-[1px] lg:border-solid lg:border-gray-200  xl:w-auto xl:border-[0px] xl:bg-white xl:border-b-[1px] xl:border-solid xl:border-gray-200">
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
                <div className="lg:h-[230px] lg:px-0 lg:py-0 border-[1px] border-solid border-gray-400 bg-slate-100 rounded-md w-full relative md:border-0 px-2 py-2 md:h-[200px] xl:h-[230px] xl:px-0 xl:py-0">
                  <div>
                    <textarea
                      cols="30"
                      rows="10"
                      className="md:h-[200px] px-2 py-2 border-[1px] md:border-b-[0px] border-solid border-gray-400 bg-slate-100 rounded-md w-full lg:focus:bg-white lg:border-b-[1px] border-t-[0px] border-r-[0px] border-l-[0px] lg:border-dashed lg:h-[200px] lg:rounded-b-[0px] xl:focus:bg-white xl:border-dashed xl:h-[200px] xl:rounded-b-[0px]"
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
                <div className="px-2 pb-2 w-full h-[191px] border-b-[2px] border-solid border-[#d0d7de] hidden">
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
                      <button className="mt-6 px-4 py-[5px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] w-full bg-[#94d3a2] rounded-md lg:mt-0 xl:mt-0">
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
        <div className="xl:flex justify-between items-center mb-[10px]">
          <div className="md:pt-4 lg:pt-0 xl:pt-0">
            <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Assignees</p>
            <p className="text-xs hidden justify-start items-center">
              No one—<p className="hover:text-[#0969da]">assign yourself</p>
            </p>
            <button className="flex justify-start items-center">
              <img
                src={UserImg}
                alt=""
                className="w-[5%] rounded-full mr-1 lg:w-[5%] xl:w-[5%]"
              />
              <p className="text-xs font-semibold">Xie-MS</p>
            </button>
          </div>
          <div className="pt-4">
            <GearIcon size={16} />
          </div>
        </div>
        <div className="bg-black opacity-60 top-0 bottom-0 left-0 right-0 hidden"></div>
        <ul className="md:hidden md:top-[7.5%] md:left-[2.2%] md:bottom-[12.5%] text-sm md:w-[95.5%] lg:hidden xl:absolute top-0 bottom-0 bg-white border-[1px] border-solid border-gray-300 rounded-xl w-[275px] hidden">
          <li className="xl:px-4 py-4 text-xs font-semibold flex justify-between items-center sm:font-semibold sm:px-4 sm:py-4">
            <p>Assign up to 10 people to this issue</p>
            <p>X</p>
          </li>
          <li className="xl:px-2 py-2 border-t-[1px] border-solid border-gray-300 md:px-4 md:py-4">
            <input
              type="text"
              defaultValue="Type or choose a user"
              className="xl:py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-xl text-sm w-full"
            />
          </li>
          <li className="xl:py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center md:px-[10px] md:bg-slate-100 md:font-semibold">
            Suggeations
          </li>
          <li className="xl:py-[7px] px-4 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center md:pl-5 md:pr-2 md:py-4">
            <div>
              <CheckIcon size={16} className="mr-2" />
            </div>
            <div className="xl:flex items-center justify-start">
              <img
                src={UserImg}
                alt=""
                className="xl:w-[4%] rounded-full mr-2"
              />
              <div className="xl:flex items-center justify-center">
                <p className="xl:mr-2 font-semibold">Xie-MS</p>
                <p>xms_7104</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
          <div>
            <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Labels</p>
            <p className="text-xs hidden justify-start items-center">Noneyet</p>
            <button className="bg-[#fff8c5] text-xs font-semibold flex justify-center items-center rounded-xl border-[1px] border-solid border-gray-50 mr-1 mb-1 px-[7px] h-[20px]">
              abcde
            </button>
          </div>
          <div>
            <GearIcon size={16} />
          </div>
        </div>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
          <div>
            <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Projects</p>
            <p className="text-xs flex justify-start items-center">Noneyet</p>
          </div>
          <div>
            <GearIcon size={16} />
          </div>
        </div>
        <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
          <div>
            <p className="py-1 text-xs mb-1 hover:text-[#0969da]">Milestone</p>
            <p className="text-xs flex justify-start items-center">Noneyet</p>
          </div>
          <div>
            <GearIcon size={16} />
          </div>
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
        <button className="mt-6 px-4 py-[5px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] w-full bg-[#94d3a2] rounded-md lg:mt-0 xl:mt-0">
          <p className="text-sm text-white">Submit new issue</p>
        </button>
      </div>
    </div>
  );
}

export default NewIssuePage;
