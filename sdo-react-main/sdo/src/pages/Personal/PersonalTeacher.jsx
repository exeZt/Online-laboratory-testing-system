import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../api/user-api";
import { getSubjects } from "../../api/subjects-api";
// Предполагаемые API-методы, добавь их в соответствующие файлы
import { getLabs, getGroups } from "../../api/teacher-api";

const SectionLab = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 75px 0px 100px;
`;

const List = styled.li`
  width: 320px;
  height: 100px;
  background-color: #d5def6;
  border-radius: 7px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BigList = styled.li`
  width: 800px;
  max-height: 100px;
  background-color: #E6F4CF;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

const Text = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
`;

const TextDisciplines = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
`;

const RowBlocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0px 0px 20px;
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  background-color: #c8d5f6;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PersonalTeacher = () => {
  const navigate = useNavigate();

  const [teacherInfo, setTeacherInfo] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
  });

  useEffect(() => {

    getUserData()
      .then((res) => {
        setTeacherInfo(res.data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных преподавателя:", error.message);
      });

  }, []);

  return (
    <SectionLab>
      <RowBlocks>
        <List>
          <Text>ФИО преподавателя:</Text>
          <TextDisciplines>
            {teacherInfo.first_name} {teacherInfo.last_name}{" "}
            {teacherInfo.middle_name}
          </TextDisciplines>
        </List>
        <List>
          <Text>Факультет:</Text>
        </List>
        <List>
          <Text>Группы:</Text>
        </List>
      </RowBlocks>
      <RowBlocks>
        <BigList>
          <Text>Дисциплины:</Text>
        </BigList>
        <BigList>
          <Text>Список лабораторных работ:</Text>
        </BigList>
        <BigList>
          <Text>Список групп:</Text>
        </BigList>
      </RowBlocks>
    </SectionLab>
  );
};

export default PersonalTeacher;