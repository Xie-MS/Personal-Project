import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

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

import CreateComment from "./CreateComment";
import UpdateComment from "./UpdateComment";
import IssueList from "./IssueList";
import TimeLine from "./TimeLine";
import api from "./api";
import { string } from "prop-types";

const Emoji = ["👍", "👎", "😄", "🎉", "😕", "❤", "🚀", "👀"];

function IssueDetailPage() {
  const [preview, setPreview] = useState(false);
  const [listClose, setListClose] = useState(false);
  const [itemList, setItemList] = useState(false);
  const [targetText, setTargetText]: any = useState("");
  const [issueTitle, setIssueTitle]: any = useState("");
  const [issueContainer, setIssueContainer]: any = useState("Leave a comment");
  const [issueUpdateContainer, setIssueUpdateContainer]: any = useState("");
  const [markDownBtn, setmarkDownBtn]: any = useState(true);
  const [renderAssigneeData, setRenderAssigneeData]: any = useState([]);
  const [renderLabelData, setRenderLabelData]: any = useState([]);
  const [assigneeSelectData, setAssigneeSelectData]: any = useState([]);
  const [labelSelectData, setLabelSelectData]: any = useState([]);
  const [renderIssueData, setRenderIssueData]: any = useState([]);
  const targetAssigneeSpan = useRef<HTMLParagraphElement | null>(null);
  const targetLabelSpan = useRef<HTMLParagraphElement | null>(null);

  const [emojiListClose, setEmojiListClose] = useState(false);
  const [kebabHorizontal, setKebabHorizontal] = useState(false);
  const [updateComment, setUpdateComment] = useState("");
  const [updateCommentNum, setUpdateCommentNum] = useState(-1);
  const [EditTitle, setEditTitle] = useState(false);
  const { IssueNum } = useParams();
  const [issueDetailData, setIssueDetailData]: any = useState<any>();
  const [timeLineIndex, settimeLineIndex]: any = useState(-2);
  const [commentNum, setCommentNum]: any = useState(0);

  const [assigneeLogin, setAssigneeLogin]: any = useState([]);

  const [createCommentRender, setCreateCommentRender]: any = useState(true);
  const [issueUpdateInputDefaultValue, setIssueUpdateInputDefaultValue]: any =
    useState("");

  const [issueDetailState, setIssueDetailState]: any = useState("");
  const [issueDetailStateReanson, setIssueDetailStateReanson]: any =
    useState("");

  useEffect(() => {
    async function getIssueDetailData(IssueNum: string | undefined) {
      const data = await api.getIssueData(IssueNum);
      setIssueDetailData(data);
      if (data.assignees !== null) {
        setAssigneeLogin(data.assignees);
      }
    }
    getIssueDetailData(IssueNum);
  }, [createCommentRender]);

  useEffect(() => {
    async function getAssigneeList() {
      if (targetText === targetAssigneeSpan.current?.outerText) {
        const data = await api.getIssuesAssignee();
        setRenderAssigneeData(data);
      } else if (targetText === targetLabelSpan.current?.outerText) {
        const data = await api.getLabels();
        setRenderLabelData(data);
      } else if (targetText === "Issues") {
        const data = await api.getListIssuesState(1);
        setRenderIssueData(data);
      }
    }
    getAssigneeList();
  }, [targetText]);

  async function UpdateTitle() {
    const data = await api.UpdateIssue(
      {
        owner: "Xie-MS",
        repo: "Personal-Project",
        issue_number: IssueNum,
        title: issueTitle,
      },
      IssueNum
    );
    setCreateCommentRender((prev: boolean) => !prev);
  }

  function EmojiList() {
    return Emoji.map((item: any, EmojiIndex: number) => {
      return (
        <li className="px-1 py-1 my-1 mx-[2px] h-10 flex justify-center items-center">
          {Emoji[EmojiIndex]}
        </li>
      );
    });
  }
  console.log(assigneeSelectData);

  function AssigneeSelect() {
    if (
      assigneeSelectData.length <= issueDetailData.assignees.length &&
      issueDetailData.assignees.length !== 0
    ) {
      return assigneeLogin.map((assigneeData: any, assigneeIndex: number) => {
        if (
          assigneeSelectData.length <= issueDetailData.assignees.length &&
          assigneeSelectData
            .toString()
            .toLowerCase()
            .includes(
              assigneeLogin[assigneeIndex].login.toString().toLowerCase()
            ) === false
        ) {
          console.log("Aaa");
          setAssigneeSelectData([
            ...assigneeSelectData,
            assigneeLogin[assigneeIndex].login,
          ]);
        }

        return (
          <button
            className={`${
              assigneeSelectData.includes(assigneeLogin[assigneeIndex].login)
                ? "flex"
                : "hidden"
            } justify-start items-center mt-2`}
          >
            <img
              src={`${assigneeLogin[assigneeIndex].avatar_url}`}
              alt=""
              className="md:w-[5%] rounded-full mr-1 lg:w-[9%] xl:w-[9%]"
            />
            <p className="text-xs font-semibold">
              {assigneeLogin[assigneeIndex].login}
            </p>
          </button>
        );
      });
    } else if (
      assigneeSelectData.length <= renderAssigneeData.length &&
      assigneeSelectData.length > issueDetailData.assignees.length
    ) {
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

  function CreateTime() {
    const NewTime = new Date();
    const IssuesTime = new Date(issueDetailData.created_at);
    const reduce = NewTime.getTime() - IssuesTime.getTime();
    const days = Math.floor(reduce / (24 * 3600 * 1000));
    const leave1 = reduce % (24 * 3600 * 1000);
    const hours = Math.floor(leave1 / (3600 * 1000));
    const leave2 = leave1 % (3600 * 1000);
    const minutes = Math.floor(leave2 / (60 * 1000));
    const leave3 = leave2 % (60 * 1000);
    const seconds = Math.round(leave3 / 1000);
    if (days > 0) {
      return <p className="text-sm mx-1"> {`${days}`} days ago</p>;
    } else if (days === 0 && hours > 0) {
      return <p className="text-sm mx-1"> {`${hours}`} hours ago</p>;
    } else if (days === 0 && hours === 0 && minutes > 0) {
      return <p className="text-sm mx-1"> {`${minutes}`} minutes ago</p>;
    } else if (days === 0 && hours === 0 && minutes === 0 && seconds > 0) {
      return <p className="text-sm mx-1"> {`${seconds}`} seconds ago</p>;
    }
  }

  function UpdateTime() {
    const NewTime = new Date();
    const IssuesTime = new Date(issueDetailData.updated_at);
    const reduce = NewTime.getTime() - IssuesTime.getTime();
    const days = Math.floor(reduce / (24 * 3600 * 1000));
    const leave1 = reduce % (24 * 3600 * 1000);
    const hours = Math.floor(leave1 / (3600 * 1000));
    const leave2 = leave1 % (3600 * 1000);
    const minutes = Math.floor(leave2 / (60 * 1000));
    const leave3 = leave2 % (60 * 1000);
    const seconds = Math.round(leave3 / 1000);
    if (days > 0) {
      return <p className="text-sm mx-1"> {`${days}`} days ago</p>;
    } else if (days === 0 && hours > 0) {
      return <p className="text-sm mx-1"> {`${hours}`} hours ago</p>;
    } else if (days === 0 && hours === 0 && minutes > 0) {
      return <p className="text-sm mx-1"> {`${minutes}`} minutes ago</p>;
    } else if (days === 0 && hours === 0 && minutes === 0 && seconds > 0) {
      return <p className="text-sm mx-1"> {`${seconds}`} seconds ago</p>;
    }
  }

  async function setIssue() {
    const data = await api.setIssue({
      owner: "Xie-MS",
      repo: "Personal-Project",
      title: issueTitle,
      body: issueContainer,
      labels: labelSelectData,
      assignees: assigneeSelectData,
    });
    window.location.assign(`/IssuePage`);
  }

  function issueState() {
    if (
      (issueDetailData.state === "open" &&
        issueDetailData.state_reason === "reopened") ||
      (issueDetailData.state === "open" &&
        issueDetailData.state_reason === null)
    ) {
      return (
        <div className="flex items-center justify-start pb-2 mb-4">
          <button className="mr-2 py-[5px] px-3 border-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#2da44e] text-white font-medium rounded-3xl">
            <IssueOpenedIcon size={16} className="mr-1" />
            {issueDetailData.state}
          </button>
          <div className="mb-2 flex items-center justify-start">
            <a href="#" className="text-[#57606a] font-semibold">
              {issueDetailData.user.login}
            </a>
            <p className="text-[#57606a] text-sm ml-1 flex justify-start items-center">
              opened this issue {CreateTime()} · {issueDetailData.comments}{" "}
              comments
            </p>
          </div>
        </div>
      );
    } else if (
      issueDetailData.state === "closed" &&
      issueDetailData.state_reason === "not_planned"
    ) {
      return (
        <div className="flex items-center justify-start pb-2 mb-4">
          <button className="mr-2 py-[5px] px-3 border-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#6e7781] text-white font-medium rounded-3xl">
            <SkipIcon size={16} className="mr-1" />
            {issueDetailData.state}
          </button>
          <div className="mb-2 flex items-center justify-start">
            <a href="#" className="text-[#57606a] font-semibold">
              {issueDetailData.user.login}
            </a>
            <p className="text-[#57606a] text-sm ml-1 flex justify-start items-center">
              opened this issue {CreateTime()} · {issueDetailData.comments}{" "}
              comments
            </p>
          </div>
        </div>
      );
    } else if (
      issueDetailData.state === "closed" &&
      issueDetailData.state_reason === "completed"
    ) {
      return (
        <div className="flex items-center justify-start mb-4">
          <button className="mr-2 py-[5px] px-3 border-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#8250df] text-white font-medium rounded-3xl">
            <CheckCircleIcon size={16} className="mr-1" />
            {issueDetailData.state}
          </button>
          <div className="mb-2 flex items-center justify-start">
            <a href="#" className="text-[#57606a] font-semibold">
              {issueDetailData.user.login}
            </a>
            <p className="text-[#57606a] text-sm ml-1 flex justify-start items-center">
              opened this issue {CreateTime()} · {issueDetailData.comments}{" "}
              comments
            </p>
          </div>
        </div>
      );
    }
  }

  if (issueDetailData === undefined) return <></>;

  return (
    <div className="mt-6 px-4 xl:flex xl:justify-center xl:items-center">
      <div>
        <div className="md:mb-4 lg:block lg:justify-between lg:items-baseline lg:border-b-[1px] lg:border-solid lg:border-[#d0d7de] lg:mb-4 xl:justify-between xl:items-baseline xl:border-b-[1px] xl:border-solid lxl:border-[#d0d7de] xl:mb-4">
          <div className="md:block lg:flex lg:items-center lg:justify-between xl:flex xl:items-center xl:justify-between">
            <div className="lg:flex xl:flex items-center justify-between mb-4 lg:order-2 xl:order-2">
              <div
                className={`${
                  EditTitle ? "hidden" : "flex"
                } items-center justify-between lg:justify-end xl:justify-end`}
              >
                <button
                  className="px-3 py-[3px] border-[1px] border-solid border-[rgba(27,31,36,0.15)] flex justify-center items-center bg-[#f6f8fa] text-[#24292f] rounded-md"
                  onClick={() => {
                    setEditTitle(true);
                  }}
                >
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
            <div
              className={`${
                EditTitle ? "lg:w-full xl:w-full" : "lg:w-[80%] xl:w-[80%]"
              } `}
            >
              <div className="lg:flex lg:justify-between lg:items-center xl:flex xl:justify-between xl:items-center">
                <input
                  type="text"
                  className={`${
                    EditTitle ? "block" : "hidden"
                  } px-3 py-[5px] md:w-full bg:[#f6f8fa} text-md border-[1px] border-solid border-[#d0d7de] rounded-[6px] lg:mr-4 xl:mr-4 lg:w-full xl:w-full`}
                  defaultValue={issueDetailData.title}
                  onChange={(e) => {
                    setIssueTitle(e.target.value);
                    console.log(issueDetailData);
                  }}
                />

                <div
                  className={`${
                    EditTitle ? "flex" : "hidden"
                  } items-center justify-start lg:justify-end xl:justify-end my-2`}
                >
                  <button
                    className="px-4 py-[5px] mr-2 border-[1px] border-solid border-[rgba(27,31,36,0.15)] flex justify-center items-center bg-[#f6f8fa] text-[#24292f] rounded-md"
                    onClick={() => {
                      UpdateTitle();
                      setEditTitle(false);
                    }}
                  >
                    <p className="text-xs">Save</p>
                  </button>
                  <p
                    className="flex justify-center items-center text-[#0969da] rounded-md text-xs"
                    onClick={() => {
                      setEditTitle(false);
                    }}
                  >
                    Cancel
                  </p>
                </div>
              </div>
              <div
                className={`${
                  EditTitle ? "hidden" : "flex"
                } items-center justify-start mb-2`}
              >
                <p className="md:text-[26px] font-normal lg:text-[32px] xl:text-[32px]">
                  {issueDetailData.title}
                </p>
                <p className="text-[#57606a] font-light text-[26px] ml-2">
                  #{issueDetailData.number}
                </p>
              </div>
              {issueState()}
            </div>
          </div>
        </div>
        <div
          className={`${
            issueDetailData.assignee !== null &&
            issueDetailData.labels.length !== 0
              ? "md:block"
              : "md:hidden"
          } mb-6 border-b-[1px] border-solid border-[rgba(27,31,36,0.15)] lg:hidden xl:hidden`}
        >
          <div
            className={`{${
              issueDetailData.assignee !== null ? "flex" : "hidden"
            } mb-4 items-center justify-start`}
          >
            <p className="text-xs w-[122.53px] text-[#57606a] font-semibold">
              Assignee
            </p>
            <img
              src={issueDetailData.user.avatar_url}
              alt=""
              className="rounded-full w-[5%]"
            />
          </div>
          <div
            className={`{${
              issueDetailData.labels.length !== 0 ? "flex" : "hidden"
            } mb-4 items-center justify-start`}
          >
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
              <div
                className={`${
                  updateComment === "UpdateComment" && updateCommentNum === -1
                    ? "hidden"
                    : "flex"
                } lg:justify-start lg:items-start xl:justify-start xl:items-start`}
              >
                <div className="md:hidden lg:w-[7.5%] xl:w-[7.5%]">
                  <img
                    src={issueDetailData.user.avatar_url}
                    alt=""
                    className="rounded-full md:w-[3%] lg:w-[60%] xl:w-[60%]"
                  />
                </div>
                <div className="border-[1px] border-solid border-[rgba(84,174,255,0.4)] rounded-md mb-4 md:w-full lg:w-[90%] xl:w-[90%]">
                  <div className="h-[37px] flex justify-between items-center px-4 border-b-[1px] border-solid border-[rgba(27,31,36,0.15)] bg-[#ddf4ff]">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold mr-2">
                        {issueDetailData.user.login}
                      </p>
                      <p className="flex justify-between items-center text-sm text-[#57606a]">
                        commented {UpdateTime()}．
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
                      <div className="md:hidden lg:px-2 lg:py-1 lg:relative xl:px-2 xl:py-1 xl:relative">
                        <button
                          className="w-[26px] h-[26px] bg-transparent rounded-full"
                          onClick={() => {
                            if (emojiListClose === false) {
                              setEmojiListClose(true);
                            } else if (emojiListClose === true) {
                              setEmojiListClose(false);
                            }
                          }}
                        >
                          <SmileyIcon size={16} />
                        </button>
                        <div className="absolute left-[-270px] top-[5px]">
                          <ul
                            className={`${
                              emojiListClose ? "flex" : "hidden"
                            } justify-start items-center my-2 mr-2 px-[2px] border-[1px] border-solid border-[#d0d7de] bg-white rounded-md hover:cursor-pointer`}
                          >
                            {EmojiList()}
                          </ul>
                        </div>
                      </div>
                      <div className="relative">
                        <div
                          className="hover:cursor-pointer"
                          onClick={() => {
                            setIssueUpdateContainer(issueDetailData.body);
                            if (kebabHorizontal === false) {
                              setKebabHorizontal(true);
                            } else if (kebabHorizontal === true) {
                              setKebabHorizontal(false);
                            }
                          }}
                        >
                          <KebabHorizontalIcon size={16} />
                        </div>

                        <ul
                          className={`${
                            kebabHorizontal ? "block" : "hidden"
                          } absolute right-0 top-[25px] w-[183px] bg-white border-[1px] border-solid border-[#d0d7de] justify-start items-center rounded-md z-20`}
                        >
                          <li>
                            <p className="pl-4 pr-2 py-1 text-xs h-[29px]">
                              Copy link
                            </p>
                            <p className="pl-4 pr-2 py-1 text-xs h-[29px]">
                              Quote reply
                            </p>
                          </li>
                          <div className="my-2 border-t-[1px] border-solid border-[#d0d7de]" />
                          <li
                            className="pl-4 pr-2 py-1 text-xs h-[29px]"
                            onClick={() => {
                              setUpdateComment("UpdateComment");
                              setUpdateCommentNum(-1);
                            }}
                          >
                            Edit
                          </li>
                          <div className="my-2 border-t-[1px] border-solid border-[#d0d7de]" />
                          <li className="pl-4 pr-2 py-1 text-xs h-[29px]">
                            Report content
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm px-4 py-4 text-[#24292f]">
                    <p>{issueDetailData.body}</p>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  updateComment === "UpdateComment" && updateCommentNum === -1
                    ? "block"
                    : "hidden"
                }`}
              >
                <UpdateComment
                  updateComment={updateComment}
                  setUpdateComment={setUpdateComment}
                  preview={preview}
                  setPreview={setPreview}
                  issueContainer={issueContainer}
                  setIssueContainer={setIssueContainer}
                  issueTitle={issueTitle}
                  setIssueTitle={setIssueTitle}
                  markDownBtn={markDownBtn}
                  setmarkDownBtn={setmarkDownBtn}
                  renderAssigneeData={renderAssigneeData}
                  renderLabelData={renderLabelData}
                  setTargetText={setTargetText}
                  renderIssueData={renderIssueData}
                  issueDetailData={issueDetailData}
                  setIssueDetailData={setIssueDetailData}
                  updateCommentNum={updateCommentNum}
                  setUpdateCommentNum={setUpdateCommentNum}
                  timeLineIndex={timeLineIndex}
                  settimeLineIndex={settimeLineIndex}
                  createCommentRender={createCommentRender}
                  setCreateCommentRender={setCreateCommentRender}
                  commentNum={commentNum}
                  issueUpdateInputDefaultValue={issueUpdateInputDefaultValue}
                  setIssueUpdateInputDefaultValue={
                    setIssueUpdateInputDefaultValue
                  }
                  kebabHorizontal={kebabHorizontal}
                  setKebabHorizontal={setKebabHorizontal}
                  issueUpdateContainer={issueUpdateContainer}
                  setIssueUpdateContainer={setIssueUpdateContainer}
                />
              </div>
              <TimeLine
                preview={preview}
                setPreview={setPreview}
                setTargetText={setTargetText}
                issueTitle={issueTitle}
                setIssueTitle={setIssueTitle}
                issueContainer={issueContainer}
                setIssueContainer={setIssueContainer}
                markDownBtn={markDownBtn}
                setmarkDownBtn={setmarkDownBtn}
                renderAssigneeData={renderAssigneeData}
                renderLabelData={renderLabelData}
                renderIssueData={renderIssueData}
                updateComment={updateComment}
                setUpdateComment={setUpdateComment}
                issueDetailData={issueDetailData}
                setIssueDetailData={setIssueDetailData}
                updateCommentNum={updateCommentNum}
                setUpdateCommentNum={setUpdateCommentNum}
                timeLineIndex={timeLineIndex}
                settimeLineIndex={settimeLineIndex}
                commentNum={commentNum}
                setCommentNum={setCommentNum}
                createCommentRender={createCommentRender}
                setCreateCommentRender={setCreateCommentRender}
                issueUpdateInputDefaultValue={issueUpdateInputDefaultValue}
                setIssueUpdateInputDefaultValue={
                  setIssueUpdateInputDefaultValue
                }
                issueUpdateContainer={issueUpdateContainer}
                setIssueUpdateContainer={setIssueUpdateContainer}
              />
              <CreateComment
                updateComment={updateComment}
                setUpdateComment={setUpdateComment}
                preview={preview}
                setPreview={setPreview}
                issueContainer={issueContainer}
                setIssueContainer={setIssueContainer}
                issueTitle={issueTitle}
                setIssueTitle={setIssueTitle}
                markDownBtn={markDownBtn}
                setmarkDownBtn={setmarkDownBtn}
                renderAssigneeData={renderAssigneeData}
                renderLabelData={renderLabelData}
                setTargetText={setTargetText}
                renderIssueData={renderIssueData}
                issueDetailData={issueDetailData}
                setIssueDetailData={setIssueDetailData}
                createCommentRender={createCommentRender}
                setCreateCommentRender={setCreateCommentRender}
                issueDetailState={issueDetailState}
                setIssueDetailState={setIssueDetailState}
                issueDetailStateReanson={issueDetailStateReanson}
                setIssueDetailStateReanson={setIssueDetailStateReanson}
              />
            </div>
          </div>
          <div>
            <div>
              <div className="md:w-full lg:w-[240px] xl:w-[256px]">
                <div className="md:pt-4 lg:pt-0 xl:pt-0 xl:relative lg:relative">
                  <div className=" xl:flex justify-between items-center mb-[10px] relative">
                    <div>
                      <p
                        className="py-1 text-xs mb-1 hover:text-[#0969da]"
                        ref={targetAssigneeSpan}
                      >
                        Assignees
                      </p>
                      {AssigneeSelect()}
                    </div>

                    <div
                      className="pt-4 cursor-pointer xl:mt-[2px] xl:pt-0 lg:mt-[2px] lg:pt-0"
                      onClick={() => {
                        setItemList(true);
                        setListClose(true);
                        setTargetText(targetAssigneeSpan.current?.outerText);
                        // setAssigneeSelectData([]);
                      }}
                    >
                      <GearIcon size={16} />
                    </div>
                  </div>
                  <IssueList
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
                    issueDetailData={issueDetailData}
                    setIssueDetailData={setIssueDetailData}
                    assigneeLogin={assigneeLogin}
                    setAssigneeLogin={setAssigneeLogin}
                  />
                </div>
                <div
                  className={`block md:bg-black md:opacity-60 top-0 bottom-0 left-0 right-0 fixed md:z-10 xl:z-0 lg:z-0`}
                  onClick={() => {
                    setListClose(false);
                    setItemList(false);
                  }}
                />
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
                        src={issueDetailData.user.avatar_url}
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
