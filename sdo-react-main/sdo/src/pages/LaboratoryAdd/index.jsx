import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { createLab, getSubjects } from "../../api/teacher-api";

const Section = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`;

const BigBlock = styled.div`
  width: ${({ $BigWeight }) => ($BigWeight ? "1248px" : "1247px")};
  height: ${({ $BigHeight }) => ($BigHeight ? "530px" : "375px")};
  background-color: ${({ $BigFon }) => ($BigFon ? "#E2EDD0" : "#D5DEF6")};
  border-radius: 10px;
  display: flex;
  gap: ${({ $GapForm }) => ($GapForm ? "75px" : "0px")};
  .block__test {
    width: 540px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
  .block__one {
    margin-top: 5px;
  }
`;

const MinBlock = styled.li`
  width: 592px;
  height: 102px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 10px;
  list-style-type: none;
  position: relative;
  .icon {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }
`;

const UlMinBlock = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: ${({ $PaddingTopForm }) => ($PaddingTopForm ? "10px" : "15px")};
  max-height: 420px;
  overflow-y: auto;
  padding-right: 8px;
`;

const UlList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  max-width: 1241px;
  width: 100%;
  margin: 0 auto;

  .editing__container {
    width: 608px;
    height: 260px;
    background: #e2edd0;
    border-radius: 7px;
    list-style-type: none;
    display: flex;
    align-items: center;
  }
  .editing__block-Two {
    padding: 0px 30px 30px 20px;
  }
  .editing__block-text {
    color: #000;
    font-family: "Montserrat";
    font-size: 16px;
  }
  .editing__block-inp {
    display: flex;
    align-items: center;
  }
  .some-input {
    border: none;
    border-bottom: 1px solid #000;
    background-color: transparent;
    color: inherit;
    outline: none;
    margin-left: 5px;
    font-family: "Montserrat";
  }
  .editing__block-input {
    width: 555px;
    height: 60px; /* как в PrepodRedLab */
    border-radius: 7px;
    border-style: none;
    color: #000;
    font-family: "Montserrat";
    font-size: 16px;
    line-height: 27px;
    outline: none;
    background: #fff;
    padding: 8px 12px;
  }
  .editing__block-bth {
    display: flex;
    gap: 10px;
  }
  .editing__block {
    padding: 0px 30px 0px 20px;
    display: flex;
    gap: 75px;
    align-items: baseline;
  }
  .editing__block-name {
    display: flex;
    align-items: baseline;
  }
  .block__button {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .block__end {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: #e2edd0;
    border-radius: 5px;
    width: 1248px;
    height: 117px;
    justify-content: center;
    border-style: none;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #d7ebb5eb;
    }
  }
  .block__end-link {
    color: #000;
    font-size: 16px;
    font-family: "Montserrat";
    line-height: 27px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 1248px;
  }
`;

const List = styled.li`
  width: ${({ $Block }) => ($Block ? "1248px" : "608px")};
  height: ${({ $Block }) => ($Block ? "59px" : "260px")};
  background-color: ${({ $Block }) => ($Block ? "#D9D9D9" : "#D5DEF6")};
  border-radius: 7px;
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const NameLabInput = styled.input`
  display: flex;
  border: none;
  background: none;
  width: 608px;
  height: 260px;
  font-size: 18px;
  padding: 0px 0px 0px 30px;
  outline: none;
`;

const TitleBlock = styled.h3`
  color: #000;
  font-family: "Montserrat";
  font-size: ${({ $FontSize }) => ($FontSize ? "16px" : "19px")};
  font-weight: ${({ $FontWeight }) => ($FontWeight ? "400" : "500")};
  line-height: ${({ $LineHeight }) => ($LineHeight ? "45px" : "27px")};
  padding-left: ${({ $Padding }) => ($Padding ? "45px" : "0px")};
  margin: ${({ $Margin }) => ($Margin ? "0px" : "none")};
`;

const ButtonAdd = styled.button`
  font-family: "Montserrat";
  width: ${({ $ButtonAddW }) => ($ButtonAddW ? "400px" : "274px")};
  flex-shrink: 0;
  border-radius: 4px;
  border: none;
  background: #fff;
  height: 42px;
  cursor: pointer;
  &:hover {
    background: #c8d5f6;
    color: #fff;
    border-style: none;
    transition: 0.5s;
  }
`;

const FormBlock = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 2px;
  width: 100%;
`;

const FormInput = styled.input`
  height: 45px;
  border-radius: 5px;
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  padding: 0 10px;
`;

const SubjectSelect = styled.select`
  font-family: "Montserrat";
  width: 555px;
  height: 45px;
  border-radius: 5px;
  background: #ffffff;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Notification = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px 20px;
  border-radius: 5px;
  color: #fff;
  font-family: "Montserrat";
  font-size: 14px;
  background-color: ${({ $isSuccess }) => ($isSuccess ? "#28a745" : "#dc3545")};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "20px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 1000;
`;

const LaboratoryAdd = () => {
  const [labTitle, setLabTitle] = useState("");
  const [labDescription, setLabDescription] = useState("");
  const [formula, setFormula] = useState("");
  const [inputVariables, setInputVariables] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [tests, setTests] = useState([]);
  const [newTest, setNewTest] = useState({ inp: "", out: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSubjects()
      .then((res) => setSubjects(res.data))
      .catch((error) => {
        console.error("Ошибка при загрузке предметов:", error);
        setResponseMessage("Ошибка при загрузке предметов");
        setIsSuccess(false);
      });
  }, []);

  useEffect(() => {
    if (responseMessage) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
        setResponseMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  const handleNewTestChange = (field, value) => {
    setNewTest((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddTest = () => {
    if (!newTest.inp.trim() || !newTest.out.trim()) return;
    setTests((prev) => [...prev, { id: prev.length + 1, ...newTest }]);
    setNewTest({ inp: "", out: "" });
  };

  const handleRemoveTest = (index) => {
    setTests(tests.filter((_, i) => i !== index));
  };

  const sendDataToServer = async (data) => {
    createLab(data)
      .then(() => {
        setResponseMessage("Лабораторная работа успешно добавлена!");
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error("Ошибка при отправке запроса:", error);
        setResponseMessage("Ошибка при добавлении лабораторной работы");
        setIsSuccess(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !labTitle.trim() ||
      !labDescription.trim() ||
      !formula.trim() ||
      !inputVariables.trim() ||
      !subjectId ||
      tests.length === 0
    ) {
      setResponseMessage("Заполните все поля!");
      setIsSuccess(false);
      return;
    }

    const newData = {
      task: {
        id: 1,
        name: labTitle,
        description: labDescription,
        teacher_formula: formula,
        input_variables: inputVariables,
        subject_id: parseInt(subjectId),
        test_cases: tests.map((test, index) => ({
          id: index + 1,
          inp: test.inp,
          out: test.out,
        })),
      },
    };

    sendDataToServer(newData);
  };

  return (
    <>
      <Section onSubmit={handleSubmit}>
        <UlList>
          <List>
            <NameLabInput
              type="text"
              placeholder="Введите название лабораторной работы"
              onChange={(e) => setLabTitle(e.target.value)}
              value={labTitle}
            />
          </List>

          <List>
            <div className="editing__block-Two">
              <TitleBlock>Формула преподавателя:</TitleBlock>
              <input
                className="editing__block-input"
                type="text"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
                placeholder="Введите формулу"
              />
            </div>
          </List>

          <List>
            <div className="editing__block-Two">
              <TitleBlock>Входные переменные:</TitleBlock>
              <input
                className="editing__block-input"
                type="text"
                value={inputVariables}
                onChange={(e) => setInputVariables(e.target.value)}
                placeholder="Введите переменные через запятую"
              />
            </div>
          </List>

          <List>
            <div className="editing__block-Two">
              <TitleBlock>Формат ввода данных:</TitleBlock>
              <p className="editing__block-text">
                Вы можете пояснить, как будет происходить ввод данных
              </p>
              <input
                className="editing__block-input"
                type="text"
                onChange={(e) => setLabDescription(e.target.value)}
                placeholder="Введите текст"
                value={labDescription}
              />
            </div>
          </List>

          <List $Block style={{ height: "133px" }}>
            <div className="editing__block-Two">
              <TitleBlock>Выберите предмет:</TitleBlock>
              <SubjectSelect
                value={subjectId}
                onChange={(e) => setSubjectId(e.target.value)}
              >
                <option value="">Выберите предмет</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </SubjectSelect>
            </div>
          </List>

          <BigBlock $BigFon $BigHeight $BigWeight $GapForm>
            <div className="block__one">
              <TitleBlock $Padding $Margin>
                Список тестов:
              </TitleBlock>
              <UlMinBlock>
                {tests.map((test, index) => (
                  <MinBlock key={index}>
                    <TitleBlock $FontSize $FontWeight $Margin>
                      Тест {index + 1}
                    </TitleBlock>
                    <div className="editing__block-name">
                      <TitleBlock $FontSize $FontWeight $Margin>
                        Входные данные:
                      </TitleBlock>
                      <input
                        type="text"
                        className="some-input"
                        value={test.inp}
                        readOnly
                      />
                    </div>
                    <div className="editing__block-name">
                      <TitleBlock $FontSize $FontWeight $Margin>
                        Вывод:
                      </TitleBlock>
                      <input
                        type="text"
                        className="some-input"
                        value={test.out}
                        readOnly
                      />
                    </div>
                    <IoIosClose
                      className="icon"
                      onClick={() => handleRemoveTest(index)}
                    />
                  </MinBlock>
                ))}
              </UlMinBlock>
            </div>

            <div className="block__test">
              <TitleBlock>Добавить новый тест:</TitleBlock>
              <div className="editing__block-name">
                <TitleBlock $FontSize $FontWeight>
                  Входные данные:
                </TitleBlock>
                <input
                  type="text"
                  className="some-input"
                  value={newTest.inp}
                  onChange={(e) => handleNewTestChange("inp", e.target.value)}
                />
              </div>
              <div className="editing__block-name">
                <TitleBlock $FontSize $FontWeight>
                  Вывод:
                </TitleBlock>
                <input
                  type="text"
                  className="some-input"
                  value={newTest.out}
                  onChange={(e) => handleNewTestChange("out", e.target.value)}
                />
              </div>
              <ButtonAdd $ButtonAddW type="button" onClick={handleAddTest}>
                Добавить тест
              </ButtonAdd>
            </div>
          </BigBlock>
          <List style={{ width: "463px" }}>
            <div
              className="editing__block-Two"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                paddingTop: "20px",
                paddingBottom: "25px",
              }}
            >
              <TitleBlock>Количество попыток:</TitleBlock>
              <input
                className="editing__block-input"
                type="number"
                placeholder="Максимальное количество попыток"
                min="1"
                style={{ width: "396px" }}
              />
              <div
                className="editing__block-bth"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20px",
                  marginTop: "5px",
                }}
              >
                <ButtonAdd type="button" style={{ width: "200px" }}>
                  Сохранить
                </ButtonAdd>
                <ButtonAdd type="button" style={{ width: "200px" }}>
                  Удалить
                </ButtonAdd>
              </div>
            </div>
          </List>

          <div className="block__button">
            <button className="block__end" type="submit">
              <span className="block__end-link">
                Завершить редактирование и добавить лабораторную
              </span>
            </button>
          </div>
        </UlList>
      </Section>

      {showNotification && (
        <Notification $isSuccess={isSuccess} $visible={showNotification}>
          {responseMessage}
        </Notification>
      )}
    </>
  );
};

export default LaboratoryAdd;
