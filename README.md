# Project Documentation

## Commands

- `npm start` - Run local development server on port 3000
- `npm run build` - Build the app for production (used in deployment pipeline)
- `npm run test` - Run tests (used in deployment pipeline)

## Refactor Overview

In this refactor, the old code has been moved to the `_deprecated` folder for reference. A basic React app has been created using the `create-react-app` CLI tool, and a new folder called `/libs` has been added. This is where different types of React components and hooks will be stored.

## Running the Project

To view the project, run `npm start` in the terminal. This will start the development server and the project will be available at [http://localhost:3000](http://localhost:3000).

## Packages Used

### Material-UI

- **Website**: [Material-UI](https://mui.com/)
- **Description**: A popular component library for React. It provides base-level components for HTML tags (e.g., `<Typography>` instead of `<p>`, `<Box>` instead of `<div>`). Material-UI helps to sync design components and allows for the implementation of a theme system to style all CSS in one place, making everything clean and organized. Note: Theme system not applied in this PR but can be in a future PR.

### React Router

- **Website**: [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- **Description**: Used to organize routes in single-page applications (SPAs). It enables routing URLs, allowing users to bookmark and save parts of the site while enjoying the fluid rendering of React.

## Folder Structure

### Components

- **Purpose**: Contains reusable components with added documentation for props.
- **Usage**: Components are used to build parts of the site and should be called in the `/pages` section. UI components should focus on styles, with all logic handled in hooks.

### Pages

- **Purpose**: Contains the main source of truth for each route.
- **Usage**: Pages handle the logic from hooks and pass it to components, keeping things organized for more complex integrations.

### Routes

- **Purpose**: Manages application routes.
- **Usage**:
  - `AppRouter`: Organizes top-level paths.
  - Individual route files (e.g., `HomeRoutes`, `AboutRoutes`, `MusicRoutes`): Manage specific routes.
  - Provides a boilerplate for organizing routes and sharing components like `LayoutWrapper` with dynamic values.

### Hooks

- **Purpose**: Manages state and logic using `useContext`.
- **Usage**: Hooks improve page performance at scale and keep messy logic code separate from clean styled code. They enforce best practices and provide a place to build complex logic as needed.

### Design System

- **Purpose**: Contains styled components created using `{ styled }` from Material-UI.
- **Usage**: This folder houses all custom styled components, ensuring a consistent design language across the application.

### Template

- **Purpose**: Further abstraction of components and layouts.
- **Usage**: This folder is used to store template components that can be reused across different parts of the application, facilitating easier maintenance and scalability.

## Atomic Design

### Overview

Atomic Design is a methodology for creating design systems. It divides the design process into five distinct levels:

1. **Atoms**: Basic building blocks (e.g., buttons, inputs).
2. **Molecules**: Groups of atoms bonded together (e.g., form fields with labels).
3. **Organisms**: Complex components composed of molecules and atoms (e.g., navigation bars).
4. **Templates**: Page-level objects that place components into a layout.
5. **Pages**: Specific instances of templates, rendering the final design.

### Pros

- **Consistency**: Ensures a uniform look and feel across the application.
- **Reusability**: Promotes the reuse of components, reducing redundancy.
- **Scalability**: Facilitates easier scaling and updating of the design system.
- **Maintainability**: Simplifies maintenance by isolating changes to specific levels.

### Cons

- **Complexity**: Can be complex to implement initially, requiring thorough planning.
- **Overhead**: May introduce additional overhead in terms of documentation and component management.
- **Learning Curve**: Team members may require time to understand and adopt the methodology fully.

## Circular Dependency and File Dependencies

### Circular Dependency

Circular dependency occurs when two or more modules depend on each other directly or indirectly, creating a loop. This can lead to issues such as infinite loops, increased complexity, and difficulties in debugging and maintaining the code.

### File Dependencies

- **Design System**:

  - Calls from: No first-party library.
  - Usage: Custom styled components.

- **Components**:

  - Calls from: Design system or third-party libraries.
  - Usage: Building reusable UI components.

- **Templates**:

  - Calls from: Components or design system.
  - Usage: Reusable layout components for various parts of the application.

- **Pages**:

  - Calls from: Templates, components, or design system for UI.
  - Calls from: Hooks for logic.
  - Usage: Main source of truth for each route, handling logic and passing it to components.

- **Routes**:
  - Calls from: Pages for UI.
  - Calls from: Hooks for logic.
  - Usage: Organizing application routes and sharing components across different paths.

## Summary

This refactor has abstracted the front-end app, meaning each piece of code has a designated place. This design ensures that:

- Code is only written once.
- Components like headers and footers can be reused across routes.
- Changes only need to be made in one place, affecting all relevant parts of the application, improving reliability.

This boilerplate sets up the site to be completed and styled quickly, and provides room for future enhancements such as:

- Admin pages with authentication systems.
- Server/database connections.
- First-party integrations and tools in the API layer.
- Analytical data collection.

Building the site this way transforms it from a simple HTML page into a robust application with unlimited possibilities.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject` (not recommended)

**Note: this is a one-way operation. Once you `eject`, you can't go back!** If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
