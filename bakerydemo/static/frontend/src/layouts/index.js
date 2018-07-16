import React from 'react';

export default ({ children }) => (
    <div style={{ margin: `0 auto`, maxWidth: 1400, padding: `0 1rem` }}>
        {children()}
    </div>
);
