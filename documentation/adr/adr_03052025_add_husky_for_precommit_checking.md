## Title
Implement Pre-Commit Checks using Husky

### Status
Accepted

### Context
The project currently lacks pre-commit checks, which can lead to deployment errors. The goal is to ensure that code is linted, tested, and built before each commit to prevent these issues.

### Decision
We will add Husky to the project to implement pre-commit checks. The checks will include linting, typechecking, testing, and building the code before each commit. We will use ESLint for JavaScript linting and configure the `pre-commit` hook to run the lint, test, and build scripts.

### Consequences
With this change, it will become easier to maintain code quality and prevent deployment errors. Developers will be notified of any issues before committing code, making it easier to catch and fix problems early. However, it may become more difficult to commit code quickly, as the pre-commit checks may take some time to run. Overall, the benefits of improved code quality and reduced deployment errors outweigh the potential drawbacks.