import React from "react";
import styled from "styled-components";
import LabItem from "./components/LabItem";

const PageContainer = styled.div`
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 60px;
`;

/* Заголовок дисциплины */
const Title = styled.p`
  font-size: 20px;
  color: #000;
  margin-bottom: 25px;
`;

const TitleSection = styled.section`
    display: inline-block;
    background-color: #DDE5F8;
    border-radius: 8px;
    padding: 0px 20px;
    margin-bottom: 20px;
`;

/* Основной зелёный блок, внутри которого блоки статистики и список лаб */
const GreenSection = styled.section`
    width: 1000px;
    background-color: #E6F4CF;
    border-radius: 8px;
    padding: 30px;
`;

/* Заголовок "Статистика по выполненным заданиям" */
const StatsTitle = styled.p`
    text-align: center;
    font-size: 18px;
    color: #000;
    margin-bottom: 20px;
    margin-top: -10px;
`;

/* Контейнер для 3-х "карточек" статистики */
const StatsRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

/* Каждая отдельная "карточка" в блоке статистики */
const StatBox = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 30px 20px;
  color: #000;
  min-width: 250px;
  text-align: center;
`;

/* Контейнер для списка лабораторных */
const LabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 20px;
`;

export default function DisciplinesStud() {
    const labs = [
      { id: 1, name: "Лабораторная №1", grade: "зачетно" },
      { id: 2, name: "Лабораторная №2", grade: "незачетно" },
      { id: 3, name: "Лабораторная №3", grade: "зачетно" },
      { id: 4, name: "Лабораторная №4", grade: "на проверке" },
      { id: 5, name: "Лабораторная №5", grade: "на проверке" },
      { id: 6, name: "Лабораторная №6", grade: "на проверке" },
    ];
  
    return (
      <PageContainer>
        <ContentWrapper>
            <TitleSection>
                <Title>Дисциплина: Программирование на языке C++</Title>
            </TitleSection>
          <GreenSection>
            <StatsTitle>Статистика по выполненным заданиям</StatsTitle>
            <StatsRow>
              <StatBox>Сдано: 5 из 10</StatBox>
              <StatBox>Оценено: 3 из 10</StatBox>
              <StatBox>Текущая оценка: 87%</StatBox>
            </StatsRow>
            <LabsContainer>
              {labs.map((lab) => (
                <LabItem key={lab.id} name={lab.name} grade={lab.grade} />
              ))}
            </LabsContainer>
          </GreenSection>
        </ContentWrapper>
      </PageContainer>
    );
  }
