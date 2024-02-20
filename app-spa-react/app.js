import React from 'react';
import { createRoot } from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, React!</h1>
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
