import Link from "next/link";
import React from "react";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const {data} = useSession();
  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
      <div className="container">

        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          {data?.user !== undefined ? (
            <>
              <span style={{ marginRight: "15px" }}>
                <Image
                  src={data?.user?.img}
                  height="25"
                  width="25"
                  alt={data?.user?.name}
                />
                
                Hola, {data?.user?.name}
              </span>

              <span style={{ cursor: "pointer" }} onClick={() => signOut()}>
                {" "}
                Cerrar sesión
              </span>
            </>
          ) : (
            <span style={{ marginRight: "15px" }}>
              {" "}
              <Link className="nav-link" href="/login">
                Iniciar sesión
              </Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;