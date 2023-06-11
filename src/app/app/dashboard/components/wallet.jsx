import { Paper, Grid } from "@mui/material";
import React from "react";

export default function WalletComponent(props) {
    return (
    <Paper className={props.styles.wallet}>
      <Grid className={props.styles.walletBox}> {/* | ICON | DATA */}
        <Grid className={props.styles.walletIcon}> {/* ICON */}
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path
              fill="#99704A"
              fillRule="evenodd"
              d="M0 19V4h20.998A.996.996 0 0 1 22 5v14a1 1 0 0 1-1.002 1H1.002A.996.996 0 0 1 0 19zM18 .998V3H0C0 1.5 1.3-.003 3 0h13.998A.998.998 0 0 1 18 .999zM18 10c-1.101 0-2 .897-2 2 0 1.104.899 2 2 2 1.1 0 2-.896 2-2 0-1.103-.9-2-2-2zm0 3a1 1 0 1 1-.001-2.001A1 1 0 0 1 18 13z"
            ></path>
          </svg>
        </Grid>
        <Grid className={props.styles.walletData}>
            <span className={props.styles.walletTitle}>Billetera de Efectivo</span>
            <span className={props.styles.walletDesc}>Dinero en efectivo</span>
            <span className={props.styles.walletBalance}>0.00 ARS</span>
        </Grid>
      </Grid>
    </Paper>
  );
}