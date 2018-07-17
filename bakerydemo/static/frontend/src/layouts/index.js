import React from 'react';
import Header from './header';

export default ({ children }) => (
    <div style={{ margin: `0 auto`, maxWidth: 1400, padding: `0 1rem` }}>
        <Header />
        {children()}
    </div>
);
