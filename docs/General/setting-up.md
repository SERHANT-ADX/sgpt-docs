# Setting up the Project

### Step 1: Clone the Repository

Clone the Git repository of the project using the repository URL:

```bash
git clone https://github.com/akcserhant/serhant-gpt.git
```

### Step 2: Install Dependencies

Install all the necessary tools, such as Node.js and Yarn, and verify their installation by running these commands:

```bash
node -v
npm -v
yarn -v
```

Next, navigate to the root directory of the project using the terminal.

Run the following command to install project dependencies:

```bash
yarn install
```

### Step 3: Add .env File

Create an `.env` file in the root of the project folder. This file should contain all the necessary configuration data required for the application to work correctly.

### Step 4: Starting the Development Server

Start the development server with the following command:

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000) in your web browser.

### Other Useful Commands

- `yarn test`: Runs the test suite using Jest and React Testing Library.
- `yarn run build`: Builds the production-ready version of the application.
- `yarn run lint`: Lints the codebase using ESLint to identify and enforce coding standards.
- `yarn run lint:fix`: Automatically fixes ESLint issues when possible.
- `yarn run styleguide`: Launches the React Styleguidist server to generate component documentation.
- `yarn run styleguide:build`: Builds the documentation for deployment.

### Linting and Formatting

The project uses ESLint and Prettier for code linting and formatting. It is essential to run `npm run lint` regularly to ensure adherence to coding standards and maintain consistent code formatting.

### Pre-Commit Hooks

Husky is configured to execute `lint-staged` before committing changes. This ensures that only linted and formatted code is committed to the repository. So, make sure to follow the linting and formatting guidelines before making a commit.

### Deployment

For deployment, the project is ready to be deployed using the build command (`yarn run build`). The generated build files can then be deployed to a web server or hosting service.
