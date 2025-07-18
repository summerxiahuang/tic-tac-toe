import { memo } from 'react';

const Square = memo(({ value, onClick }) => {
    return (
        <button 
            className="square" 
            onClick={onClick}
            data-value={value}
        >
            {value}
        </button>
    );
});

Square.displayName = 'Square';

export default Square;