This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Developer Set Up Guide

1. **Fork the Repository**: Click the "Fork" button on the top right of this repository's page. This will create a copy of the repository in your GitHub account.

2. **Clone Your Fork**: On your forked repository, click the "Code" button and copy the URL. Open your terminal or command prompt, navigate to the directory where you want to work on the project, and run the following command:

    ```bash
    git clone <your-fork-url>
    ```

3. **Create a Branch**: Before making any changes, create a new branch for your work and name it your name.It’s ALSO important to use a naming convention that’s clear and informative such that it indicates the type of branch and a short description of what the branch is intented to do.Additionally, if the branch is related to a specific issue, it’s a good practice to include the issue number in the branch name. Here’s an example of what a branch name might look like:

    ```bash
    John-Doe/feature/add-login-page-123
    ```

We recommend you use [Better-branch](https://github.com/iamthen0ise/better-branch) to help you come up with better branch names.

4. **Run the development server**: Before starting your tasks, run the project first to ensure everything is working and also it will help you see the changes made as you do your tasks. To run the development server, use either of the following commands:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. **Do your tasks**: Now you can do your tasks in your branch. 
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


6. **Run Tests**:Before committing changes, run your test suite to ensure that new code doesn’t break existing functionality.Make sure that the necessary dependencies for testing and linting are installed in your project. This typically includes testing frameworks (e.g., Jest for JavaScript) and linting tools.Also, remember to set up scripts in your package.json or relevant configuration file to run tests and linting.For example:

    ```bash
    "scripts": {
        "test": "jest",
        "lint": "next lint"
        }
    ```
Once set up, you can do the test.Use the command:

    ```bash
    npm test
    ```
This command will execute your test suite based on the configurations you’ve set up.


7. **Run Linter**:
Similarly, run your linter to check code formatting and catch potential errors or style violations. Use the command:

    ```bash
    npm run lint
    ```
This command will run lint on the specified files or directories.If the linter reports any issues, address them before committing. Many linters have automatic fix options (--fix flag for ESLint) that can automatically correct certain issues.

8. **Commit Your Changes**: After making your changes, commit them with a clear and concise commit message. Below is the syntax to use:

    ```bash
    git commit -m "A clear and concise commit message"
    ```
Below is an example of a clear an concise commit message:

    ```bash
    git commit -m "Add login form on the home page"
    ```
Writing a longer commit message that explicitly states the purpose of the commit would be a plus since it helps others understand the changes without having to dig deeper into the code.We recommend you use [Better Commits](https://github.com/Everduin94/better-commits) to write better commit messages.

9. **Push to Your Fork**: Push your changes to your forked repository

10. **Contribute to the Project**: Open a pull request to contribute your changes to the project

## Libraries used
1. [Tailwind css](https://tailwindcss.com/)
2. [Radix UI](https://www.radix-ui.com/)
3. [Next Themes](https://github.com/pacocoursey/next-themes)
4. [CVA (Class Variance Authority)](https://cva.style/docs)
5. [Zod](https://zod.dev/)
6. [React Hook Forms](https://react-hook-form.com/)
7. [Jtestjs](https://jestjs.io/)
