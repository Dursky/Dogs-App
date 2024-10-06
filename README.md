# Dogs-App

Dogs-App is a web application built with React that allows users to browse, add, edit, and delete information about dogs. The application uses Redux for state management, React Query for handling API requests, and Tailwind CSS for styling.

## Features

- View a list of dogs
- Add new dogs
- Edit dog information
- Remove dogs from the list
- Display a random dog fact

## Technologies

- React
- TypeScript
- Redux Toolkit
- React Query
- Tailwind CSS
- Jest (for testing)

## Installation

To install the application, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/Dursky/Dogs-App.git
   cd Dogs-App
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Environment Variables

This project uses environment variables for mock user authentication. Create a `.env` file in the root directory of the project and add the following variables:

```
REACT_APP_MOCK_USER_USERNAME=your_username
REACT_APP_MOCK_USER_PASSWORD=your_password
```

Replace `your_username` and `your_password` with the desired mock user credentials.

## Authentication

The app includes a mock authentication system. Use the credentials specified in the `.env` file to log in. If the credentials are incorrect or the user doesn't exist, an error will be thrown.

## Running the Application

To run the application in development mode:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Testing

To run the tests:

```
npm test
```

## Building the Application

To build the application for production:

```
npm run build
```

The built files will be available in the `build/` directory.

## Project Structure

- `src/components/` - React components
- `src/store/` - Redux configuration and slices
- `src/services/` - API services
- `src/types/` - TypeScript type definitions
- `src/utils/` - Helper functions
