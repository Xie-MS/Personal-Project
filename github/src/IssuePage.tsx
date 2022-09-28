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
import { useState, useEffect } from "react";

import {IssueOpenedIcon, LinkExternalIcon, CheckIcon, XIcon, ChevronRightIcon,ChevronLeftIcon, CommentIcon   } from "@primer/octicons-react"

import api from "./api";

function IssuePage() {
const[filtersMenu, setFiletersMenu] = useState(false);
const[labelMenu, setLabelMenu] = useState(false);
const[assigneMenu, setAssigne] = useState(false);
const[sortMenu, setSortMenu] = useState(false);
const[mobileMenuBG, setMobileMenuBG] = useState(false);
const[issueInformation, setIssueInformation]:any = useState([]);
const[labelsNum, setLabelsNum]:any = useState();


useEffect(() =>{
  async function getListIssues() {
    const data = await api.getListIssuesState()
    setIssueInformation(data);
  }
  getListIssues();
  console.log(issueInformation);
}, []);




function getIssues(){
  return issueInformation.map((item:any, index: number) => {
    if(issueInformation[index].pull_request === undefined){      
  return(
    <>
    <div className="flex justify-between items-center">
    <div className="flex justify-start items-start pl-4">
        <div className="py-2">
          <input type="checkbox" className="flex md:hidden"/>
        </div>
        <div className="pt-2 pl-4">
        <IssueOpenedIcon size={16} fill="green"/>
        </div>
        <div className="block justify-center items-center px-2 py-2">
          <div className="flex justify-start items-center md:block">
            <p className="text-base font-semibold hover:text-[#0969da] hover:cursor-pointer">{issueInformation[index].title}</p>
            {getLabels(index)}
          </div>
          <p className="mt-1 text-xs">
            #{issueInformation[index].number} opend 1 houe ago by {issueInformation[index].user.login}
          </p>
          </div>
          </div>
          <div className="flex justify-end items-center pt-2 pr-4">
            {getAssignees(index)}
            <div className="flex justify-end items-center w-[70px] hover:text-[#0969da] hover:cursor-pointer ml-2 sm:hidden">
            {getComments(index)}
            </div>
          </div>
      </div>
    </>
      )}})
}

function getLabels(index:number){
  return issueInformation.map((item:any, listIndex: number) => {
    if(issueInformation[index].labels.length !== 0 && index === listIndex){
      console.log(issueInformation[index].labels[0].color)
      return(
        <button className={`bg-[${`#`+issueInformation[index].labels[0].color}] rounded-xl px-[7px] font-semibold text-sm md:text-xs`}>
        {issueInformation[index].labels[0].name}
        </button>
      )
    }
  })}

  function getAssignees(index:number){
    return issueInformation.map((item:any, assigneesIndex: number) => {
      if(issueInformation[index].assignees.length !== 0 && index === assigneesIndex){
        return(
          <div className="flex justify-end items-center w-[87.83px]">
          <img src={UserImg} alt="" className="w-[30%] rounded-full sm:hidden"/>
          </div>
        )
      }
    })}

    function getComments(index:number){
      return issueInformation.map((item:any, commentsIndex: number) => {
        if(issueInformation[index].comments !== 0 && index === commentsIndex){
          return(
            <div className="flex justify-end items-center w-[70px] hover:text-[#0969da] hover:cursor-pointer ml-2 sm:hidden">
            <CommentIcon size={16}  className="hover:fill-[#0969da]"/>
              <p>{issueInformation[index].comments}</p>
            </div>
          )
        }
      })}

  return (
    <div className=" relative z-10">
      
    <div className="mt-6 px-6">    
   <div className="px-6 py-6 mb-6 border-[1px] border-solid border-gray-200 flex justify-between items-start rounded-xl">
      <div className="w-full block justify-between items-center text-center relative">
        <div>
        <p>
        <p className="mb-1 font-semibold text-base">Label issues and pull requests for new contributors</p>
        <br /><p className="mb-1 text-sm">Now, GitHub will help potential first-time contributors <a href="#" className="text-blue-500">discover issues</a> labeled with 
        <button className="text-white bg-indigo-600 rounded-xl text-xs w-24 h-[18px] px-[7px] ml-1">good first issue</button></p>
        </p>
        </div>
        <button className="inline-flex justify-center items-center text-center h-[30px] py-[5px] px-4 mt-4 border-[1px] border-solid border-gray-200 text-blue bg-slate-50 text-base text-[#0969da] rounded-xl font-semibold hover:bg-[#0969da] hover:text-white">
          Go to Labels
        </button>
      </div>
   </div>
   <button className="text-blue-500 text-sm absolute top-[10px] right-[40px]">
          <p className="hover:underline decoration-auto">Dismiss</p>
        </button>
    <div>
    
      <div className="flex justify-between items-center mb-4  md:flex-col md:mb-0">
       
      <div className="xl:bg-gray-100 border-[1px] border-solid border-gray-400 flex justify-between items-center rounded-lg order-0 w-[60%] relative lg:w-[46%] md:w-full md:order-2 my-6">
        <button className="flex px-4 py-[5px]" onClick={() => {
          setFiletersMenu(true)
          setMobileMenuBG(true)
          if(labelMenu === true || assigneMenu === true || sortMenu === true){
            setLabelMenu(false)
            setAssigne(false)
            setSortMenu(false)
          }
        }}>
          Filters
          <img src={SortDown} alt="" />
        </button>
        <div className={`${mobileMenuBG ? "visible" : "invisible"} sm:bg-black opacity-60 top-0 bottom-0 left-0 right-0 fixed`} onClick={() => {
          if(mobileMenuBG === true){
            setMobileMenuBG(false)
            setFiletersMenu(false)
            setLabelMenu(false)
            setAssigne(false)
            setSortMenu(false)
          }

        }}></div> 
        <ul className={`${filtersMenu ? "visible" : "invisible"} bg-white border-[1px] absolute left-auto top-[40px] border-solid border-gray-400 rounded-lg z-10 sm:fixed sm:top-[25%] sm:left-[16%] px-4 text-sm w-[70%]`}>
          {/* //sm:z-10 absolute w-[85%] h-[40%] top-auto left-auto */}
          <li className="flex justify-between items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs sm:font-semibold px-4 sm:py-4">
            <p>Filiter Issues</p>
            <p onClick={() => {setFiletersMenu(false)
            setMobileMenuBG(false)
            }}>X</p>  
          </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs sm:px-4 sm:py-4">
            <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
            </div>
            <p>Open issues and pull requests</p>
          </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs sm:px-4 sm:py-4 w-full">
          <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
          </div>
            <p>Your issues</p>
          </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs sm:px-4 sm:py-4">
          <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
          </div>
            <p>Your Pull requests</p>
            </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs sm:px-4 sm:py-4">
          <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
          </div>
            <p>Everything assigned to you</p>
            </li>
          <li className="flex justify-start items-center border-b-[1px] border-solid border-gray-400 py-[7px] pl-4 pr-[7px] text-xs sm:px-4 sm:py-4">
          <div className="invisible">
            <CheckIcon size={16} className="mr-2"/>
          </div>
            <p>Everything mentioning you</p>
            </li>
          <li className="flex justify-start items-center  py-[7px] px-4 text-xs sm:px-4 sm:py-4">
            <LinkExternalIcon size={16} className="mr-2"/>
            <p>View advanced search syntax</p></li>
        </ul>
        
        <input type="text"
        defaultValue={"is:issue is:open"}
        className=" text-sm bg-gray-100 pr-3 pl-8 py-[5px] bg-[url('../src/img/search.svg')] bg-no-repeat bg-[center_left_4px] bg-auto border-l-[1px] border-solid border-gray-400 w-full rounded-r-lg h-[30px]"
        />
      </div>
      
      <div className="flex justify-between items-center md:w-full">
       
        <div className="flex justify-between  border-[1px] border-solid border-gray-400 rounded-md h-[30px] w-[270px] md:w-auto">
          <button className="flex justify-evenly items-center px-4 py-[5px] bg-white rounded-l-md border-r-[1px] border-solid border-gray-400 text-sm">
          <img src={LabelsImage} alt="" className="w-1/5 text-sm"/>
            Labels
            <p className=" px-[6px] bg-gray-200 rounded-xl w-6 h-6 border-[1px] border-solid border-gray-50 flex justify-center items-center md:hidden">
              11
            </p>
          </button>
          <button className="flex justify-evenly items-center px-4 py-[5px] bg-white rounded-r-md text-sm">
          <img src={Milestone} alt="" className="w-1/6 text-sm"/>
            Milestones
            <p className=" px-[6px] bg-gray-200 rounded-xl w-6 h-6 border-[1px] border-solid border-gray-50 flex justify-center items-center md:hidden">
              0
            </p>
          </button>
        </div>
      
      <button className="px-4 py-[5px] text-white bg-green-600 border-[1px] border-solid border-gray-400 rounded-md h-[30px] text-sm lg:ml-[15px]">
          <p className="flex md:hidden">New issue</p>
          <p className="hidden md:flex">New</p>
        </button>
      </div>
      </div>
    <div>
    <button className="flex justify-evenly items-center mb-4 lg:text-sm">
    <XIcon size={16} fill="white" className="bg-gray-500 rounded-md mr-1"/>
    <a href="#" className="font-semibold">
      Clear current search query, filters, and sorts
    </a>
    </button>
    <div className="hidden justify-start items-center lg:flex mb-4">
    <button className="flex justify-center items-center">
      <img src={issueOpened} alt="" className="mr-1 w-1/4"/>
      <p className="text-sm">3 Open</p>
    </button>
    <button className="flex justify-center items-center ml-[10px]">
    <img src={Check} alt="" className="mr-1 w-1/5"/>
    <p className="text-sm">2 Closed</p>
    </button>
    </div>
      </div>
      <div>
        <div className="px-4 py-4 flex justify-between items-center bg-gray-100 rounded-t-md lg:justify-start sm:justify-between">
          <div className="flex justify-start items-center">
            <input type="checkbox" className="flex mr-4 md:hidden"/>
            <div className="flex justify-start items-center lg:hidden">
            <button className="flex justify-center items-center">
              <img src={issueOpened} alt="" className="mr-1 w-1/4"/>
              <p className="text-sm">3 Open</p>
            </button>
            <button className="flex justify-center items-center ml-[10px]">
            <img src={Check} alt="" className="mr-1 w-1/5"/>
            <p className="text-sm">2 Closed</p>
            </button>
            </div>
          </div>
          <div className="flex justify-center items-center relative sm:w-full justify-around">
            <button className="flex justify-center items-center px-4 text-[#57606a] md:text-sm hover:text-black">
              Author
              <img src={SortDown} alt="" className="hidden"/>
            </button>
            <button className="flex justify-center items-center px-4 text-[#57606a] md:text-sm hover:text-black" 
            onClick={() => {setLabelMenu(true) 
              setMobileMenuBG(true)
              if(filtersMenu === true || assigneMenu === true || sortMenu === true){
                setFiletersMenu(false)
                setAssigne(false)
                setSortMenu(false)
              }
              }}>
              Label
              <img src={SortDown} alt="" className="hidden" />
            </button>
            <ul className={`${labelMenu ? "block" : "hidden"} absolute top-[25px] left-[-7px] bg-white border-[1px] border-solid border-gray-400 rounded-lg sm:fixed sm:top-[25%] sm:left-[6.5%] px-4 text-sm w-[87%] z-10`}>
              <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center border-b-[1px] border-solid border-gray-400 sm:font-semibold px-4 sm:py-4">
                <p>Filter by label</p>
                <p onClick={() => {
                  setLabelMenu(false)
                  setMobileMenuBG(false)                  
                  }}>X</p>
                </li>
              <li className="px-2 py-2 border-b-[1px] border-solid border-gray-400 sm:px-4 py-4">
              <input type="text" defaultValue="Filter labels" className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-400 rounded-lg text-xs w-full sm:font-semibold sm:w-full"/>
              </li>
              <li className="py-[7px] px-4 text-xs border-b-[1px] border-solid border-gray-400 flex justify-start items-center sm:font-semibold px-4 sm:py-4">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Unlabeled
              </li>
              <li className="py-[7px] px-4 border-b-[1px] border-solid border-gray-400 text-xs flex justify-start items-center sm:font-semibold px-4 sm:py-4">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                <div className="flex items-starts">
                  <p className="bg-[#BFDADC] border-b-[1px] border-solid border-gray-400 rounded-full w-4 h-4 mr-2"/>
                  <p>0921<br />0921test</p> 
                </div>
              </li>
              <li className="py-[7px] px-4 text-xs flex justify-start items-center sm:font-semibold px-4 sm:py-4">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
              <div className="flex justify-start items-start sm:flex">
              <p className="bg-[#FBCA04] border-b-[1px] border-solid border-gray-400 rounded-full w-4 h-4 mr-2"/>
                <p>test</p>
              </div>
              </li>
            </ul>
            <button className="flex justify-center items-center px-4 text-[#57606a] md:hidden hover:text-black">
              Projects
              <img src={SortDown} alt="" />
            </button>
            <button className="flex justify-center items-center px-4 text-[#57606a] md:hidden hover:text-black">
              Milestones
              <img src={SortDown} alt="" />
            </button>
            <button className="flex justify-center items-center px-4 text-[#57606a] md:text-sm hover:text-black" onClick={() =>{setAssigne(true)
            setMobileMenuBG(true)
            if(filtersMenu === true || labelMenu === true || sortMenu === true){
              setFiletersMenu(false)
              setLabelMenu(false)
              setSortMenu(false)
            }}}>
              Assignee
              <img src={SortDown} alt="" className="hidden"/>
            </button>
            <ul className={`${assigneMenu ? "block" : "hidden"} absolute top-[25px] right-[60px] bg-white border-[1px] border-solid border-gray-300 rounded-lg w-[275px] sm:sm:fixed sm:top-[1%] sm:left-[4%] sm:bottom-[35%] px-4 text-sm sm:w-[92%]`}>
              <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center sm:font-semibold sm:px-4 sm:py-4">
                <p>Filter by who's assigned</p>
                <p onClick={() =>{setAssigne(false)
                setMobileMenuBG(false)
                }}>X</p>
                </li>
              <li className="px-2 py-2 border-t-[1px] border-solid border-gray-300 sm:px-4 sm:py-4">
              <input type="text" defaultValue="Filter users" className="py-[5px] px-3 bg-white border-[1px] border-solid border-gray-300 rounded-lg text-xs w-full"/>
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Assigned to nobody
              </li>
              <li className="py-[7px] px-4 border-t-[1px] border-solid border-gray-300 text-xs flex justify-start items-center sm:px-4 sm:py-4">
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
            <button className="flex justify-center items-center pl-4 text-[#57606a] md:text-sm hover:text-black" onClick={() => {setSortMenu(true)
            setMobileMenuBG(true)
            if(filtersMenu === true || labelMenu === true || assigneMenu === true){
              setFiletersMenu(false)
              setLabelMenu(false)
              setAssigne(false)
            }
            }}>
              Sort
              <img src={SortDown} alt="" className="hidden"/>
            </button>
            <ul className={`${sortMenu ? "visible" : "invisible"} absolute top-[25px] right-0 bg-white border-[1px] border-solid border-gray-300 rounded-lg w-[275px] sm:fixed sm:top-[2%] sm:left-[2%] sm:bottom-[21%] sm:w-[95%]`}>
              <li className="px-4 py-[7px] text-xs font-semibold flex justify-between items-center sm:py-4 sm:text-sm">
                <p>Sort by</p>
                <p onClick={() => {setSortMenu(false)
                setMobileMenuBG(false)}}>X</p>
                </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4 sm:text-sm">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Newest
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4 sm:text-sm">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Oldest
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4 sm:text-sm">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Most commented
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4 sm:text-sm">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Least commented
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4 sm:text-sm">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Recently updated
              </li>
              <li className="py-[7px] px-4 text-xs border-t-[1px] border-solid border-gray-300 flex justify-start items-center sm:px-4 sm:py-4 sm:text-sm">
              <div className="invisible">
                <CheckIcon size={16} className="mr-2"/>
              </div>
                Least recently updated
              </li>
            </ul>
          </div>
          </div>
          <div className="contents justify-start items-center px-4 py-2 bg-white border-[1px] border-solid border-gray-200 rounded-b-md h-[62.5px] md:h-[83.5px] sm:text-sm">
          {getIssues()}

          </div>
      </div>
      <div className="px-10 py-20 text-center hidden">
        <img src={issueOpened} alt=""  className=" my-0 mx-auto"/>
        <p className="my-4 text-2xl font-semibold">No results matched your search.</p>
        <p className="mb-[10px]">You could search <a href="#" className="text-[#0969da]">all of GitHub</a> or try an <a href="#" className="text-[#0969da]">advanced search</a>.</p>
      </div>
    </div>

    <div className="visible my-4 flex justify-center items-center">
    <button className="flex justify-start items-center px-[10px] py-[5px] ">
    <ChevronLeftIcon size={16} className="fill-[#0969da] sm: fill-[#8c959f]"/>
      <p className="text-[#0969da] sm:text-[#8c959f]">
        previous
      </p>
    </button>
    <div className="flex justify-center items-center sm:hidden">
    <button className="px-[10px] py-[5px]">
      <p className="w-8 h-8 flex justify-center items-center">1</p>
    </button>
    <button className="px-[10px] py-[5px]">
    <p className="w-8 h-8 flex justify-center items-center bg-[#0969da] text-white rounded-md">2</p>
    </button>
    </div>
    <button className="flex justify-start items-center px-[10px] py-[5px]">
    
      <p className="text-[#0969da]">
        Next
      </p>
      <ChevronRightIcon size={16} fill={"#0969da"}/>
    </button>
    </div>

    <div className="pt-4">
      <p className="flex justify-center items-center text-sm">
        <img src={Light} alt="" className="mr-1"/>
      <p className="font-semibold mr-1 text-base">ProTip!</p>Click a checkbox on the left to edit multiple issues at once.
      </p>
    </div>
    </div>
    </div>
  )
}

export default IssuePage;