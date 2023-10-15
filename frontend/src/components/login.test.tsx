import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import Login from './login';

// Mock the next-auth/react module
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

describe('Login Component', () => {
  it('renders the login button when not authenticated', () => {
    // Mock an unauthenticated session
    require('next-auth/react').useSession.mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(<Login />);
    
    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
  });

  it('renders the signed-in content when authenticated', () => {
    // Mock an authenticated session
    require('next-auth/react').useSession.mockReturnValue({
      data: {
        user: {
          email: 'cvto1021@gmail.com',
        },
      },
      status: 'authenticated',
    });

    render(<Login />);
    
    const signedInMessage = screen.getByText('Signed in as cvto1021@gmail.com');
    const logoutButton = screen.getByText('Logout');
    
    expect(signedInMessage).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('calls signIn when clicking the Sign In button', () => {
    // Mock an unauthenticated session
    require('next-auth/react').useSession.mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(<Login />);
    
    const signInButton = screen.getByText('Sign In');
    act(() => {
      fireEvent.click(signInButton);
    });

    expect(require('next-auth/react').signIn).toHaveBeenCalled();
  });

  it('calls signOut when clicking the Logout button', () => {
    // Mock an authenticated session
    require('next-auth/react').useSession.mockReturnValue({
      data: {
        user: {
          email: 'cvto1021@gmail.com',
        },
      },
      status: 'authenticated',
    });

    render(<Login />);
    
    const logoutButton = screen.getByText('Logout');
    act(() => {
      fireEvent.click(logoutButton);
    });

    expect(require('next-auth/react').signOut).toHaveBeenCalled();
  });
});
