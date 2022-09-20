import React from "react";
import styled from "styled-components";


const Container = styled.div`
margin-top: 24px;
padding: 0px 32px;
`;

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const MenuLeftUl = styled.ul`
display: -webkit-inline-box;
justify-content: center;
align-items: center;
list-style: none ;
padding-left: 0px;
`;

const MenuBtn = styled.li`
border: 1px solid #000;
border-radius: 5px;
display: flex;
`;

const Labels = styled.button`
display: flex;
padding-right: 10px;
justify-content: center;
align-items: center;
height: 32px;
background-color: white;
border: none;
width: 88px;
border-right: 1px solid #000;
&:focus {
    background-color: #0969da;
    color: white;
  }
`;

const LabelsImg = styled.img`
width: 16px;
height: 16px;
`;

const Milestones = styled.button`
display: flex;
padding-right: 10px;
justify-content: center;
align-items: center;
height: 32px;
border-radius: 5px;
background-color: white;
border: none;
width: 122px;
&:focus {
    background-color: #0969da;
    color: white;
  }
`;

const Search = styled.li`
padding: 0px 24px 0px 8px;
`;

const SearchInput = styled.input`
padding: 5px 12px 5px 32px;
border: 0.5px solid #000;
background-color: lightgray;
width: 274px;
height: 20px;
background-image: url(./img/search.svg);
background-repeat: no-repeat;
background-position: left;
border-radius: 5px;
&:focus {
    border: 1px solid #0969da;
    background-color: white;
  }
`;

const CreateLabel = styled.button`
border: 0.5px solid rgba(27,31,36,0.15);
background-color: #2da44e;
color: white;
border-radius: 5px;
padding: 5px 16px;
`;

const ContainerLabelList = styled.div`
border-radius: 5px;
border: 0.5px solid #CCCCCC;
`;

const LableListTitleTable = styled.table`
width: 100%;
height: 21px;
background-color: lightgray;
`;

const LableListTitle = styled.tr`
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
padding: 16px 16px;
border: 0.5px solid #CCCCCC;
`;

const LabelTitleEvent = styled.td`
display: flex;
justify-content: center;
align-items: center;
`;

const LableListTitleImg = styled.img`
width: 35%;
`;

const LableList = styled.table`
width: 100%;
`;

const Label = styled.tr`
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px 16px;
border-top: 0.5px solid #CCCCCC;
`;

const LabelStyle = styled.td`
width: 14%;

  @media screen and (max-width: 767px) {
    width: 40%;
  }
`;

const LabelBtn = styled.button`
background-color: antiquewhite;
padding: 0 10px;
font-size: 12px;
font-weight: 500;
line-height: 22px !important;
border: 1px solid transparent;
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
    border: 1px solid #CCCCCC;
    width: 42px;
    height: 28px;
    border-radius: 10px;
    text-align: center;
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

  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

function LabelManagement() {


  return (
    <Container>
    <Menu>
      <div>
        <MenuLeftUl>
          <MenuBtn>
            <Labels>
              <LabelsImg src="./img/Labels.svg" />Labels
            </Labels>
            <Milestones>
              <LabelsImg src="./img/milestone.svg" />Milestones
            </Milestones>
          </MenuBtn>
          <Search>
            <SearchInput
              value="Search all labels" />
          </Search>
        </MenuLeftUl>
      </div>
      <div>
        <CreateLabel>New label</CreateLabel>
      </div>
    </Menu>
    <ContainerLabelList>
      <LableListTitleTable>
        <LableListTitle>
          <td>9 labesls</td>
          <LabelTitleEvent>
            Sort<LableListTitleImg src="./img/sortDown.svg" />
          </LabelTitleEvent>
        </LableListTitle>
      </LableListTitleTable>
      <LableList>
        <Label>
          <LabelStyle><LabelBtn>bug</LabelBtn></LabelStyle>
          <LabelText>Something isn't working</LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
        <Label>
          <LabelStyle>
            <LabelBtn>documentation</LabelBtn>
          </LabelStyle>
          <LabelText>
            Improvements or additions to documentation
          </LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
        <Label>
          <LabelStyle>
            <LabelBtn>duplicate</LabelBtn>
          </LabelStyle>
          <LabelText>This issue or pull request already exists</LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
        <Label>
          <LabelStyle>
            <LabelBtn>enhancement</LabelBtn>
          </LabelStyle>
          <LabelText>New feature or request</LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
        <Label>
          <LabelStyle>
            <LabelBtn>good first issue</LabelBtn>
          </LabelStyle>
          <LabelText>Good for newcomers</LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
        <Label>
          <LabelStyle>
            <LabelBtn>help wanted</LabelBtn>
          </LabelStyle>
          <LabelText>Extra attention is needed</LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
        <Label>
          <LabelStyle>
            <LabelBtn>invalid</LabelBtn>
          </LabelStyle>
          <LabelText>This doesn't seem right</LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
        <Label>
          <LabelStyle>
            <LabelBtn>question</LabelBtn>
          </LabelStyle>
          <LabelText>Further information is requested</LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
        <Label>
          <LabelStyle>
            <LabelBtn>wontfix</LabelBtn>
          </LabelStyle>
          <LabelText>This will not be worked on</LabelText>
          <LabelEvent>
            <LabelEventBtn>...</LabelEventBtn>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </LabelEvent>
        </Label>
      </LableList>
    </ContainerLabelList>
  </Container>
  );
}

export default LabelManagement;
