# Coding Assignment 1

Problem Statement:
You are tasked with building a React-based GitHub Explorer application that
interacts with the GitHub API to fetch and display user-related information.
The application should consist of multiple pages with specific functionalities.
Ensure adherence to the given requirements and notes.

API Endpoint:
GitHub Repository Data: https://api.github.com/users/<username>/repos

Entities and Key Details:
The data received from the API will contain the following keys:

javascript
Copy code

```{
id: <>,
name: <>,
html_url: <>,
description: <>,
created_at: <>,
open_issues: <>,
watchers: <>,
owner: {
id: <>,
avatar_url: <>,
html_url: <>,
type: <>,
site_admin: <>
// ...
}
// ...
}

```

Eg:
https://api.github.com/users/mralexgray/repos

Requirements:

- Initial Page:
  Display an initial page with an input box that accepts a GitHub username.
  Include a submit/search button.

- On Submit:
  Upon submission, fetch and display the list of repositories for the entered
  GitHub username using the provided API.
  Display useful user information above the repository list.
  Do not call the GitHub API again for already-fetched information.

- Repository Details Page:
  Clicking on any repository should navigate to a page displaying details about that repository.
  Use the information fetched earlier and do not make additional API calls.

- Followers Page:
  On the repository list page, add a button/link to navigate to a page showing
  followers of the current user.
  Use a simple design; beautification is not a priority.
  Do not use CSS/UI frameworks.

- Follower Repository List:
  Clicking on any follower should display the repository list page of that follower.
  Do not make unnecessary API calls; use the existing data.

- Navigation:
  Ensure there is always a way to go back to the repository list page with the input box.
  No need to manage browser history; all pages can share the same URL.

- Important Notes:
  Use only React hooks for building the app.
  You may use Redux or manage state in React; structure your code appropriately.
  Utilize owner.avatar_url for any images.
  Adhere to the specified design images in terms of layout and presentation.
  Do not use any CSS/UI frameworks.
