/* 

NOTAS:

Mejorar el middleware de forma que sea más seguro el uso de sesiones.

*/

/* GENERAL IMPORTS */

export { default } from "next-auth/middleware";

/* DEFAULT CONFIG */

export const config = { matcher: ["/app/dashboard"] };