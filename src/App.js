import React from 'react';
import Cart from './containers/Cart';
import BookList from './containers/BookList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React Demo App</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <BookList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    &copy; 2017 React Demo App
                </small>
            </footer>
        </div>
    );
}

export default App;
