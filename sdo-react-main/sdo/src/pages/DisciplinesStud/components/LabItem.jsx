// LabItem.jsx
import React from "react";
import styled from "styled-components";

// Внешний контейнер для элемента: две колонки в ряд
const LabItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 50px;
`;

// Левая колонка – название лабораторной
const LabNameContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  padding: 40px 20px;
  flex: 1;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #333;
`;

// Правая колонка – оценка, весь блок закрашивается в нужный цвет
const LabGradeContainer = styled.div`
  flex: 1;
  border-radius: 6px;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ grade }) => {
    switch (grade) {
      case "зачетно":
        return "#85A4518C";
      case "незачетно":
        return "#FF7070"; // Светло-красный фон
      default:
        return "#D9D9D9"; // Серый фон (например, "на проверке")
    }
  }};
  
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

export default function LabItem({ name, grade }) {
  return (
    <LabItemWrapper>
      <LabNameContainer>
        <LabName>{name}</LabName>
      </LabNameContainer>
      <LabGradeContainer grade={grade}>
        Оценка: {grade}
      </LabGradeContainer>
    </LabItemWrapper>
  );
}
