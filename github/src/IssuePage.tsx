import React from "react";
import SortDown from "../src/img/SortDown.svg";
import Search from "../src/img/search.svg";
import LabelsImage from "../src/img/Labels.svg";
import Milestone from "../src/img/milestone.svg";
import Close from "../src/img/x.svg";
import issueOpened from "../src/img/issueOpened.svg";
import Check from "../src/img/check.svg";
import UserImg from "../src/img/userImg.png";
import Comment from "../src/img/comment.svg";
import Light from "../src/img/light.svg";


import {IssueOpenedIcon} from "@primer/octicons-react"
import {LinkExternalIcon} from "@primer/octicons-react"
import {CheckIcon} from "@primer/octicons-react"


export default function IssuePage() {
  return (
    <div className="mt-6 px-6">
   <div className="px-6 py-6 mb-6 border-[1px] border-solid border-gray-200 flex justify-between items-start rounded-xl">
      <div className="w-full block justify-between items-center text-center">
        <div>
        <p>
        <p className="mb-1 font-semibold text-base">Label issues and pull requests for new contributors</p>
        <br /><p className="mb-1 text-sm">Now, GitHub will help potential first-time contributors <a href="#" className="text-blue-500">discover issues</a> labeled with 
        <button className="text-white bg-indigo-600 rounded-xl text-xs w-24 h-[18px] px-[7px] ml-1">good first issue</button></p>
        </p>
        </div>
        <button className="inline-flex justify-center items-center text-center h-[30px] py-[5px] px-4 mt-4 border-[1px] border-solid border-gray-200 text-blue bg-slate-50 text-base text-[#0969da] rounded-xl font-semibold">
          Go to Labels
        </button>
      </div>
      <button className="text-blue-500 text-sm">
          Dismiss
        </button>
   </div>
    <div>
      <div className="flex justify-between items-center mb-4">
      <div className="bg-gray-100 border-[1px] border-solid border-gray-400 flex justify-between items-center rounded-lg w-[65%] relative">
        <button className="flex px-4 py-[5px]">
          Filters
          <img src={SortDown} alt="" />
        </button>
        <ul className="absolute top-[40px] left-0 bg-white border-[1px] border-solid border-gray-400 rounded-lg invisible">
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs">
            <p>Filiter Issues</p></li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs">
            <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
            </div>
            <p>Open issues and pull requests</p>
          </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs w-[298px]">
          
          <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
          </div>
            <p>Your issues</p>
            
          </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs">
          <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
          </div>
            <p>Your Pull requests</p>
            </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs">
          <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
          </div>
            <p>Everything assigned to you</p>
            </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs">
          <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
          </div>
            <p>Everything mentioning you</p>
            </li>
          <li className="flex justify-start items-center  py-[7px] px-4 text-xs">
            <LinkExternalIcon size={16} className="mr-2"/>
            <p>View advanced search syntax</p></li>
        </ul>
        <input type="text"
        defaultValue={"is:issue is:open"}
        className="bg-gray-100 pr-3 pl-8 py-[5px] bg-[url('../src/img/search.svg')] bg-no-repeat bg-left bg-[w-3/20] border-l-[1px] border-solid border-gray-400 w-full rounded-r-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between  border-[1px] border-solid border-gray-400 rounded-md">
          <button className="flex justify-evenly items-center px-4 py-[5px] bg-white rounded-l-md border-r-[1px] border-solid border-gray-400">
          <img src={LabelsImage} alt="" className="w-1/5 text-sm"/>
            Labels
            <p className=" px-[6px] bg-gray-200 rounded-xl w-6 h-6 border-[1px] border-solid border-gray-50 flex justify-center items-center">
              11
            </p>
          </button>
          <button className="flex justify-evenly items-center px-4 py-[5px] bg-white rounded-r-md">
          <img src={Milestone} alt="" className="w-1/6 text-sm"/>
            Milestones
            <p className=" px-[6px] bg-gray-200 rounded-xl w-6 h-6 border-[1px] border-solid border-gray-50 flex justify-center items-center">
              0
            </p>
          </button>
        </div>
</div>
      <button className="px-4 py-[5px] text-white bg-green-600 border-[1px] border-solid border-gray-400 rounded-md">
          New issue
        </button>
      
      </div>
    <div>
    <button className="flex justify-evenly items-center mb-4 ">
    <img src={Close} alt="" className="bg-gray-500 rounded-md mr-1"/>
    <a href="#" className="font-semibold">
      Clear current search query, filters, and sorts
    </a>
    </button>
      </div>
      <div>
        <div className="px-4 py-4 flex justify-between items-center bg-gray-200 rounded-t-md">
          <div className="flex justify-start items-center">
            <input type="checkbox" className="mr-4"/>
            <button className="flex justify-center items-center">
              <img src={issueOpened} alt="" className="mr-1 w-1/4"/>
              <p className="text-sm">3 Open</p>
            </button>
            <button className="flex justify-center items-center ml-[10px]">
            <img src={Check} alt="" className="mr-1 w-1/5"/>
            <p className="text-sm">2 Closed</p>
            </button>
          </div>
          <div className="flex justify-center items-center relative">
            <button className="flex justify-center items-center px-4">
              Author
              <img src={SortDown} alt="" />
            </button>
            <button className="flex justify-center items-center px-4">
              Label
              <img src={SortDown} alt="" />
            </button>
            <ul className="absolute top-[25px] left-[-7px] bg-white border-[1px] border-solid border-gray-400 rounded-lg invisible">
              <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center border-b-[1px] border-solid border-gray-400 ">
                <p>Filter by label</p>
                <p>X</p>
                </li>
              <li className="px-2 py-2 border-b-[1px] border-solid border-gray-400">
              <input type="text" defaultValue="Filter labels" className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-400 rounded-lg text-xs w-[291px]"/>
              </li>
              <li className="py-[7px] px-4 text-xs border-b-[1px] border-solid border-gray-400 flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Unlabeled
              </li>
              <li className="py-[7px] px-4 border-b-[1px] border-solid border-gray-400 text-xs flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                <div className="items-start">
                  <p className="bg-[#BFDADC] border-b-[1px] border-solid border-gray-400 rounded-full w-4 h-4 mr-2"/>
                  <p>0921<br />0921test</p> 
                </div>
              </li>
              <li className="py-[7px] px-4 text-xs flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
              <div className="flex justify-start items-start">
              <p className="bg-[#FBCA04] border-b-[1px] border-solid border-gray-400 rounded-full w-4 h-4 mr-2"/>
                <p>test</p>
              </div>
              </li>
            </ul>
            <button className="flex justify-center items-center px-4">
              Projects
              <img src={SortDown} alt="" />
            </button>
            <button className="flex justify-center items-center px-4">
              Milestones
              <img src={SortDown} alt="" />
            </button>
            <button className="flex justify-center items-center px-4">
              Assignee
              <img src={SortDown} alt="" />
            </button>
            <ul className="absolute top-[25px] right-[60px] bg-white border-[1px] border-solid border-gray-300 rounded-lg invisible w-[275px]">
              <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center">
                <p>Filter by who's assigned</p>
                <p>X</p>
                </li>
              <li className="px-2 py-2 border-t-[1px] border-solid border-gray-300">
              <input type="text" defaultValue="Filter users" className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-lg text-xs w-[257px]"/>
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Assigned to nobody
              </li>
              <li className="py-[7px] px-4 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                <div className="flex items-center justify-start">
                  <img src={UserImg} alt="" className="w-[9%] rounded-full mr-2"/>
                  <div className="flex items-center justify-center">
                  <p className="mr-2 font-semibold">Xie-MS</p> 
                  <p>xms_7104</p>
                  </div>
                </div>
              </li>
            </ul>
            <button className="flex justify-center items-center pl-4">
              Sort
              <img src={SortDown} alt="" />
            </button>
            <ul className="absolute top-[25px] right-0 bg-white border-[1px] border-solid border-gray-300 rounded-lg invisible w-[275px]">
              <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center">
                <p>Sort by</p>
                <p>X</p>
                </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Newest
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Oldest
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Most commented
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Least commented
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Recently updated
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Least recently updated
              </li>
            </ul>
          </div>
          </div>
          <div className="flex justify-between items-center px-4 py-2 bg-white border-[1px] border-solid border-gray-200 rounded-b-md">
            <div className="flex justify-center items-start">
              <div className="py-2">
                <input type="checkbox"/>
              </div>
              <div className="pt-2 pl-4">
              <IssueOpenedIcon size={16} fill="green"/>
              </div>
              <div className="block justify-center items-center px-2 py-2">
                <div className="flex justify-start items-center">
                  <p className="text-base font-semibold">test0926</p>
                  <button className="bg-pink-200 rounded-xl px-[7px] font-semibold text-sm">
                    abcde
                  </button>
                </div>
                <p className="mt-1 text-xs">
                  #6 opend 1 houe ago by Xie-MS
                </p>
              </div>
            </div>
            <div className="flex justify-end items-center pt-2">
              <div className="flex justify-end items-center w-[87.83px]">
              <img src={UserImg} alt="" className="w-[30%] rounded-full"/>
              </div>
              <div className="flex justify-end items-center w-[105px] ml-2">
                <img src={Comment} alt=""/>
                <p>1</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="mt-12">
      <p className="flex justify-center items-center text-sm">
        <img src={Light} alt="" className="mr-1"/>
      <p className="font-semibold mr-1">ProTip!</p>Click a checkbox on the left to edit multiple issues at once.
      </p>
    </div>
    </div>
  )
}