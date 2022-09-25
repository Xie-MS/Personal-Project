// import React from "react";
// import styled from "styled-components";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import api from "./api";
// import ChangeColorImage from "./img/change.png";


// type CloseLabelTr = {
//   CloseLabelTr: number;
//   index: number;
// };

// const Label = styled.tr<CloseLabelTr>`
//   display: ${(props) => (props.CloseLabelTr === props.index ? "flex" : "none")};
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px 16px;
//   border-top: 0.5px solid #cccccc;
// `;

// type UpdateCloseLabelTr = {
//   UpdateCloseLabelTr: number;
//   index: number
// };

// const UpdateLabels = styled.tr<UpdateCloseLabelTr>`
//   display: ${(props) => (props.UpdateCloseLabelTr === props.index ? "flex" : "none")};
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px 16px;
//   border-top: 0.5px solid #cccccc;
// `;


// const UpdateLabel = styled.tr`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px 16px;
//   border-top: 0.5px solid #cccccc;
// `;

// const LabelStyle = styled.td`
//   width: 18%;

//   @media screen and (max-width: 767px) {
//     width: 40%;
//   }
// `;

// const LabelBtn = styled.button`
//   background-color: #${(props) => props.color};
//   padding: 0 10px;
//   font-size: 12px;
//   font-weight: 500;
//   line-height: 22px !important;
//   border: 1px solid rgba(0, 0, 0, 0.15);
//   border-radius: 2em;
// `;

// const LabelText = styled.td`
//   width: 33%;
//   font-size: 12px;
//   color: #57606a;

//   @media screen and (max-width: 767px) {
//     display: none;
//   }
// `;

// const LabelEvent = styled.td`
//   width: 12%;
//   text-align: right;

//   @media screen and (max-width: 1011px) {
//     text-align: center;
//     display: flex;
//     justify-content: end;
//     align-items: center;
//   }
// `;

// const LabelEventBtn = styled.button`
//   display: none;

//   @media screen and (max-width: 1011px) {
//     display: block;
//     padding: 3px 12px;
//     border: 1px solid #cccccc;
//     width: 42px;
//     height: 28px;
//     border-radius: 10px;
//     text-align: center;
//     position: relative;
//   }
// `;

// type MoreButtonBoolean = {
//   index: number;
//   moreBtnNumActive: any;
// };

// const LabelEventUl = styled.ul<MoreButtonBoolean>`
//   display: ${(props) =>
//     props.index === props.moreBtnNumActive ? "block" : "none"};

//   @media screen and (max-width: 1011px) {
//     display: block;
//     padding: 3px 0px;
//     border: 1px solid #cccccc;
//     width: 158px;
//     height: 68px;
//     border-radius: 10px;
//     text-align: center;
//     position: relative;
//     left: -130px;
//     bottom: -8.5px;
//     z-index: 2;
//     background: white;
//     padding-top: 8px;
//     padding-bottom: 8px;
//     display: ${(props) =>
//       props.index === props.moreBtnNumActive ? "block" : "none"};
//   }
// `;

// const LabelEventLi = styled.li`
//   display: none;

//   @media screen and (max-width: 1011px) {
//     display: block;
//     padding: 8px 16px 8px 8px;
//     width: 134px;
//     height: 18px;
//     background: white;
//     padding-top: 8px;
//     padding-bottom: 8px;
//     text-align: left;
//   }
// `;

// const Edit = styled.button`
//   background-color: white;
//   border: none;

//   @media screen and (max-width: 1011px) {
//     display: none;
//   }
// `;

// const Delete = styled.button`
//   background-color: white;
//   border: none;

//   @media screen and (max-width: 1011px) {
//     display: none;
//   }
// `;

