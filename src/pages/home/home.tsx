import { useState, useContext } from 'react';
import { observer } from 'mobx-react'
import { Grid, Button, TextField } from "@material-ui/core";

import { RootStoreContext } from '../../rootStore/rootStore';

const HomePage = observer(() => {
  const { homeStore } = useContext(RootStoreContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    homeStore.setUserLoginData({login, password})
  }


  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <TextField
        id="login"
        label="Логин"
        value={login}
        variant="outlined"
        required
        autoComplete="off"
        onChange={(e) => setLogin(e.target.value)}
      />
      <TextField
        type="password"
        id="password"
        value={password}
        label="Пароль"
        variant="outlined"
        required
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Войти
      </Button>
    </Grid>
  );
});

export default HomePage;
