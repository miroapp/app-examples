# Welcome to Miro's contributing guide

Thank you for investing your time in contributing to Miro! Any contribution you make will be reviewed by our team.

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## New contributor guide

Within Miro's Github, you'll find many different projects you can contribute to. From our repository of [app examples](https://github.com/miroapp/app-examples), to our other open source projects, we invite and encourage you to add your contributions to further better Miro.

If you're new on contributing to open source projects, visit the links below to get started.

#### Workflows

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

#### Tooling

- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Install NodeJS](https://nodejs.org/en/download/)
- [Install Black](https://black.readthedocs.io/en/stable/)

### Issues

#### Create a new issue

If you spot a problem within a repository, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue.

Please make sure any added issues are

- Descriptive
- Thoughtful
- Organized

We recommend adding as many relevant links, minimal reproductions of the issue, and other materials that will help our team solve the issue fast.

#### Solve an issue

If you're interested in solving an issue in a repository, start by scanning through it's exisiting issues to find one that you're interested in working on. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

Most of the changes you will make in this repository will be added to the [examples](/examples/) folder. Here you'll different app examples located under their own directories. To add a new example, start by adding a new folder with all the necessary files to run your app.

> Don't forget to add a descriptive README file so others will know what to expect when looking at your example.
>
> Some important things to mention in your README might include:
>
> - Getting started
> - Folder strucutre
> - About the app
> - How to get in contact with you for support

**Before making changes, read the [tooling](#tooling) section to make sure you have the right tools installed.**

#### Make changes locally

1. Fork the repository.

- Using GitHub Desktop:

  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:

  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

- GitHub Codespaces:
  - [Fork, edit, and preview](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/creating-a-codespace) using [GitHub Codespaces](https://github.com/features/codespaces) without having to install and run the project locally.

2. Create a working branch and start with your changes!

### Commit your update

[Commit your changes](https://github.com/git-guides/git-commit) once you are happy with them. See [Atom's contributing guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages) to know how to use emoji for commit messages!

Once your changes are ready, don't forget to self-review your code to double check that your chagnes are ready to be added.

### Pull Request

When you're finished with the changes, [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request), also known as a PR.

- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
  Once you submit your PR, a Miro team member will review your proposal. We may ask questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://lab.github.com/githubtraining/managing-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations! The Miro team is happy to have you contribute.

Once your PR is merged, your contributions will be publicly visible on the relevant repository.

Now that you are part of the Miro community, make sure to join us in our [Discord](https://bit.ly/miro-developers) as well!

## Contributing to App Examples

<b>Please look at [README.template.md](https://github.com/miroapp/app-examples/blob/main/README.template.md)</b> for an example of
how your README should look in order to contribute to App Examples.

If you want to add an app into our [App Examples folder](https://github.com/miroapp/app-examples/tree/main/examples) please
<b>make sure the README it follows the same structure as our other app examples</b>. You can take a look at [Calendar app README](https://github.com/miroapp/app-examples/blob/main/examples/calendar/README.md) for example. In order for your app
example and PR to get approved, please make sure you have the following components in your README:

1. [App title section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#miro-calendar-app) with simple 1 line description of what you app example does.
2. 15-60 second [App Demo section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#-app-demo). The shorter the better.
3. [Table of contents section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#-table-of-contents)
4. [Included Features section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#%EF%B8%8F-included-features-), which details which Miro SDK or API methods are used in the example.
5. [Tools and Technologies section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#%EF%B8%8F-tools-and-technologies-), which details which any technologies you are using, i.e. Node.js, React.
6. [Prerequisistes section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#-prerequisites-), which details any dependencies or additional CLIs that may need to be installed before running the app.
7. [Run the app section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#%EF%B8%8F-run-the-app-locally-). This section should go over how to run the app locally. Please be as descriptive as possible to ensure the developer can install
   and configure your app easily, even if it is their first time using these tools and technologies.
8. [Folder Structure section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#%EF%B8%8F-folder-structure-). This section outlines what each file is for in the app so a developer can quickly
   understand the file layout of your app.
9. [Contributing section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#-contributing-). Here you
   can just link to [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).
10. [License section](https://github.com/miroapp/app-examples/tree/main/examples/calendar#-license-). This should
    indicate what license you want to use.