// const CreateInformationLeft = styled.div`
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   @media screen and (max-width: 767px) {
//     display: block;
//   }
// `;

// const CreateInformationInputUl = styled.ul`
//   padding-left: 0px;
//   padding-right: 16px;
//   display: block;
//   justify-content: start;
//   align-items: center;
//   list-style: none;

//   @media screen and (max-width: 767px) {
//     display: block;
//     margin: 8px 0px;
//   }
// `;

// const CreateInformationInputUlTotal = styled.div`
// display:flex;
// justify-content: center;
// align-items: end;
// margin: 16px 0px;
// position: relative;
// `;


// const CreateInformationInputText = styled.li`
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   color: black;
//   margin-bottom: 6px;
//   @media screen and (max-width: 767px) {
//     height: 44px;
//   }
// `;

// const CreateInformationInput = styled.li`
//   font-size: 14px;
//   font-weight: 600;
//   word-wrap: break-word;
//   line-height: 1.5;
//   color: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media screen and (max-width: 767px) {
//     width: 100%;
//   }
// `;

// const CreateInformationInputName = styled.input`
//   margin-right: 5px;
//   padding: 5px 12px;
//   border: 1px solid rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   width: 100%;
//   height: 20px;
//   &:focus {
//     border: 1px solid #54aeff;
//   }
//   @media screen and (max-width: 767px) {
//     width: 100%;
//   }
// `;

// const CreateInformationInputDescription = styled.input`
//   margin-right: 5px;
//   padding: 5px 12px;
//   border: 1px solid rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   width: 100%;
//   height: 20px;
//   &:focus {
//     border: 1px solid #54aeff;
//   }
//   @media screen and (max-width: 767px) {
//     width: 100%;
//   }
// `;

// type ErrorColorValue = {
//   errorColorValue: boolean;
// };

// const CreateInformationInputColor = styled.input<ErrorColorValue>`
//   color: ${(props) => (props.errorColorValue ? "red" : "black")};
//   margin-right: 5px;
//   padding: 5px 12px;
//   border: 1px solid rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   width: 100%;
//   height: 20px;

//   &:focus {
//     border: 1px solid #54aeff;
//   }
//   @media screen and (max-width: 767px) {
//     width: 100%;
//   }
// `;

// type selectColorMenuActive = {
//   selectColorMenuActive: boolean;
// };

// const ColorList = styled.ul<selectColorMenuActive>`
//   display: ${(props) => (props.selectColorMenuActive ? "block" : "none")};
//   width: 230px;
//   padding: 8px 8px;
//   border: 1px solid rgba(0, 0, 0, 0.25);
//   background-color: white;
//   height: 78px;
//   border-radius: 10px;
//   position: absolute;
//   left: 28px;
//   top: 60px;
// `;

// const ColorListP = styled.p`
//   margin-top: 0;
//   margin-bottom: 4px;
//   font-size: 12px;
//   color: black;
//   @media screen and (max-width: 767px) {
//   }
// `;

// const ColorBtn = styled.button`
//   width: 24px;
//   height: 24px;
//   background-color: ${(props) => props.color};
//   border: 0.5px solid rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   margin-bottom: 8px;
//   margin-right: 3px;
//   @media screen and (max-width: 767px) {
//   }
// `;

// const CreateInformationChangeColor = styled.button`
//   width: 40px;
//   height: 33px;
//   background-image: url(${ChangeColorImage});
//   background-size: 25px;
//   background-repeat: no-repeat;
//   background-position: center;
//   padding: 0px 7px;
//   border: 1px solid rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   background-color: ${(props) => props.color};
//   margin-right: 8px;
// `;

// const CreateInformationRight = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 16px 0px 16px 12px;
//   height: 32px;
//   @media screen and (max-width: 767px) {
//     justify-content: start;
//     margin: 16px 0px;
//   }
// `;

// const CreateCancel = styled.button`
//   width: 74px;
//   height: 30px;
//   border: 1px solid rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   background-color: transparent;
//   text-align: center;
//   margin-right: 8px;
//   padding: 5px 16px;
//   @media screen and (max-width: 767px) {
//     order: 2;
//     margin-left: 8px;
//   }
// `;

// const UpdateSaveBtn = styled.button`
//   width: 107.5px;
//   height: 30px;
//   pad: 5px 16px;
//   border: 1px solid rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   background-color: #2da44e;
//   text-align: center;
//   color: white;
// `;

// type UpdateLabelboolean = {
//   updateActive: number;
//   updateId: number;
// };


// const Update = styled.div<UpdateLabelboolean>`
//   display: ${(props) => (props.updateActive === props.updateId ? "block" : "none")};
// `;

// const UpdateInformation = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: self-end;
//   padding: 0px 16px;
//   @media screen and (max-width: 767px) {
//     display: block;
//     padding: 0px 16px;
//   }
// `;

// let colorListArray: any = [
//   "#B60205",
//   "#D93F0B",
//   "#FBCA04",
//   "#0E8A16",
//   "#006B75",
//   "#1D76DB",
//   "#0052CC",
//   "#5319E7",
//   "#E99695",
//   "#F9D0C4",
//   "#FEF2C0",
//   "#C2E0C6",
//   "#BFDADC",
//   "#C5DEF5",
//   "#BFD4F2",
//   "#D4C5F9",
// ];

// function LabelData() {
//   const [labels, setLablels]: any = useState([]);
//   const [active, setActive] = useState(false);
//   const [updateActive, setUpdateActive] = useState(-1);
//   const [sortActive, setSortActive] = useState(false);
//   const [createActive, setCreateActive]: any = useState(true);
//   const [moreBtnNumActive, setMoreBtnNumActive] = useState(-1);
//   const Description = useRef<HTMLInputElement | null>(null);
//   const SeleceColor = useRef<HTMLInputElement | null>(null);
//   const UpdateSeleceColor = useRef<HTMLInputElement | null>(null);
//   const [inputName, setInputName]: any = useState("");
//   const [newLabelsSelectColor, setNewLabelsSelectColor]: any =
//     useState();
//     const [updateLabelsSelectColor, setUpdateLabelsSelectColor]: any =
//     useState("");
//   const [selectColorMenuActive, setSelectColorMenuActive]: any =
//     useState(false);
//     const [closeLabelTr, setCloseLabelTr]: any =
//     useState(0);
//   const [colorMathFloorNum, setColorMathFloorNum]: any = useState(0);
//   const [errorColorValue, setErrorColorValue]: any = useState(false);
//   const [deleteLabels, setDeleteLabels]: any = useState();
//   const [updateLabelName, setUpdateLabelName]: any = useState();
//   const [updateUpdateDescription, setupdateUpdateDescription]: any = useState();
//   const [updateUpdateColor, setupdateUpdateColor]: any = useState();
//   const dispatch = useDispatch();
//   const LabelsData:any = useSelector((state) => state);

//   function ColorListTotal() {
//     return colorListArray.map((item: string, index: number) => {
//       return (
//         <ColorBtn
//           key={index}
//           color={item}
//           onClick={() => {
//             console.log({ item }.item)
//             setNewLabelsSelectColor({ item }.item);
//             setupdateUpdateColor({ item }.item)
//             if (selectColorMenuActive === true) {
//               setSelectColorMenuActive(false);
//             } else {
//               setSelectColorMenuActive(true);
//             }
//           }}
//         />
//       );
//     });
//   }

//   function getColor() {
//     setSelectColorMenuActive(false);
//     console.log(selectColorMenuActive,newLabelsSelectColor,UpdateSeleceColor.current?.value);
//     let MathFloorColorNum;
//     MathFloorColorNum = Math.floor(Math.random() * colorListArray.length);
//     setColorMathFloorNum(MathFloorColorNum);
//     setUpdateLabelsSelectColor(colorListArray[colorMathFloorNum])
//     setupdateUpdateColor(colorListArray[colorMathFloorNum])
//     setNewLabelsSelectColor(colorListArray[colorMathFloorNum]);
//   }


//   function UpdateLabelName(e: any) {
//     if (e.target.value !== undefined) {
//       setInputName(e.target.value);
//       setUpdateLabelName(e.target.value);
//     } else return;
//   }

//   function UpdateDescriptionInput(e: any) {
//     if (e.target.value !== undefined) {
//       setupdateUpdateDescription(e.target.value);
//     } else return;
//   }

//   function PostLabelColor(e: any) {
//     setSelectColorMenuActive(false);
//     setNewLabelsSelectColor(e.target.value);
//     if (e.target.value.length !== 7) {
//       setErrorColorValue(true);
//     } else {
//       setErrorColorValue(false);
      
//     }
//   }


//   return (
//     <>
//         <Label key={index} CloseLabelTr={index} index={index}>
//           <LabelStyle>
//             <LabelBtn key={index} color={newLabelsSelectColor}>
//               {[labels][0][index].name}
//             </LabelBtn>
//           </LabelStyle>
//           <LabelText>{[labels][0][index].description}</LabelText>
//           <LabelEvent>
//             <LabelEventBtn onClick={() => {
//               if(moreBtnNumActive === index){
//                 setMoreBtnNumActive(-1)
//               }else{
//                 setMoreBtnNumActive(index)
//               }}}>
//               ...
//               <LabelEventUl index={index} moreBtnNumActive={moreBtnNumActive}>
//                 <LabelEventLi onClick={() => {
//                 setMoreBtnNumActive(-1)
//                 setUpdateActive(index)
//                 setCloseLabelTr(-1)
//                 setUpdateLabelName([labels][0][index].name)
//                 setupdateUpdateDescription([labels][0][index].description)
//                 setupdateUpdateColor([labels][0][index].color)
//                 setNewLabelsSelectColor(`#`+[labels][0][index].color)
//                 console.log(index,closeLabelTr)
//               }
//                 }>
//                   Edit
//                 </LabelEventLi>
//                 <LabelEventLi onClick={() => {setDeleteLabels([labels][0][index].name)
//                 deleteLabel()}}>Delete</LabelEventLi>
//               </LabelEventUl>
//             </LabelEventBtn>
//             <Edit onClick={() => {setUpdateActive(index)
//               setUpdateLabelName([labels][0][index].name)
//               setupdateUpdateDescription([labels][0][index].description)
//               setupdateUpdateColor([labels][0][index].color)
//             }}>Edit</Edit>
//             <Delete onClick={() => {setDeleteLabels([labels][0][index].name)
//                 deleteLabel()}}>Delete</Delete>
//           </LabelEvent>
//         </Label>
//         <Update updateActive={updateActive} updateId={index}>
//             <UpdateInformation>
//               <CreateInformationLeft>
//                 <CreateInformationInputUl>
//                   <CreateInformationInputText>
//                     Label name
//                   </CreateInformationInputText>
//                   <CreateInformationInput>
//                     <CreateInformationInputName
//                       type="text"
//                       defaultValue={[labels][0][index].name}
//                       onChange={(e) => UpdateLabelName(e)}
//                     />
//                   </CreateInformationInput>
//                 </CreateInformationInputUl>
//                 <CreateInformationInputUl>
//                   <CreateInformationInputText>
//                     Description
//                   </CreateInformationInputText>
//                   <CreateInformationInput>
//                     <CreateInformationInputDescription
//                       type="text"
//                       defaultValue={[labels][0][index].description}
//                       onChange={(e) => {UpdateDescriptionInput(e)}}
//                     />
//                   </CreateInformationInput>
//                 </CreateInformationInputUl>
//                 <CreateInformationInputUlTotal>
//                 <CreateInformationInputUl>
//                   <CreateInformationInputText>Color</CreateInformationInputText>
//                   <CreateInformationInput
//                     onClick={() => {
//                       setSelectColorMenuActive(true);
//                     }}
//                   />
//                   <CreateInformationChangeColor
//                     color={newLabelsSelectColor}
//                     onClick={() => {
//                       getColor();
//                     }}
//                   />
//                   </CreateInformationInputUl>
//                   <CreateInformationInputColor
//                     type="text"
//                     value={newLabelsSelectColor}
//                     pattern="#?([a-fA-F0-9]{6})"
//                     maxLength={7}
//                     ref={UpdateSeleceColor}
//                     onClick={()=>{
//                       setSelectColorMenuActive(true);
//                     }}
//                     errorColorValue={errorColorValue}
//                     onChange={(e) => {
//                       PostLabelColor(e)
//                     }}
//                   />
//                   <ColorList selectColorMenuActive={selectColorMenuActive}>
//                     <ColorListP>Choose from default colors:</ColorListP>
//                     <li>{ColorListTotal()}</li>
//                   </ColorList>
//                   </CreateInformationInputUlTotal>
//               </CreateInformationLeft>
//               <CreateInformationRight>
//                 <CreateCancel onClick={() => {setUpdateActive(index)
//                 setCloseLabelTr(index)
//                 setUpdateActive(-1)
//                 setMoreBtnNumActive(-1)}
//                 }>
//                   Cancel
//                 </CreateCancel>
//                 <UpdateSaveBtn onClick={() => {updataLabels(index)}}>
//                   Save Changes
//                 </UpdateSaveBtn>
//               </CreateInformationRight>
//             </UpdateInformation>
//           </Update>
//         </>
//   );
// }

// export default LabelData;
