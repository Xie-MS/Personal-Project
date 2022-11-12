import React, { useEffect, useRef, useState } from "react";

import { CheckIcon } from "@primer/octicons-react";

import api from "../api";

function IssueLabelList({
  assigneMenu,
  setAssigneMenu,
  sortSelect,
  setsortSelect,
  setClearSearch,
  allSearchInformation,
  setAllSearchInformation,
  assigneeSelectOption,
  setAssigneeSelectOption,
  assigneeSelectName,
  setAssigneeSelectName,
  setMobileMenuBG,
  assigneeSelectSearch,
  setAssigneeSelectSearch,
}: {
  assigneMenu: boolean;
  setAssigneMenu: React.Dispatch<React.SetStateAction<boolean>>;
  sortSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setsortSelect: any;
  setClearSearch: React.Dispatch<React.SetStateAction<boolean>>;
  allSearchInformation: any;
  setAllSearchInformation: React.Dispatch<any>;
  assigneeSelectOption: any;
  setAssigneeSelectOption: any;
  assigneeSelectName: any;
  setAssigneeSelectName: React.Dispatch<any>;
  setMobileMenuBG: React.Dispatch<React.SetStateAction<boolean>>;
  assigneeSelectSearch: any;
  setAssigneeSelectSearch: React.Dispatch<any>;
}) {
  const [assigneeData, setAssigneeData]: any = useState([]);
  const [assigneeSelectClose, setAssigneeSelectClose] = useState(true);
  const assigneeDataArray: any[] = [];

  const assigneeInput = useRef<HTMLInputElement | null>(null);
  const assigneeName: any = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    async function getIssuesAssignee() {
      const data = await api.getIssuesAssignee();
      setAssigneeData(data);
      console.log(data);
    }
    getIssuesAssignee();
  }, [sortSelect]);

  function assigneeSelect() {
    console.log(allSearchInformation, assigneeSelectOption);
    return assigneeData.map((_item: any, assigneeSelectIndex: number) => {
      return (
        <li
          ref={assigneeName}
          className={`
          ${
            assigneeSelectClose ||
            (assigneeDataArray.toLocaleString().includes(assigneeSelectName) &&
              assigneeData[assigneeSelectIndex].login
                .toLocaleString()
                .includes(assigneeInput.current?.value))
              ? "flex"
              : "hidden"
          } py-[7px] px-4 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center sm:px-4 sm:py-4 cursor-pointer`}
          onClick={() => {
            if (
              assigneeSelectOption.includes(
                assigneeData[assigneeSelectIndex].login
              )
            ) {
              const assigneeSelectNum = assigneeSelectOption.indexOf(
                assigneeData[assigneeSelectIndex].login
              );
              assigneeSelectName.splice(assigneeSelectNum, 1);

              const assigneeSelecOptiontNum = assigneeSelectOption.indexOf(
                assigneeData[assigneeSelectIndex].login
              );
              // assigneeSelectOption.splice(assigneeSelecOptiontNum, 1);
              setAssigneeSelectSearch([
                ...assigneeSelectSearch,
                assigneeSelectName,
              ]);
            } else if (
              assigneeSelectName.includes(
                assigneeData[assigneeSelectIndex].login
              ) === false
            ) {
              setAssigneeSelectOption(assigneeData[assigneeSelectIndex].login);
              setAssigneeSelectName([
                ...assigneeSelectName,
                assigneeData[assigneeSelectIndex].login,
              ]);
              setAssigneeSelectSearch([
                ...assigneeSelectSearch,
                assigneeSelectName,
              ]);
            }

            if (assigneeSelectOption.length >= 0) {
              setAllSearchInformation({
                ...allSearchInformation,
                assignee: assigneeData[assigneeSelectIndex].login,
              });
              console.log(allSearchInformation, allSearchInformation.length);
            }

            setsortSelect(assigneeData[assigneeSelectIndex].login);
            setClearSearch(true);
            setAssigneMenu(false);
            setMobileMenuBG(false);
            console.log(allSearchInformation, assigneeSelectOption);
          }}
        >
          <div
            className={`${
              assigneeSelectOption
                .toLocaleString()
                .includes(
                  assigneeData[assigneeSelectIndex].login
                    .toString()
                    .toLowerCase()
                )
                ? "block"
                : "hidden"
            } absolute`}
          >
            <CheckIcon size={16} className="mr-2" />
          </div>
          <div className="flex items-starts ml-7">
            <img
              src={`${assigneeData[assigneeSelectIndex].avatar_url}`}
              alt=""
              className="w-[9%] rounded-full sm:hidden mr-2"
            />
            <p>{assigneeData[assigneeSelectIndex].login}</p>
          </div>
        </li>
      );
    });
  }

  function assigneeSelectInput(e: any) {
    if (e.target.value === "") {
      setAssigneeSelectClose(true);
    } else if (
      assigneeDataArray.toLocaleString().includes(e.target.value.toLowerCase())
    ) {
      const assigneeSelectNum = assigneeSelectOption.indexOf(e.target.value);
      assigneeSelectOption.splice(assigneeSelectNum, 1);
      // setAssigneeSelectName([...assigneeSelectName, e.target.value]);
      setAssigneeSelectClose(false);
    } else if (
      assigneeDataArray
        .toLocaleString()
        .includes(e.target.value.toLocaleString()) === false
    ) {
      setAssigneeSelectOption([...assigneeSelectOption, e.target.value]);
      setAssigneeSelectClose(false);
    }
  }

  function assigneeSelectInputClick(e: any) {
    if (e.key === "Enter") {
      setAssigneeSelectOption(assigneeInput.current?.value);
      setsortSelect(assigneeInput.current?.value);
      setClearSearch(true);
      setAssigneMenu(false);
      setAssigneeSelectSearch([...assigneeSelectSearch, assigneeSelectName]);
      if (assigneeSelectSearch.length !== 0) {
        const assigneeSelect = assigneeSelectSearch.slice(-1);
        setAllSearchInformation({
          ...allSearchInformation,
          assignee: `${assigneeSelect}`,
        });
      }
    }
  }

  return (
    <ul
      className={`${
        assigneMenu ? "block" : "hidden"
      } absolute top-[25px] right-[60px] bg-white border-[1px] border-solid border-gray-300 rounded-lg w-[275px] sm:sm:fixed sm:top-[1%] sm:left-[4%] sm:bottom-[35%] px-4 text-sm sm:w-[92%]`}
    >
      <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center sm:font-semibold sm:px-4 sm:py-4 cursor-pointer">
        <p>Filter by who's assigned</p>
        <p
          onClick={() => {
            setAssigneMenu(false);
            setAssigneeSelectName([]);
            setMobileMenuBG(false);
          }}
        >
          X
        </p>
      </li>
      <li className="px-2 py-2 border-t-[1px] border-solid border-gray-300 sm:px-4 sm:py-4">
        <input
          type="text"
          defaultValue="Filter assignee"
          className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-lg text-xs w-full"
          ref={assigneeInput}
          onChange={(e) => {
            assigneeSelectInput(e);
          }}
          onKeyDown={(e) => {
            assigneeSelectInputClick(e);
          }}
        />
      </li>
      <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4 cursor-pointer">
        <div className="invisible">
          <CheckIcon size={16} className="mr-2" />
        </div>
        <p
          onClick={() => {
            setAssigneeSelectName([]);
            setClearSearch(false);
          }}
        >
          Assigned to nobody
        </p>
      </li>
      <div className="overflow-y-auto overflow-x-hidden h-[320px]">
        {assigneeSelect()}
      </div>
    </ul>
  );
}

export default IssueLabelList;
