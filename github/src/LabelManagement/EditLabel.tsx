import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import api from "../api";

import ChangeColorImage from "../../src/img/change.png";

const LableList = styled.table`
  width: 100%;
`;

type CloseLabelTr = {
  CloseLabelTr: number;
  index: number;
};

const Label = styled.tr<CloseLabelTr>`
  display: ${(props) => (props.CloseLabelTr === props.index ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  border-top: 0.5px solid #cccccc;
`;

type UpdateCloseLabelTr = {
  UpdateCloseLabelTr: number;
  index: number;
};

const LabelStyle = styled.td`
  width: 18%;
  @media screen and (max-width: 767px) {
    width: 40%;
  }
`;

type LabelBtnColor = {
  LabelBtnColor: string;
  UpdateChangeColor: string;
  index: number;
  LabelBtnColorNum: number;
  updateChangeColorText: string;
  labelBtnColorText: string;
};

const LabelBtn: any = styled.button<LabelBtnColor>`
  background-color: #${(props) => (props.LabelBtnColorNum === props.index ? props.UpdateChangeColor : props.LabelBtnColor)};
  color: ${(props) =>
    props.LabelBtnColorNum === props.index
      ? props.updateChangeColorText
      : props.labelBtnColorText};
  padding: 0 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2em;
`;

