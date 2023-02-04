import App from './App';
import React from 'react';
import { store } from './store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ListContextProvider } from './context/listContext/ListContext';
import { UserContextProvider } from './context/userContext/UserContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthContextProvider>
                <UserContextProvider>
                    <ListContextProvider>
                        <MovieContextProvider>
                            <App />
                        </MovieContextProvider>
                    </ListContextProvider>
                </UserContextProvider>
            </AuthContextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);