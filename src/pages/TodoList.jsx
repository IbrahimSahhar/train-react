import React, { memo, useCallback, useDeferredValue, useState } from "react";
import ListItem from "../components/ListItem";
import { ContainerStyled } from "../Global/Components";
import useApi from "../Hooks/useApi";

const TodoList = () => {
  const { get, getData, loading } = useApi();
  const [query, setQuery] = useState(0);
  const myQuery = useDeferredValue(query);
  // useEffect(() => {
  //   get(`https://jsonplaceholder.typicode.com/todos/${myQuery}`);
  // }, [myQuery]);

  const search = useCallback(
    (e) => {
      e.preventDefault();
      get(`https://jsonplaceholder.typicode.com/todos/${myQuery}`);
    },
    [myQuery]
  );
  return (
    <ContainerStyled style={{ padding: "1.25rem 1.25rem" }}>
      <form
        onSubmit={(e) => {
          search(e);
        }}
      >
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <button type="submit">Submit</button>
      </form>
      {loading ? "loading" : <ListItem key={getData.id} todo={getData} />}
    </ContainerStyled>
  );
};

export default memo(TodoList);
