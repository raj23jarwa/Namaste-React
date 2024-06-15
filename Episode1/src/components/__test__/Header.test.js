import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../Header';
import UserContext from '../../utils/UserContext';
import "@testing-library/jest-dom";

// Create a mock store
const mockStore = configureStore([]);

// Mock the Redux store
const appStore = mockStore({
  cart: { items: [] }, // Provide any necessary initial state
});
const loggedInUser = 'Test User';

test('should have a login button in header', () => {
    // you can put this line here also but we have more test cases so we use it outside
    // const loggedInUser = 'Test User';

  render(
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );

  const loginButton = screen.getByRole('button', { name: 'login' });
  expect(loginButton).toBeInTheDocument();
});

test('should have cart items 0', () => { 

  render(
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );
  const cart = screen.getByText("🛒(0)");
  expect(cart).toBeInTheDocument();
 })


 test('should change login button to logout on click', () => { 
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <UserContext.Provider value={loggedInUser}>
           <Header/>
        </UserContext.Provider>

    </Provider>
    </BrowserRouter>
    )

    const loginBtn = screen.getByRole('button',{name:'login'})
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole('button',{name:'logout'})
    expect(logoutBtn).toBeInTheDocument()
  })