import React from 'react';
import { useRoutes } from 'react-router-dom';
import { rootPath } from './routes/routes';

const App = () => {
    const route = useRoutes(rootPath);

    return <div>{route}</div>;
}

export default App;
