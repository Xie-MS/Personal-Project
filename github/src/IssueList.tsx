import React from "react";

import { useState, useRef, useEffect } from "react";

import { CheckIcon, XIcon } from "@primer/octicons-react";

import api from "./api";

function AssigneePage({
  setListClose,
  targetText,
  itemList,
  setItemList,
  renderAssigneeData,
  renderLabelData,
  assigneeSelectData,
  setAssigneeSelectData,
  labelSelectData,
  setLabelSelectData,
  setTargetText,
  targetAssigneeSpan,
  targetLabelSpan,
  issueDetailData,
  setIssueDetailData,
}: {
  setListClose: any;
  targetText: string;
  itemList: boolean;
  setItemList: any;
  renderAssigneeData: any;
  renderLabelData: any;
  assigneeSelectData: String[];
  setAssigneeSelectData: any;
  labelSelectData: String[];
  setLabelSelectData: any;
  setTargetText: any;
  targetAssigneeSpan: any;
  targetLabelSpan: any;
  issueDetailData: any;
  setIssueDetailData: any;
}) {
  const [assigneeInputName, setAssigneeInputName]: any = useState("");
  const [labelsInputSelect, setLabelsInputSelect]: any = useState("");

  const AssigneeName = useRef<HTMLParagraphElement | null>(null);
  const LabelName = useRef<HTMLParagraphElement | null>(null);

  if (issueDetailData.length === 0) return <></>;

  if (assigneeSelectData.length === 0 && issueDetailData.assignee !== null) {
    setAssigneeSelectData(issueDetailData.assignee.login);
  }

  if (labelSelectData.length === 0 && issueDetailData.labels.length !== 0) {
    return issueDetailData.labels.map((item: any) => {
      setLabelSelectData([...item.name, item.name]);
    });
  }

  function AssigneeInput(e: any) {
    if (
      AssigneeName.current?.outerText
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      setAssigneeInputName(e.target.value);
    } else {
      setAssigneeInputName(e.target.value);
    }
  }

  function AssigneeInputClick(e: any) {
    if (e.key === "Enter") {
      if (assigneeSelectData.includes(e.target.value)) {
        const assigneeSelectNum = assigneeSelectData.indexOf(e.target.value);
        assigneeSelectData.splice(assigneeSelectNum, 1);
      } else {
        setAssigneeSelectData([...assigneeSelectData, e.target.value]);
      }
    }
  }

  function LabelInputClick(e: any) {
    if (e.key === "Enter") {
      if (labelSelectData.includes(e.target.value)) {
        const labelSelectNum = labelSelectData.indexOf(e.target.value);
        labelSelectData.splice(labelSelectNum, 1);
      } else {
        setLabelSelectData([...labelSelectData, e.target.value]);
      }
    }
  }

  function LabelInput(e: any) {
    if (
      LabelName.current?.outerText
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      setLabelsInputSelect(e.target.value);
    } else {
      setLabelsInputSelect(e.target.value);
    }
  }

  function LabelsSelect() {
    if (targetText === "Assignees") {
      return renderAssigneeData.map((_item: any, ItemIndex: number) => {
        return (
          <li
            className={`${
              renderAssigneeData[ItemIndex].login
                .toString()
                .toLowerCase()
                .includes(assigneeInputName.toString().toLowerCase())
                ? "flex"
                : "hidden"
            } xl:py-2 px-2 border-t-[1px] border-solid border-gray-300 text-xs justify-start items-center md:pl-5 md:pr-2 md:py-4 xl:pl-6 lg:pl-6 lg:relative xl:relative`}
            onClick={() => {
              if (
                assigneeSelectData.includes(renderAssigneeData[ItemIndex].login)
              ) {
                const assigneeSelectNum = assigneeSelectData.indexOf(
                  renderAssigneeData[ItemIndex].login
                );
                assigneeSelectData.splice(assigneeSelectNum, 1);
              } else if (
                assigneeSelectData.includes(
                  renderAssigneeData[ItemIndex].login
                ) === false
              ) {
                setAssigneeSelectData([
                  ...assigneeSelectData,
                  renderAssigneeData[ItemIndex].login,
                ]);
              }
            }}
          >
            <div
              className={`${
                assigneeSelectData.includes(renderAssigneeData[ItemIndex].login)
                  ? "block"
                  : "hidden"
              } lg:absolute lg:left-0 xl:absolute xl:left-0 xl:mx-1 lg:mx-1`}
            >
              <CheckIcon size={16} className="mr-2" />
            </div>
            <div className="xl:flex items-center justify-start">
              <img
                src={`${renderAssigneeData[ItemIndex].avatar_url}`}
                alt=""
                className="xl:w-[9%] md:w-[5%] rounded-full mr-2"
              />
              <div className="xl:flex items-center justify-center">
                <p
                  className="xl:mr-2 font-semibold xl:text-sm"
                  ref={AssigneeName}
                >
                  {renderAssigneeData[ItemIndex].login}
                </p>
              </div>
            </div>
          </li>
        );
      });
    } else if (targetText === "Labels") {
      return renderLabelData.map((_item: any, ItemIndex: number) => {
        return (
          <li
            className={`${
              renderLabelData[ItemIndex].name
                .toString()
                .toLowerCase()
                .includes(labelsInputSelect.toString().toLowerCase())
                ? "flex"
                : "hidden"
            } xl:py-2 px-2 border-t-[1px] border-solid border-gray-300 text-xs justify-start items-center md:pl-5 md:pr-2 md:py-4 xl:pl-6 lg:pl-6 lg:relative xl:relative`}
            onClick={() => {
              if (labelSelectData.includes(renderLabelData[ItemIndex].name)) {
                const labelSelectNum = labelSelectData.indexOf(
                  renderLabelData[ItemIndex].name
                );
                labelSelectData.splice(labelSelectNum, 1);
              } else if (
                labelSelectData.includes(renderLabelData[ItemIndex].name) ===
                false
              ) {
                setLabelSelectData([
                  ...labelSelectData,
                  renderLabelData[ItemIndex].name,
                ]);
              }
            }}
          >
            <div
              className={`${
                labelSelectData.includes(renderLabelData[ItemIndex].name)
                  ? "block"
                  : "hidden"
              } xl:absolute xl:left-0 xl:mx-1 lg:mx-1`}
            >
              <CheckIcon size={16} className="mr-2" />
            </div>
            <div className="xl:block items-center justify-start">
              <div className="xl:flex items-center justify-start">
                <p
                  style={{
                    backgroundColor: `#${renderLabelData[ItemIndex].color}`,
                  }}
                  className="xl:w-[14px] h-[14px] rounded-full mr-2 mt-[2px]"
                />
                <p className="xl:mr-2 font-semibold xl:text-sm" ref={LabelName}>
                  {renderLabelData[ItemIndex].name}
                </p>
              </div>
              <p className="xl:text-xs">
                {renderLabelData[ItemIndex].description}
              </p>
            </div>
            <div
              className={`${
                labelSelectData.includes(renderLabelData[ItemIndex].name)
                  ? "block"
                  : "hidden"
              } xl:absolute xl:right-0 xl:mx-1 lg:mx-1`}
            >
              <XIcon size={16} />
            </div>
          </li>
        );
      });
    }
  }
  console.log(targetText, targetAssigneeSpan.current?.outerText);
  return (
    <div
      className={`${
        targetText === targetAssigneeSpan.current?.outerText
          ? "xl:top-[40px] md:h-[775px] lg:z-20 xl:z-20 md:top-[-100px]"
          : "xl:top-[115px] xl:z-30 md:top-[-100px] md:max-h[775px]"
      } md:left-[2.3%] md:bottom-[25%] md:top-[-470px] text-sm md:w-[95.5%] md:h-0 xl:absolute top-0 bottom-0 bg-white border-[1px] border-solid border-gray-300 rounded-md xl:right-[10px] xl:h-fit lg:h-fit md:z-30 xl:z-30 lg:z-30`}
      onClick={() => {
        setListClose(false);
        setItemList(false);
        setTargetText("");
      }}
    >
      <ul
        className={`${
          itemList && targetText !== "" ? "block" : "hidden"
        } lg:w-[275px] xl:w-[275px] md:w-full overflow-auto md:h-[722px]`}
      >
        <li className="xl:px-[10px] py-2 text-xs font-semibold flex justify-between items-center">
          <p
            className={`${
              targetText === targetAssigneeSpan.current?.outerText && itemList
                ? "block"
                : "hidden"
            }`}
          >
            Assign up to 10 people to this issue
          </p>
          <p
            className={`${
              targetText === targetLabelSpan.current?.outerText && itemList
                ? "block"
                : "hidden"
            }`}
          >
            Assign labels to this issue
          </p>
        </li>
        <li className="xl:px-[10px] py-[10px] border-t-[1px] border-solid border-gray-300 md:px-4 md:py-4">
          <input
            type="text"
            defaultValue="Type or choose a user"
            className={`${
              targetText === targetAssigneeSpan.current?.outerText
                ? "block"
                : "hidden"
            } xl:py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-md text-sm w-full`}
            onKeyDown={(e) => {
              AssigneeInputClick(e);
            }}
            onChange={(e) => {
              AssigneeInput(e);
            }}
          />
          <input
            type="text"
            defaultValue="Filter labels"
            className={`${
              targetText === targetLabelSpan.current?.outerText
                ? "block"
                : "hidden"
            } xl:py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-md text-sm w-full`}
            onKeyDown={(e) => {
              LabelInputClick(e);
            }}
            onChange={(e) => {
              LabelInput(e);
            }}
          />
        </li>
        <li
          className={`${
            targetText === targetLabelSpan.current?.outerText && itemList
              ? "block"
              : "hidden"
          } xl:bg-slate-100 xl:py-2 xl:px-[10px] text-xs border-t-[1px] border-solid xl:border-gray-300 flex justify-start items-center md:px-[10px] md:bg-slate-100 md:font-semibold`}
        >
          Suggeations
        </li>
        <div className="overflow-y-auto md:max-h[607px] lg:max-h[270px] xl:max-h[270px]">
          {LabelsSelect()}
        </div>
      </ul>
    </div>
  );
}

export default AssigneePage;