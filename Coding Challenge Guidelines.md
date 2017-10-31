Coding Challenge Guidelines
===========================

Please organize, design, test, document and deploy your code as if it were going
into production, then send us a link to the hosted repository (e.g. Github,
Bitbucket...).


Functional spec
---------------

Prototype the following project:

#### GitHub Followers

Create a service that allows for a user to search for a GitHub username. On a
successful search return, display the user's GitHub handle, follower count, and
a list of the user's followers (just the avatar is fine). Since some users (e.g.
`gaearon`, `holman`, etc.) have many thousands of followers, GitHub only returns
a portion of the followers with each request. Create a "load more" button that,
when clicked, fetches the next payload of followers. This button should persist
until there are no more pages of followers to fetch.

Information on the GitHub API is available here: [GitHub API](https://developer.github.com/v3/)

The UX/UI is totally up to you. If you like, get creative and add additional
features a user might find useful!


Technical spec
--------------

We believe there is no one-size-fits-all technology. Good engineering is about
using the right tool for the right job, and constantly learning about them.

Therefore, feel free to mention in your `README` how much experience you have
with the technical choices you make, we will take note of that when reviewing
your challenge.

The front-end should ideally be a single page app with a single `index.html`
linking to external JS/CSS/etc. You may take this opportunity to demonstrate
your CSS3 or HTML5 knowledge.

You are also free to use any web framework. If you choose to use a framework
that results in boilerplate code in the repository, please detail in your
README which code was written by you (as opposed to generated code). If the
framework you choose is rather large or niche, please explain in a short
paragraph how the framework works, why you chose it, how things are wired
together, etc. If possible, please remove any unused boilerplate generated
before submitting your project for review.


Host it!
--------

When you’re done, host it somewhere (e.g. on Amazon EC2, Heroku, Google AppEngine, etc.).

How will we review?
-------------------

[Guidelines can be found here](readme.md)
