/* 
NOTAS:

1. Crear subcomponentes para evitar el uso del lado del cliente en el archivo princiapl
del directorio
2. 

*/

"use client";

import { useSession } from "next-auth/react";
import styles from "./dashboard.module.css";
import { Grid, Typography } from "@mui/material";
import { Wallet } from "./components/index";

export default function DashboardPage(theme) {
  return (
    <Grid className={styles.container} container>
      <Grid className={styles.wallets} item xs>
        <Typography className={styles.categoryTitle} component="h2">
          Billeteras
        </Typography>
        <Grid className={styles.walletsContainer} item xs>
          <Wallet styles={styles} />
          <Grid className={styles.addBtnsContainer}>
            <Grid className={styles.addBtn}>
              <Typography component="h4">Añadir nueva Billetera</Typography>
            </Grid>
            <Grid className={styles.addBtn}>
              <Typography component="h4">Añadir Cuenta Bancaria</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography className={styles.categoryTitle} component="h2">
        Vista General
      </Typography>
      <Grid className={styles.filters} item xs>
        <span>asdsa</span>
      </Grid>
      <Grid className={styles.graphics} item xs></Grid>
      <Grid className={styles.balances} item xs></Grid>
    </Grid>
  );
}