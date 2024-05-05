# React Project Starter - Qiwa

**Important Note** for users of mock-server (npm run start:mock) [Mock server prerequisites]()

**Imporant Note** using `npm run cleanup-examples` is designed ONLY for new projects, please don't use it on your existing projects

## Starter includes

- [qiwa-design-system](https://gitlab.qiwa.tech/takamol/qiwa/qiwa-design-system/qiwa-design-system) provided by Flying Bisons. You can find documentation [here](https://qiwa-design-system.qiwa.tech/).
- [react-qiwa-core](https://gitlab.qiwa.tech/takamol/qiwa/infrastructure/react-qiwa-core) provided by TSH. `react-qiwa-core` provides all core hooks, providers and components for common functionality.

## Documentation

We've created a couple of files on Confluence which represents basic solutions and rules used in our new React Starter. Following information included in these files, you'll be able to easily setup a new project. You can treat this place as a source of any piece of information related to the starter. If you have any questions, please try to find them [here](https://employeesgate.atlassian.net/wiki/spaces/QFA/pages/4209705040/Starter+Library) first.

## Project setup

It's recommended to follow [this](https://employeesgate.atlassian.net/wiki/spaces/QFA/pages/4263215146/How+to+start) guide in order to setup a new project.

## Commits format

We use a tool called `commitlint` to check if commit messages meet the conventional commit format. It requires a following pattern of commit message: `type(scope?): subject [jira-ticket-number] #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")`. There is more information about this tool (including real world examples) presented [here](https://github.com/conventional-changelog/commitlint/#what-is-commitlint).

## Non trivial solutions used in the project

[Non trivial solutions used in the project](./SOLUTIONS.MD)

## How to resolve "Your connection is not private" - warn in browser

Sometimes in Chrome browser you can find the error with code: `NET::ERR_CERT_AUTHORITY_INVALID`
You can omit this by typing `thisiunsafe` while having focused this the url of devserver (which you defined in your scripts/start.ts).

## Running mock-server

In order to run the mock-server there is a need for the config.json file inside of `public` folder. This file will be automatically generated when running the command: `npm run start:mock`
Next you can open your mock server with url: `http://localhost:8080/`

## Analyzing the bundle size

To help analyze the bundle size, there's a `webpack-bundle-analyzer` installed and configured in the `webpack.config`.
To check the report locally, simply remove the `analyzerMode: 'disabled'` option in the configuration of the `BundleAnalyzerPlugin` and run `npm run build`.
The bundle report should automatically open in your browser.

Leave the `analyzerMode: 'disabled' option in the repo not to open the report on pipelines ;)

## Cleanup of example implementations
**New projects only**

Currently starter allow to cleanup the example files, that are meant to show developers what feature may be implemented.
Once you decide to start implementing your own logic, you have possibility to cleanup the examples:
* run `npm run cleanup-examples` this is fully automated one-time operation
* after successful cleanup it is recommended to run `npm run lint`
* you are good to go, to implement your logic, the project is cleaned-up for you