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
  allSearchInformation,
  setAllSearchInformation,
  labelSelectOption,
  setLabelSelectOption,
  noSearch,
  setNoSearch,
  labeslSelectName,
  setLabeslSelectName,
  mobileMenuBG,
  setMobileMenuBG,
}: {
  labelMenu: boolean;
  setLabelMenu: React.Dispatch<React.SetStateAction<boolean>>;
  sortSelect: any;
  setsortSelect: any;
  renderData: any;
  setRenderData: any;
  clearSearch: boolean;
  setClearSearch: React.Dispatch<React.SetStateAction<boolean>>;
  allSearchInformation: any;
  setAllSearchInformation: any;
  labelSelectOption: any;
  setLabelSelectOption: any;
  noSearch: boolean;
  setNoSearch: any;
  labeslSelectName: string;
  setLabeslSelectName: any;
  mobileMenuBG: boolean;
  setMobileMenuBG: any;
}) {
  const [labelData, setLabelData]: any = useState([]);
  const [labeslSelectOption, setLabeslSelectOption] = useState(true);

  const labeslDataArray: any[] = [];

  const labeslInput = useRef<HTMLInputElement | null>(null);
  const labeslName: any = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    async function getListLabels() {
      const data = await api.getLabels();
      setLabelData(data);
    }
    getListLabels();
  }, [sortSelect]);

  function LabelsSelect() {
    return labelData.map((_item: any, LablesSelectIndex: number) => {
      if (labelData[LablesSelectIndex].description === "") {
        labeslDataArray.push(labelData[LablesSelectIndex].name);
      } else {
        labeslDataArray.push(
          labelData[LablesSelectIndex].name,
          labelData[LablesSelectIndex].description
        );
      }

      return (
        <li
          ref={labeslName}
          className={`
          ${
            labeslSelectOption ||
            (labeslDataArray.toLocaleString().includes(labeslSelectName) &&
              labelData[LablesSelectIndex].name
                .toLocaleString()
                .includes(labeslInput.current?.value))
              ? "flex"
              : "hidden"
          } relative py-[7px] border-b-[1px] border-solid border-gray-400 text-xs justify-start items-center w-[266px] sm:font-semibold sm:py-4 sm:w-full sm:pl-11 pr-4`}
          onClick={() => {
            setsortSelect(labelData[LablesSelectIndex].name);
            setLabelSelectOption([
              ...labelSelectOption,
              labelData[LablesSelectIndex].name,
            ]);
            setLabeslSelectName(labelData[LablesSelectIndex].name);
            setClearSearch(true);
            setLabelMenu(false);
            setMobileMenuBG(false);
          }}
        >
          <div
            className={`${
              labelSelectOption.includes(labelData[LablesSelectIndex].name)
                ? "block"
                : "hidden"
            } absolute`}
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

  function LabelsSelectInput(e: any) {
    if (e.target.value === "") {
      setLabeslSelectOption(true);
    } else if (
      labeslDataArray.toLocaleString().includes(e.target.value.toLowerCase())
    ) {
      setLabeslSelectName(e.target.value);
      setLabeslSelectOption(false);
    } else if (
      labeslDataArray
        .toLocaleString()
        .includes(e.target.value.toLocaleString()) === false
    ) {
      setLabeslSelectName(e.target.value);
      setLabeslSelectOption(false);
    }
  }

  function LabelsSelectInputClick(e: any) {
    if (e.key === "Enter") {
      setLabelSelectOption([...labelSelectOption, labeslInput.current?.value]);
      setsortSelect(labeslInput.current?.value);
      setClearSearch(true);
      setLabelMenu(false);
    }
  }

  return (
    <ul
      className={`${
        labelMenu ? "block" : "hidden"
      } w-[300px] h-[446px] absolute top-[25px] left-[-7px] bg-white border-[1px] border-solid border-gray-400 rounded-lg sm:fixed sm:top-[15%] sm:left-[6.5%] px-4 text-sm sm:w-[87%] z-10 sm:h-auto`}
    >
      <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center border-b-[1px] border-solid border-gray-400 sm:font-semibold sm:px-4 sm:py-4 sm:w-full">
        <p>Filter by label</p>
        <p
          onClick={() => {
            setLabelMenu(false);
            setLabeslSelectName("");
            setMobileMenuBG(false);
          }}
        >
          X
        </p>
      </li>
      <li className="px-2 py-2 border-b-[1px] border-solid border-gray-400 sm:px-4 sm:py-4 sm:w-full">
        <input
          type="text"
          defaultValue="Filter labels"
          className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-400 rounded-lg text-xs w-full sm:font-semibold sm:w-full"
          ref={labeslInput}
          onChange={(e) => {
            LabelsSelectInput(e);
          }}
          onKeyDown={(e) => {
            LabelsSelectInputClick(e);
          }}
        />
      </li>
      <li className="py-[7px] px-4 text-xs border-b-[1px] border-solid border-gray-400 flex justify-start items-center sm:font-semibold sm:px-4 sm:py-4 sm:w-full">
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