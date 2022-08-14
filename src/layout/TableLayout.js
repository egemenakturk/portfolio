
const Row = ({ className = '', style = {}, children }) => {
    return (
        <div className={`mapa-row${className ? ` ${className}` : ''}`} style={style}>
            {children}
        </div>
    );
};

const Col = ({ className = '', style = {}, children }) => {
    return (
        <div className={`mapa-col${className ? ` ${className}` : ''}`} style={style}>
            {children}
        </div>
    );
};

const LargeCol = ({ className = '', children }) => {
    return (
        <div className={`mapa-large-col${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
};

export { Row, Col, LargeCol };