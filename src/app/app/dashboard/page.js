/* 
NOTAS:

1. Crear subcomponentes para evitar el uso del lado del cliente en el archivo princiapl
del directorio

*/

"use client"

import { useSession } from "next-auth/react"
import styles from "./dashboard.module.css"
import { Grid, Paper } from "@mui/material"

export default function Dashboard() {

    const { data } = useSession();
    console.log(styles)
    return (
        <Grid className={styles.container} container >
            <Grid className={styles.wallets} item xs>
asd
            </Grid>
            <Grid className={styles.filters} item xs>

            </Grid>
            <Grid className={styles.graphics} item xs>

            </Grid>
            <Grid className={styles.balances} item xs>

            </Grid>
        </Grid>
    )
}

/* 

EXPENSES

BILLS: GASTOS PREDEFINIDOS
INVERSIONES: 

INCOMES

            <div>
                <h1>Dashboard</h1>
                <div className="graficos">
                    <h3>Gráficos</h3>
                    <div>
                        <h4>Ingresos por periodo</h4>
                        <h5>Gráfico circular</h5>
                    </div>
                    <div>
                        <h4>Gastos por periodo</h4>
                        <h5>Gráfico circular</h5>
                    </div>
                </div>
                <div className="Billeteras">
                    <h3>Billeteras</h3>
                    <div>
                        <div>Ícono de billetera</div>
                        <div>Título de billetera</div>
                        <div>Detalle de billetera</div>
                        <div>Saldo de billetera</div>
                    </div>
                    <div>
                        <div>Botón añadir billetera</div>
                        <div>Botón conectar banco</div>
                    </div>
                </div>
                <div className="Vista General">
                    <div className="Filtros">
                        <div className="Topbar">
                            <h3>Vista General</h3>
                            <div className="DateFilter">
                                <h5>Filtro de fecha</h5>
                            </div>
                        </div>
                        <div className="contenedor-filtros">
                            <div className="secondary-topbar">
                                <h4>Filtros</h4>
                                <h4>Reestablecer filtros</h4>
                            </div>
                            <div className="filtros-botones">
                                <label htmlFor="billetera">Por billetera</label>
                                <select name="billetera">
                                    <option value="efectivo">En efectivo</option>
                                    <option value="bank1">Banco 1</option>
                                    <option value="bank2">Banco 2</option>
                                </select>
                                <label htmlFor="categoria">Por categoría</label>
                                <select name="categoria">
                                    <option value="todas las categorías">Todas las categorías</option>
                                    <option value="comidas">Comidas</option>
                                    <option value="ingresos">Ingresos</option>
                                    <option value="gastos">Gastos</option>
                                </select>
                                <label htmlFor="bynote">Por nota</label>
                                <input type="text" placeholder="Filtrar por palabra específica" name="bynote"></input>
                                <label htmlFor="byamount">Por cantidad</label>
                                <input type="text" placeholder="Filtrar por cantidad específica" name="byamount"></input>
                            </div>
                        </div>
                    </div>
                    <div className="Balances">
                        <h3>Balance total: <span className="totalBalance">+36.05USD</span></h3>
                        <h3>Cambio total del periodo: <span className="totalChangedInPeriod">+36.05USD</span></h3>
                        <h3>Gasto total del periodo: <span className="totalExpenseInPeriod">-2.40USD</span></h3>
                        <h3>Ingresos totales del periodo: <span className="totalBillsInPeriod">+38.45USD</span></h3>
                    </div>
                </div>
            </div>

*/