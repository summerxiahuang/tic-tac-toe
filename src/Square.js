import { memo } from 'react';

const Square = memo(({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
});

Square.displayName = 'Square';

export default Square;