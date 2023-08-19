import React from "react";
import { GlobalProvider } from "../../Context/GlobalContext";

const Spinner = () => {
    const { loading } = GlobalProvider();
    return (
        <>
            {loading && (
                <div className="w-100 position-block top-0 left-0 bg-light d-flex align-items-center justify-content-center" style={{zIndex:0}}>
                    <div className="spinner-grow" role="status" style={{ width: "3rem", height: "3rem" }}>
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
                )}
        </>
    );
};

export default Spinner;
