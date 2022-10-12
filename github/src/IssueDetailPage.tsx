import React from "react";

import {
  TriangleDownIcon,
  KebabHorizontalIcon,
  SmileyIcon,
  TagIcon,
  PersonIcon,
  CheckCircleIcon,
  IssueReopenedIcon,
  SkipIcon,
  GearIcon,
  BellSlashIcon,
  LockIcon,
  PinIcon,
  InfoIcon,
  ArrowRightIcon,
  TrashIcon,
  IssueOpenedIcon,
} from "@primer/octicons-react";

import UserImg from "../src/img/userImg.png";
import CreateComment from "./CreateComment";

function IssueDetailPage() {
  return (
    <div className="mt-6 px-4 xl:flex xl:justify-center xl:items-center">
      <div>
        <div className="md:mb-4 lg:block lg:justify-between lg:items-baseline lg:border-b-[1px] lg:border-solid lg:border-[#d0d7de] lg:mb-4 xl:justify-between xl:items-baseline xl:border-b-[1px] xl:border-solid lxl:border-[#d0d7de] xl:mb-4">
          <div className="lg:flex lg:items-center lg:justify-between xl:flex xl:items-center xl:justify-between">
            <div className="flex items-center justify-between mb-4 lg:order-2 xl:order-2">
              <div className="flex items-center justify-between lg:justify-end xl:justify-end">
                <button className="px-3 py-[3px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] flex justify-center items-center bg-[#f6f8fa] text-[#24292f] rounded-md">
                  <p className="text-xs">Edit</p>
                </button>
                <button className="ml-2 px-3 py-[3px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] flex justify-center items-center bg-[#2da44e] text-white rounded-md">
                  <p className="text-xs">New Issue</p>
                </button>
              </div>
              <p className="py-1 text-[#0969da] text-sm lg:hidden xl:hidden">
                Jump to bottom
              </p>
            </div>
            <div>
              <div className="flex items-center justify-start mb-2">
                <p className="text-[26px] font-normal">Demo</p>
                <p className="text-[#57606a] font-light text-[26px] ml-2">
                  #53
                </p>
              </div>

              <div className="flex items-center justify-start pb-2 mb-4">
                <button className="mr-2 py-[5px] px-3 border-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#2da44e] text-white font-medium rounded-3xl">
                  <IssueOpenedIcon size={16} />
                  open
                </button>
                <div className="mb-2 flex items-center justify-start">
                  <a href="#" className="text-[#57606a] font-semibold">
                    Xie-Ms
                  </a>
                  <p className="text-[#57606a] text-sm ml-1">
                    opened this issue 3 days ago · 0 comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 border-b-[1px] border-solid border-[rgba(27,31,36,0.15)] lg:hidden xl:hidden">
          <div className="mb-4 flex items-center justify-start">
            <p className="text-xs w-[122.53px] text-[#57606a] font-semibold">
              Assignee
            </p>
            <img src={UserImg} alt="" className="rounded-full w-[3%]" />
          </div>
          <div className="mb-4 flex items-center justify-start">
            <p className="text-xs w-[122.53px] text-[#57606a] font-semibold">
              Labels
            </p>
            <button className="text-xs bg-yellow-400 px-[7px] mb-1 mr-1 border-[1px] border-solid border-[rgba(27,31,36,0.15)] rounded-3xl font-semibold h-[18px]">
              0921
            </button>
          </div>
        </div>
        <div className="md:block md:justify-between md:items-center lg:flex lg:justify-evenly lg:items-baseline xl:flex xl:justify-evenly xl:items-baseline">
          <div>
            <div>
              <div className="lg:flex lg:justify-start lg:items-start xl:flex xl:justify-start xl:items-start">
                <div className="md:hidden lg:w-[7.5%] xl:w-[7.5%]">
                  <img
                    src={UserImg}
                    alt=""
                    className="rounded-full md:w-[3%] lg:w-[60%] xl:w-[60%]"
                  />
                </div>
                <div className="border-[1px] border-solid border-[rgba(84,174,255,0.4)] rounded-md mb-4 md:w-full lg:w-[90%] xl:w-[90%]">
                  <div className="h-[37px] flex justify-between items-center px-4 border-b-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#ddf4ff]">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold mr-2">Xie-MS</p>
                      <p className="flex justify-between items-center text-sm text-[#57606a]">
                        commented 6 hours ago．
                        <button className="flex justify-between items-center">
                          <p>edited</p>
                          <TriangleDownIcon size={16} />
                        </button>
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <button className="ml-1 px-[7px] border-[1px] border-solid border-[rgba(84,174,255,0.4)] text-xs rounded-[2rem] text-[#57606a] font-medium">
                        owner
                      </button>
                      <div className="ml-2">
                        <KebabHorizontalIcon size={16} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm px-4 py-4 text-[#24292f]">
                      <p>Demo</p>
                    </div>
                    <div className="ml-4 mb-4">
                      <button className="w-[26px] h-[26px] bg-[#f6f8fa] border-[1px] border-solid border-[hsla(210,18%,87%,1)] rounded-full">
                        <SmileyIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-4 lg:ml-10 md:ml-0 md:pl-0 xl:pl-4 xl:ml-10">
                <div className="absolute w-[2px] h-full bg-[rgba(27,31,36,0.15)] left-4 -z-20 top-0 lg:left-[30px] lg:top-[-15px] xl:left-[30px] xl:top-[-15px]" />
                <div className="flex justify-start items-center py-4 ml-4">
                  <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
                    <button>
                      <TagIcon size={16} />
                    </button>
                  </div>

                  <button className="flex justify-start items-center">
                    <img
                      src={UserImg}
                      alt=""
                      className="rounded-full w-[3.5%]"
                    />
                    <p className="mr-2">Xie-MS</p>
                    <p className="flex justify-start items-center text-sm text-[#57606a]">
                      added the{" "}
                      <button className="text-[#24292f] flex justify-center items-center text-sm bg-yellow-400 px-[7px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] rounded-3xl font-semibold h-[18px] mx-1">
                        abc
                      </button>{" "}
                      labels 6 hours ago
                    </p>
                  </button>
                </div>
                <div className="flex justify-start items-center py-4 ml-4">
                  <div className="flex justify-center items-center w-[40px] h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
                    <button>
                      <PersonIcon size={16} />
                    </button>
                  </div>
                  <button className="flex justify-start items-center">
                    <img
                      src={UserImg}
                      alt=""
                      className="rounded-full w-[3.5%]"
                    />
                    <p className="mr-2">Xie-MS</p>
                    <p className="flex justify-start items-center text-sm text-[#57606a]">
                      assigned{" "}
                      <p className="text-[#24292f] mx-2 font-semibold">
                        emil0519
                      </p>{" "}
                      and unassigned{" "}
                      <p className="text-[#24292f] mx-2 font-semibold">
                        Xie-MS
                      </p>{" "}
                      labels 6 hours ago
                    </p>
                  </button>
                </div>

                <div className="relative flex justify-start items-center py-4 ml-4">
                  <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#8250df] ml-[-15px]">
                    <button>
                      <CheckCircleIcon size={16} fill={"white"} />
                    </button>
                  </div>
                  <button className="flex justify-start items-center">
                    <img
                      src={UserImg}
                      alt=""
                      className="rounded-full w-[3.5%]"
                    />
                    <p className="mr-2">Xie-MS</p>
                    <p className="flex justify-start items-center text-sm text-[#57606a]">
                      closed this as comppleted 6 hours ago
                    </p>
                  </button>
                  <div className="absolute w-[107%] bg-[rgba(27,31,36,0.15)] h-[4px] bottom-0 left-[-33px] lg:left-[-70px] xl:left-[-70px]" />
                </div>

                <div className="flex justify-start items-center py-4 ml-4">
                  <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#2da44e] ml-[-15px]">
                    <button>
                      <IssueReopenedIcon size={16} fill={"white"} />
                    </button>
                  </div>

                  <button className="flex justify-start items-center">
                    <img
                      src={UserImg}
                      alt=""
                      className="rounded-full w-[3.5%]"
                    />
                    <p className="mr-2">Xie-MS</p>
                    <p className="flex justify-start items-center text-sm text-[#57606a]">
                      reopened this 6 hours ago
                    </p>
                  </button>
                </div>

                <div className="relative flex justify-start items-center py-4 ml-4">
                  <div className="flex justify-center items-center w-8 h-8 rounded-full border-[2px] border-solid border-white mr-2 bg-[#eaeef2] ml-[-15px]">
                    <button>
                      <SkipIcon size={16} />
                    </button>
                  </div>
                  <button className="flex justify-start items-center">
                    <img
                      src={UserImg}
                      alt=""
                      className="rounded-full w-[3.5%]"
                    />
                    <p className="mr-2">Xie-MS</p>
                    <p className="flex justify-start items-center text-sm text-[#57606a]">
                      closed this an not planned 6 hours ago
                    </p>
                  </button>
                  <div className="absolute w-[107%] bg-[rgba(27,31,36,0.15)] h-[4px] bottom-0 left-[-33px] lg:left-[-70px] xl:left-[-70px]" />
                </div>
              </div>
              <CreateComment />
            </div>
          </div>
          <div>
            <div>
              <div className="md:w-full lg:w-[240px] xl:w-[256px]">
                <div className="md:pt-4 lg:pt-0 xl:pt-0">
                  <div className=" xl:flex justify-between items-center mb-[10px] relative">
                    <p
                      className="py-1 text-xs mb-1 hover:text-[#0969da]"
                      // ref={targetAssigneeSpan}
                    >
                      Assignees
                    </p>
                    <div
                      className="pt-4 cursor-pointer xl:mt-[2px] xl:pt-0 lg:mt-[2px] lg:pt-0"
                      // onClick={() => {
                      //   setItemList(true);
                      //   setListClose(true);
                      //   setTargetText(targetAssigneeSpan.current?.outerText);
                      // }}
                    >
                      <GearIcon size={16} />
                    </div>
                  </div>
                </div>
                <div
                  className={`block md:bg-black md:opacity-60 top-0 bottom-0 left-0 right-0 fixed md:z-10 xl:z-0 lg:z-0`}
                  // onClick={() => {
                  //   setListClose(false);
                  //   setItemList(false);
                  // }}
                />
                {/* <SharedListData
                setListClose={setListClose}
                itemList={itemList}
                setItemList={setItemList}
                targetText={targetText}
                setTargetText={setTargetText}
                targetAssigneeSpan={targetAssigneeSpan}
                targetLabelSpan={targetLabelSpan}
                renderAssigneeData={renderAssigneeData}
                renderLabelData={renderLabelData}
                assigneeSelectData={assigneeSelectData}
                setAssigneeSelectData={setAssigneeSelectData}
                labelSelectData={labelSelectData}
                setLabelSelectData={setLabelSelectData}
              /> */}
                <div>
                  <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center relative">
                    <p
                      className="py-1 text-xs mb-1 hover:text-[#0969da]"
                      // ref={targetLabelSpan}
                    >
                      Labels
                    </p>
                    <div
                      className="pt-4 cursor-pointer xl:mt-[2px] xl:pt-0 lg:mt-[2px] lg:pt-0"
                      // onClick={() => {
                      //   setListClose(true);
                      //   setItemList(true);
                      //   setTargetText(targetLabelSpan.current?.outerText);
                      // }}
                    >
                      <GearIcon size={16} />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
                    <p className="py-1 text-xs mb-1 hover:text-[#0969da]">
                      Projects
                    </p>
                    <div>
                      <GearIcon size={16} />
                    </div>
                  </div>
                  <p className="text-xs flex justify-start items-center">
                    Noneyet
                  </p>
                </div>
                <div>
                  <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 flex justify-between items-center">
                    <p className="py-1 text-xs mb-1 hover:text-[#0969da]">
                      Milestone
                    </p>
                    <div>
                      <GearIcon size={16} />
                    </div>
                  </div>
                  <p className="text-xs flex justify-start items-center">
                    Noneyet
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center">
                  <p className="py-1 text-xs mb-1">Development</p>
                  <p className="text-xs flex justify-start items-center">
                    shows branches and pull requests linked to this issue.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center">
                  <div className="text-xs flex justify-between items-center py-1 mb-1 hover:text-[#0969da]">
                    <p>Notifications</p>
                    <p>Customize</p>
                  </div>
                  <div>
                    <button className="text-xs flex justify-center items-center px-3 py-[3px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] w-full bg-[#f6f8fa] rounded-md">
                      <BellSlashIcon size={16} className="mr-2" />
                      <p className="text-sm leading-5">Umsubscribe</p>
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-[#57606a]">
                    You’re receiving notifications because you’re watching this
                    repository.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center">
                  <p className="mb-2 text-xs text-[#57606a]">1 participants</p>
                  <div>
                    <button>
                      <img
                        src={UserImg}
                        alt=""
                        className="rounded-full w-[6%]"
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t-[1px] border-solid border-gray-200 block justify-between items-center">
                  <div className="flex justify-start items-center">
                    <LockIcon size={16} className="mr-1" />
                    <p className="text-xs font-semibold">Lock conversation</p>
                  </div>
                </div>
                <div className="flex justify-start items-center pt-4">
                  <PinIcon size={16} className="mr-1" />
                  <p className="text-xs font-semibold mr-1">Pin issue</p>
                  <InfoIcon size={16} className="mr-1" />
                </div>

                <div className="flex justify-start items-center pt-4">
                  <ArrowRightIcon size={16} className="mr-1" />
                  <p className="text-xs font-semibold">Transfer issue</p>
                </div>
                <div className="flex justify-start items-center pt-4">
                  <TrashIcon size={16} className="mr-1" />
                  <p className="text-xs font-semibold">Delete issue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueDetailPage;
