import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "./api";

function IssueDetailPage() {
  const [repoData, setRepoData] = useState<any>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    async function getRepoName() {
      const data = await api.getRepo();
      setRepoData(data);
    }
    getRepoName();
  }, []);

  let jwtImg = JSON.parse(window.localStorage.getItem("userImg") as string);
  let jwtName = JSON.parse(window.localStorage.getItem("userName") as string);

  if (repoData === undefined || repoData?.message === "Bad credentials")
    return <></>;
  console.log(repoData);

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
            src={jwtImg}
            className="w-[10%] rounded-ful mx-auto flex rounded-full"
          />
          <p className="text-[32px] text-center mt-2">{jwtName}</p>
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
