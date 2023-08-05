import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { ContainerStyled } from "../Global/Components";
import { styled } from "styled-components";
import useApi from "../Hooks/useApi";

const TodoList = () => {
  const [theme1, setTheme] = useState("Red");
  const { get, getData, loading } = useApi();
  useEffect(() => {
    get("https://jsonplaceholder.typicode.com/todos");
  }, [get]);

  const Page = styled.div`
    background-color: ${(props) => props.theme[theme1].pallet.page};
    color: ${(props) => props.theme[theme1].pallet.main};
  `;

  const ListSyled = styled.li`
    width: 1rem;
    height: 1rem;
    border-radius: 0.625rem;
    cursor: pointer;
    margin-right: 1.25rem;
    background-color: ${(props) => colors[props.id]};
  `;

  const handelChangeTheme = (e) => {
    setTheme(colors[e.target.id]);
  };

  const colors = ["Red", "Green", "Yellow", "Blue", "Orangered"];

  return (
    <Page>
      <ContainerStyled style={{ padding: "1.25rem 1.25rem" }}>
        <ul style={{ display: "flex", justifyContent: "end" }}>
          {colors.map((color, index) => {
            return (
              <ListSyled
                id={index}
                onClick={(e) => handelChangeTheme(e)}
              ></ListSyled>
            );
          })}
        </ul>
        {loading
          ? "loading"
          : getData?.map((todo) => {
              return <ListItem key={todo.id} todo={todo} />;
            })}
      </ContainerStyled>
    </Page>
  );
};

export default TodoList;
