import React from "react";
import { useState, useEffect, useRef } from "react";

import { CheckIcon } from "@primer/octicons-react";

import api from "./api";

function IssueLabelList({
  labelMenu,
  setLabelMenu,
  sortSelect,
  setsortSelect,
  renderData,
  setRenderData,
  clearSearch,
  setClearSearch,
}: {
  labelMenu: boolean;
  setLabelMenu: React.Dispatch<React.SetStateAction<boolean>>;
  sortSelect: any;
  setsortSelect: any;
  renderData: any;
  setRenderData: any;
  clearSearch: boolean;
  setClearSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [labelData, setLabelData]: any = useState([]);
  const [mobileMenuBG, setMobileMenuBG] = useState(false);
  const [labeslSelectName, setLabeslSelectName] = useState("");
  const [labeslSelectDescription, setLabeslSelectDescription] = useState("");
  const [labelSelectOption, setLabelSelectOption]: any = useState([]);

  useEffect(() => {
    async function getListLabels() {
      const data = await api.getLabels();
      setLabelData(data);
    }
    getListLabels();
  }, []);

  useEffect(() => {
    async function getListIssues() {
      if (labeslSelectName !== "") {
        const data = await api.getIssuesLabels(labeslSelectName);
        setRenderData(data);
      }
    }
    getListIssues();
  }, [sortSelect]);

  function LabelsSelect() {
    return labelData.map((item: any, LablesSelectIndex: number) => {
      return (
        <li
          className="relative py-[7px] border-b-[1px] border-solid border-gray-400 text-xs flex justify-start items-center w-[266px] sm:font-semibold px-4 sm:py-4"
          onClick={() => {
            setLabeslSelectName(labelData[LablesSelectIndex].name);
            setLabeslSelectDescription(
              labelData[LablesSelectIndex].description
            );
            setsortSelect(labelData[LablesSelectIndex].name);
            setLabelSelectOption([
              ...labelSelectOption,
              labelData[LablesSelectIndex].name,
            ]);
            setClearSearch(true);
            console.log(labelSelectOption);
          }}
        >
          <div
            className={`${
              labelSelectOption.includes(labelData[LablesSelectIndex].name)
                ? "block"
                : "hidden"
            } absolute left-3 `}
          >
            <CheckIcon size={16} className="mr-2" />
          </div>
          <div className="flex items-starts">
            <p
              style={{
                backgroundColor: `#${labelData[LablesSelectIndex].color}`,
              }}
              className="bg-[#BFDADC] border-b-[1px] border-solid border-gray-400 rounded-full w-4 h-4 mr-2"
            />
            <p>
              {labelData[LablesSelectIndex].name}
              <br />
              {labelData[LablesSelectIndex].description}
            </p>
          </div>
        </li>
      );
    });
  }

  return (
    <ul
      className={`${
        labelMenu ? "block" : "hidden"
      } w-[300px] h-[446px] absolute top-[25px] left-[-7px] bg-white border-[1px] border-solid border-gray-400 rounded-lg sm:fixed sm:top-[25%] sm:left-[6.5%] px-4 text-sm sm:w-[87%] z-10`}
    >
      <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center border-b-[1px] border-solid border-gray-400 sm:font-semibold px-4 sm:py-4">
        <p>Filter by label</p>
        <p
          onClick={() => {
            setLabelMenu(false);
            setMobileMenuBG(false);
          }}
        >
          X
        </p>
      </li>
      <li className="px-2 py-2 border-b-[1px] border-solid border-gray-400 sm:px-4 py-4">
        <input
          type="text"
          defaultValue="Filter labels"
          className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-400 rounded-lg text-xs w-full sm:font-semibold sm:w-full"
        />
      </li>
      <li className="py-[7px] px-4 text-xs border-b-[1px] border-solid border-gray-400 flex justify-start items-center sm:font-semibold px-4 sm:py-4">
        <div className="invisible">
          <CheckIcon size={16} className="mr-2" />
        </div>
        Unlabeled
      </li>
      <div className="overflow-y-auto h-[320px]">{LabelsSelect()}</div>
    </ul>
  );
}

export default IssueLabelList;