const LabelText = styled.td`
  width: 33%;
  font-size: 12px;
  color: #57606a;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const LabelEvent = styled.td`
  width: 12%;
  text-align: right;

  @media screen and (max-width: 1011px) {
    text-align: center;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const LabelEventBtn = styled.button`
  display: none;

  @media screen and (max-width: 1011px) {
    display: block;
    padding: 3px 12px;
    border: 1px solid #cccccc;
    width: 42px;
    height: 28px;
    border-radius: 10px;
    text-align: center;
    position: relative;
  }
`;

type MoreButtonBoolean = {
  index: number;
  moreBtnNumActive: any;
};

const LabelEventUl = styled.ul<MoreButtonBoolean>`
  display: ${(props) =>
    props.index === props.moreBtnNumActive ? "block" : "none"};

  @media screen and (max-width: 1011px) {
    display: block;
    padding: 3px 0px;
    border: 1px solid #cccccc;
    width: 158px;
    height: 68px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    left: -130px;
    bottom: -8.5px;
    z-index: 2;
    background: white;
    padding-top: 8px;
    padding-bottom: 8px;
    display: ${(props) =>
      props.index === props.moreBtnNumActive ? "block" : "none"};
  }
`;

const LabelEventLi = styled.li`
  display: none;

  @media screen and (max-width: 1011px) {
    display: block;
    padding: 8px 16px 8px 8px;
    width: 134px;
    height: 18px;
    background: white;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: left;
  }
`;

const Edit = styled.button`
  background-color: white;
  border: none;

  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const Delete = styled.button`
  background-color: white;
  border: none;
  margin-left: 16px;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const CreateInformationLeft = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const CreateInformationInputUl = styled.ul`
  padding-left: 0px;
  padding-right: 16px;
  display: block;
  justify-content: start;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 767px) {
    display: block;
    margin: 8px 0px;
  }
`;

const CreateInformationInputUlTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 16px 0px;
  position: relative;
`;

const CreateInformationInputText = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  color: black;
  margin-bottom: 6px;
  @media screen and (max-width: 767px) {
    height: 44px;
  }
`;

const CreateInformationInput = styled.li`
  font-size: 14px;
  font-weight: 600;
  word-wrap: break-word;
  line-height: 1.5;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const CreateInformationInputName = styled.input`
  margin-right: 5px;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  height: 30px;
  background-color: #f6f8fa;

  &:focus {
    border: 1px solid #54aeff;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const CreateInformationInputDescription = styled.input`
  margin-right: 5px;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  height: 30px;
  background-color: #f6f8fa;

  &:focus {
    border: 1px solid #54aeff;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

type ErrorColorValue = {
  errorColorValue: boolean;
};

const CreateInformationInputColor = styled.input<ErrorColorValue>`
  color: ${(props) => (props.errorColorValue ? "red" : "black")};
  margin-right: 5px;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 104px;
  height: 30px;
  background-color: #f6f8fa;

  &:focus {
    border: 1px solid #54aeff;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

type selectColorMenuActive = {
  selectColorMenuActive: boolean;
};

const ColorList = styled.ul<selectColorMenuActive>`
  display: ${(props) => (props.selectColorMenuActive ? "block" : "none")};
  width: 240px;
  padding: 8px 8px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: white;
  height: auto;
  border-radius: 10px;
  position: absolute;
  left: 28px;
  top: 60px;
`;

const ColorListP = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 12px;
  color: black;
  @media screen and (max-width: 767px) {
  }
`;

const ColorBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 8px;
  margin-right: 3px;
  @media screen and (max-width: 767px) {
  }
`;

const CreateInformationChangeColor = styled.button`
  width: 40px;
  height: 33px;
  background-image: url(${ChangeColorImage});
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0px 7px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

const CreateInformationRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0px 16px 12px;
  height: 32px;
  @media screen and (max-width: 767px) {
    justify-content: start;
    margin: 16px 0px;
  }
`;

const CreateCancel = styled.button`
  width: 74px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: transparent;
  text-align: center;
  margin-right: 8px;
  padding: 5px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: black;
  @media screen and (max-width: 767px) {
    order: 2;
    margin-left: 8px;
  }
`;

const UpdateSaveBtn = styled.button`
  width: 107.5px;
  height: 30px;
  pad: 5px 16px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #2da44e;
  text-align: center;
  color: white;
  font-size: 14px;
`;

type UpdateLabelboolean = {
  updateActive: number;
  updateId: number;
};

const Update = styled.div<UpdateLabelboolean>`
  display: ${(props) =>
    props.updateActive === props.updateId ? "block" : "none"};
`;

const UpdateInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  padding: 0px 16px;
  @media screen and (max-width: 767px) {
    display: block;
    padding: 0px 16px;
  }
`;

let colorListArray: any = [
  "#B60205",
  "#D93F0B",
  "#FBCA04",
  "#0E8A16",
  "#006B75",
  "#1D76DB",
  "#0052CC",
  "#5319E7",
  "#E99695",
  "#F9D0C4",
  "#FEF2C0",
  "#C2E0C6",
  "#BFDADC",
  "#C5DEF5",
  "#BFD4F2",
  "#D4C5F9",
];

function LabelEditManagement({
  labels,
  setLablels,
  moreBtnNumActive,
  setMoreBtnNumActive,
  SeleceColor,
  setInputName,
  setNewLabelsSelectColor,
  selectColorMenuActive,
  setSelectColorMenuActive,
  colorMathFloorNum,
  setColorMathFloorNum,
  LabelBtnColor,
  setLabelBtnColor,
  UpdateChangeColor,
  setUpdateChangeColor,
  LabelBtnColorNum,
  setLabelBtnColorNum,
  errorColorValue,
  setErrorColorValue,
  labelsDataTotal,
  setLabelsDataTotal,
  lightOrDarkCreateText,
  setLightOrCreateDark,
  textLightOrDark,
  setTextLightOrDark,
  labelTextLightOrDark,
  serLabelTextLightOrDark,
}: {
  labels: any;
  setLablels: any;
  moreBtnNumActive: any;
  setMoreBtnNumActive: any;
  SeleceColor: any;
  setInputName: any;
  setNewLabelsSelectColor: any;
  selectColorMenuActive: any;
  setSelectColorMenuActive: any;
  colorMathFloorNum: any;
  setColorMathFloorNum: any;
  LabelBtnColor: any;
  setLabelBtnColor: any;
  UpdateChangeColor: any;
  setUpdateChangeColor: any;
  LabelBtnColorNum: any;
  setLabelBtnColorNum: any;
  errorColorValue: any;
  setErrorColorValue: any;
  labelsDataTotal: any;
  setLabelsDataTotal: any;
  lightOrDarkCreateText: any;
  setLightOrCreateDark: any;
  textLightOrDark: any;
  setTextLightOrDark: any;
  labelTextLightOrDark: any;
  serLabelTextLightOrDark: any;
}) {
  const [updateActive, setUpdateActive] = useState(-1);
  const [closeLabelTr, setCloseLabelTr]: any = useState(0);

  const [deleteLabels, setDeleteLabels]: any = useState();
  const [updateLabelName, setUpdateLabelName]: any = useState();
  const [updateUpdateDescription, setupdateUpdateDescription]: any = useState();
  const [updateUpdateColor, setupdateUpdateColor]: any = useState();
  const [updateChangeColorText, setUpdateChangeColorText]: any = useState();
  const [labelBtnColorText, setLabelBtnColorText]: any = useState();

  const dispatch = useDispatch();
  const LabelsData: any = useSelector((state) => state);

  async function getLabels() {
    const data = await api.getLabels();
    dispatch({ type: "SetLabelData", payload: data });
  }
  useEffect(() => {
    getLabels();
  }, []);

  function lightOrDark(SelectColor: string) {
    if (SelectColor.includes("#")) {
      const r1 = parseInt(SelectColor.substring(1).slice(0, 1), 16);
      const r2 = parseInt(SelectColor.substring(1).slice(1, 2), 16);
      const g1 = parseInt(SelectColor.substring(1).slice(2, 3), 16);
      const g2 = parseInt(SelectColor.substring(1).slice(3, 4), 16);
      const b1 = parseInt(SelectColor.substring(1).slice(4, 5), 16);
      const b2 = parseInt(SelectColor.substring(1).slice(5, 6), 16);
      const hsp = r1 + r2 + g1 + g2 + b1 + b2;
      if (hsp > 45) {
        setTextLightOrDark("black");
        setLabelBtnColorText("black");
        setUpdateChangeColorText("black");
      } else {
        setTextLightOrDark("white");
        setLabelBtnColorText("white");
        setUpdateChangeColorText("white");
      }
      console.log(hsp, r1, r2, g1, g2, b1, b2);
    } else {
      const r1 = parseInt(SelectColor.slice(0, 1), 16);
      const r2 = parseInt(SelectColor.slice(1, 2), 16);
      const g1 = parseInt(SelectColor.slice(2, 3), 16);
      const g2 = parseInt(SelectColor.slice(3, 4), 16);
      const b1 = parseInt(SelectColor.slice(4, 5), 16);
      const b2 = parseInt(SelectColor.slice(5, 6), 16);
      const hsp = r1 + r2 + g1 + g2 + b1 + b2;
      if (hsp > 45) {
        setTextLightOrDark("black");
        serLabelTextLightOrDark("black");
        setLabelBtnColorText("black");
        setUpdateChangeColorText("black");
        console.log(hsp, r1, r2, g1, g2, b1, b2, "black");
      } else {
        setTextLightOrDark("white");
        serLabelTextLightOrDark("white");
        setLabelBtnColorText("white");
        setUpdateChangeColorText("white");
        console.log(hsp, r1, r2, g1, g2, b1, b2, "white");
      }
    }
  }

  useEffect(() => {
    async function getLabels() {
      const data = await api.getLabels();
      setLablels(data);
      setLabelsDataTotal(data.length);
      if (LabelsData.labelReducer.length !== 1) {
        setLablels(LabelsData.labelReducer);
        setLabelsDataTotal(LabelsData.labelReducer.length);
      } else if (
        LabelsData.labelReducer.length === 1 &&
        LabelsData.labelReducer[0].name === undefined
      ) {
        setLablels(data);
        setLabelsDataTotal(data.length);
      } else if (
        LabelsData.labelReducer.length === 1 &&
        LabelsData.labelReducer[0].name !== undefined
      ) {
        setLablels(data);
        setLabelsDataTotal(data.length);
      }
    }
    getLabels();
  }, [LabelsData.labelReducer]);

  if (labels === undefined || labels?.message === "Bad credentials") {
    window.location.assign("/");
    localStorage.clear();
  }

  function labelsData() {
    if (labels === undefined) return <Label CloseLabelTr={-1} index={-1} />;
    return [labels][0].map((item: any, index: number) => {
      if (LabelBtnColor === undefined && LabelBtnColorNum === -1) {
        setLabelBtnColor([labels][0][index].color);
        setUpdateChangeColor([labels][0][index].color);
        lightOrDark([labels][0][index].color);
      }

      return (
        <>
          <Label key={index} CloseLabelTr={index} index={index}>
            <LabelStyle>
              <LabelBtn
                styled={`color:#${labelBtnColorText}`}
                key={index}
                LabelBtnColorNum={LabelBtnColorNum}
                LabelBtnColor={[labels][0][index].color}
                UpdateChangeColor={UpdateChangeColor}
                index={index}
                LabelBtnColorText={textLightOrDark}
                UpdateChangeColorText={textLightOrDark}
                color={
                  UpdateChangeColor === LabelBtnColorNum
                    ? labelBtnColorText
                    : updateChangeColorText
                }
              >
                {[labels][0][index].name}
              </LabelBtn>
            </LabelStyle>
            <LabelText>{[labels][0][index].description}</LabelText>
            <LabelEvent>
              <LabelEventBtn
                onClick={() => {
                  if (moreBtnNumActive === index) {
                    setMoreBtnNumActive(-1);
                  } else {
                    setMoreBtnNumActive(index);
                  }
                }}
              >
                ...
                <LabelEventUl index={index} moreBtnNumActive={moreBtnNumActive}>
                  <LabelEventLi
                    onClick={() => {
                      setLabelBtnColorNum(index);
                      setUpdateChangeColor([labels][0][index].color);
                      setMoreBtnNumActive(-1);
                      setUpdateActive(index);
                      setCloseLabelTr(-1);
                      setUpdateLabelName([labels][0][index].name);
                      setupdateUpdateDescription(
                        [labels][0][index].description
                      );
                      setupdateUpdateColor([labels][0][index].color);
                      setNewLabelsSelectColor(`#` + [labels][0][index].color);
                    }}
                  >
                    Edit
                  </LabelEventLi>
                  <LabelEventLi
                    onClick={() => {
                      setDeleteLabels([labels][0][index].name);
                      deleteLabel(index);
                    }}
                  >
                    Delete
                  </LabelEventLi>
                </LabelEventUl>
              </LabelEventBtn>
              <Edit
                onClick={() => {
                  setUpdateActive(index);
                  setUpdateLabelName([labels][0][index].name);
                  setupdateUpdateDescription([labels][0][index].description);
                  setupdateUpdateColor([labels][0][index].color);
                }}
              >
                Edit
              </Edit>
              <Delete
                onClick={() => {
                  setDeleteLabels([labels][0][index].name);
                  deleteLabel(index);
                }}
              >
                Delete
              </Delete>
            </LabelEvent>
          </Label>
          <Update updateActive={updateActive} updateId={index}>
            <UpdateInformation>
              <CreateInformationLeft>
                <CreateInformationInputUl>
                  <CreateInformationInputText>
                    Label name
                  </CreateInformationInputText>
                  <CreateInformationInput>
                    <CreateInformationInputName
                      type="text"
                      defaultValue={[labels][0][index].name}
                      onChange={(e) => UpdateLabelName(e)}
                    />
                  </CreateInformationInput>
                </CreateInformationInputUl>
                <CreateInformationInputUl>
                  <CreateInformationInputText>
                    Description
                  </CreateInformationInputText>
                  <CreateInformationInput>
                    <CreateInformationInputDescription
                      type="text"
                      defaultValue={[labels][0][index].description}
                      onChange={(e) => {
                        UpdateDescriptionInput(e);
                      }}
                    />
                  </CreateInformationInput>
                </CreateInformationInputUl>
                <CreateInformationInputUlTotal>
                  <CreateInformationInputUl>
                    <CreateInformationInputText>
                      Color
                    </CreateInformationInputText>
                    <CreateInformationInput
                      onClick={() => {
                        setSelectColorMenuActive(true);
                      }}
                    />
                    <CreateInformationChangeColor
                      color={`#` + UpdateChangeColor}
                      onClick={() => {
                        getUpdateColor();
                      }}
                    />
                  </CreateInformationInputUl>
                  <CreateInformationInputColor
                    type="text"
                    defaultValue={`#` + UpdateChangeColor}
                    pattern="#?([a-fA-F0-9]{6})"
                    maxLength={7}
                    ref={SeleceColor}
                    onClick={() => {
                      setSelectColorMenuActive(true);
                    }}
                    errorColorValue={errorColorValue}
                    onChange={(e) => {
                      PostLabelColor(e);
                    }}
                  />
                  <ColorList selectColorMenuActive={selectColorMenuActive}>
                    <ColorListP>Choose from default colors:</ColorListP>
                    <li>{ColorListTotal()}</li>
                  </ColorList>
                </CreateInformationInputUlTotal>
              </CreateInformationLeft>
              <CreateInformationRight>
                <CreateCancel
                  onClick={() => {
                    setUpdateActive(index);
                    setCloseLabelTr(index);
                    setUpdateActive(-1);
                    setMoreBtnNumActive(-1);
                  }}
                >
                  Cancel
                </CreateCancel>
                <UpdateSaveBtn
                  onClick={() => {
                    updataLabels(index);
                  }}
                >
                  Save Changes
                </UpdateSaveBtn>
              </CreateInformationRight>
            </UpdateInformation>
          </Update>
        </>
      );
    });
  }
  function ColorListTotal() {
    return colorListArray.map((item: string, index: number) => {
      return (
        <ColorBtn
          key={index}
          color={item}
          onClick={() => {
            setNewLabelsSelectColor({ item }.item);
            setUpdateChangeColor({ item }.item.substring(1));
            setLabelBtnColorNum(index);
            if (selectColorMenuActive === true) {
              setSelectColorMenuActive(false);
            } else {
              setSelectColorMenuActive(true);
            }
          }}
        />
      );
    });
  }

  function getUpdateColor() {
    setSelectColorMenuActive(false);
    let MathFloorColorNum;
    MathFloorColorNum = Math.floor(Math.random() * colorListArray.length);
    setColorMathFloorNum(MathFloorColorNum);
    setLabelBtnColorNum(colorMathFloorNum);
    setUpdateChangeColor(colorListArray[colorMathFloorNum].substring(1));
  }

  function UpdateLabelName(e: any) {
    if (e.target.value !== undefined) {
      setInputName(e.target.value);
      setUpdateLabelName(e.target.value);
    } else return;
  }

  function UpdateDescriptionInput(e: any) {
    if (e.target.value !== undefined) {
      setupdateUpdateDescription(e.target.value);
    } else return;
  }

  function PostLabelColor(e: any) {
    setSelectColorMenuActive(false);
    setNewLabelsSelectColor(e.target.value);
    if (e.target.value.length !== 7) {
      setErrorColorValue(true);
    } else {
      setErrorColorValue(false);
      setNewLabelsSelectColor(e.target.value);
      setUpdateChangeColor(e.target.value);
      setLabelBtnColor(e.target.value);
      lightOrDark(e.target.value);
    }
  }

  let jwtName = JSON.parse(window.localStorage.getItem("userName") as string);
  let jwtRepo = JSON.parse(
    window.localStorage.getItem("userChooseRepo") as string
  );

  async function deleteLabel(index: number) {
    const data = await api
      .deleteLabel({
        owner: { jwtName },
        repo: { jwtRepo },
        name: labels[index].name,
      })
      .then((Labeldata) => {
        dispatch({
          type: "DeleteLabels",
          payload: { Labeldata },
        });
      });
  }

  async function updataLabels(index: number) {
    const data = await api
      .updataLabels({
        owner: { jwtName },
        repo: { jwtRepo },
        oldName: labels[index].name,
        name: updateLabelName,
        description: updateUpdateDescription,
        color: updateUpdateColor,
      })
      .then((Labeldata) => {
        dispatch({
          type: "UpdateLabels",
          payload: { Labeldata },
        });
      });
    setCloseLabelTr(index);
    setUpdateActive(-1);
  }

  return <LableList>{labelsData()}</LableList>;
}

export default LabelEditManagement;
