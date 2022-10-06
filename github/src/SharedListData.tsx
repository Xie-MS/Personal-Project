import React from "react";

import { useState, useEffect, useRef } from "react";

import { CheckIcon } from "@primer/octicons-react";

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
}) {
  function LabelsSelect() {
    if (targetText === "Assignees") {
      return renderAssigneeData.map((_item: any, ItemIndex: number) => {
        return (
          <li
            className="xl:py-2 px-2 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center md:pl-5 md:pr-2 md:py-4"
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
              }`}
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
                <p className="xl:mr-2 font-semibold xl:text-sm">
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
            className="xl:py-2 px-2 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center md:pl-5 md:pr-2 md:py-4"
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
              }`}
            >
              <CheckIcon size={16} className="mr-2" />
            </div>
            <div className="xl:block items-center justify-start">
              <div className="xl:flex items-center justify-center">
                <p
                  style={{
                    backgroundColor: `#${renderLabelData[ItemIndex].color}`,
                  }}
                  className="xl:w-[14px] h-[14px] rounded-full mr-2 mt-[2px]"
                />
                <p className="xl:mr-2 font-semibold xl:text-sm">
                  {renderLabelData[ItemIndex].name}
                </p>
              </div>
              <p className="xl:text-xs">
                {renderLabelData[ItemIndex].description}
              </p>
            </div>
          </li>
        );
      });
    }
  }

  return (
    <ul
      className={`${
        itemList ? "block" : "hidden"
      } lg:w-[275px] xl:w-[275px] md:w-full overflow-auto md:h-[722px]`}
    >
      <li className="xl:px-[10px] py-2 text-xs font-semibold flex justify-between items-center">
        <p
          className={`${
            targetText === "Assignees" && itemList ? "block" : "hidden"
          }`}
        >
          Assign up to 10 people to this issue
        </p>
        <p
          className={`${
            targetText === "Labels" && itemList ? "block" : "hidden"
          }`}
        >
          Assign labels to this issue
        </p>
        <p
          onClick={() => {
            setListClose(false);
            setItemList(false);
          }}
        >
          X
        </p>
      </li>
      <li className="xl:px-[10px] py-[10px] border-t-[1px] border-solid border-gray-300 md:px-4 md:py-4">
        <input
          type="text"
          defaultValue="Type or choose a user"
          className="xl:py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-md text-sm w-full"
        />
      </li>
      <li
        className={`${
          targetText === "Assignees" && itemList ? "block" : "hidden"
        } xl:bg-slate-100 xl:py-2 xl:px-[10px] text-xs border-t-[1px] border-solid xl:border-gray-300 flex justify-start items-center md:px-[10px] md:bg-slate-100 md:font-semibold`}
      >
        Suggeations
      </li>
      <div className="overflow-y-auto md:max-h[607px] lg:max-h[270px] xl:max-h[270px]">
        {LabelsSelect()}
      </div>
    </ul>
  );
}

export default AssigneePage;
