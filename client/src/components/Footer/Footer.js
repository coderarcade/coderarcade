import React from 'react';

var style = {
    background: 'linear-gradient(45deg, black, #F41B25, black)',
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20 0 10 0",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%",
    color: "white",
    zIndex: "3"
}

var phantom = {
    display: 'block',
    padding: '20 0 20 0',
    height: '60px',
    width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                {children}
            </div>
        </div>
    )
}

export default Footer