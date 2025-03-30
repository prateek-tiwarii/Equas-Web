import React from 'react';

const MainContent = ({ children }) => {
    return (
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
            {children}
        </main>
    );
};

export default MainContent;
