import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import api from "./api";

function IssueDetailPage() {
  const [repoData, setRepoData] = useState<any>(undefined);

  const userData: any = useSelector((state) => state);

  let userImg = JSON.parse(window.localStorage.getItem("userImg") as string);

  useEffect(() => {
    async function getRepoName() {
      const data = await api.getRepo(
        userData.tokenReducer.name,
        userData.tokenReducer.token
      );
      if (data !== null) {
        setRepoData(data);
      }
    }
    getRepoName();
  }, [userData]);

  if (repoData === undefined || repoData?.message === "Bad credentials") {
    return <></>;
  }

  function getRepoData() {
    return repoData?.map((repo: any) => {
      return (
        <li
          className="py-4 px-2 hover:cursor-pointer"
          onClick={() => {
            window.localStorage.setItem(
              `userChooseRepo`,
              JSON.stringify(`${repo.name}`)
            );
            window.location.assign(`/Issue`);
          }}
        >
          <p className="text-[20px] text-center">{repo.name}</p>
        </li>
      );
    });
  }

  return (
    <div className="block justify-center items-center mt-5">
      <div className="w-full block justify-center items-center">
        <div className="block justify-center items-center">
          <img
            src={userImg}
            className="w-[10%] rounded-ful mx-auto flex rounded-full"
          />
          <p className="text-[32px] text-center mt-2">
            {userData.tokenReducer.name}
          </p>
        </div>

        <div className="block justify-center items-center mt-8">
          <ul className="mx-auto border-[1px] border-solid border-stone-300 rounded-lg w-[40%]">
            {getRepoData()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IssueDetailPage;
