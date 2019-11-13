---
templateKey: blog-post
title: How to Setup a GraphQL Client with Authentication in React with Apollo
date: 2019-08-17T15:04:10.000Z
description: >-
  Walkthrough of setting up a create-react-app boilerplate with Apollo to
  connect with a GraphQL endpoint with authentication.
author: R. Anthony Porter
tags:
  - react
  - graphql
  - apollo
  - authorization
  - token
  - api
  - database
  - javascript
  - frontend
  - client-side
---
I just recently started getting into GraphQL and noticed just about every tutorial starts off with setting up a GraphQL API in express or something. I have absolutely no interest in having a backend for most projects.

After a bunch of digging around, I was surprised to _not_ find many tutorials that talk about just setting up a client and poking an existing API. Further, I didn't find much on authenticating with a GraphQL API.

### So here we go...

## Setting up A Typescript React Project

First things first, let's get a project setup. If you're finding yourself rolling your eyes at mention of TS, I feel you, but that's a topic for another post.
Let's create our project folder:

`npx create-react-app graphql-github-ts --typescript`

Jump into that folder and let's add dependencies for Apollo:

`npm install apollo-boost react-apollo graphql`

And now we'll spin this thing up:

`npm start`

And you should have an image of the standard spinning React logo now open in your browser.

## Setting Up Your Apollo Client

There are a few things that need to happen to get the Apollo client configured and they all need to happen in our `index.js` file:

#### 1. Import the required dependencies.

```javascript
import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
```

#### 2. Create the `httpLink` to the GraphQL API, including an `authorization` header. (we will use the Github API here)

Including the `headers` option here is the primary difference from simply accessing a local API, as you might find in countless other GraphQL tutorials. _This is the reason you're reading this post._

```javascript
// PERSONAL_ACCESS_TOKEN should be your actual Github token
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: { authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}` }
})
```

#### 3. Instantiate `ApolloClient` by passing in the `httpLink` and `InMemoryCache`.

```javascript
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
```

#### 4. Wrap our `App` with the `ApolloProvider`.

```javascript
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)
```

### Accessing The GraphQL Data

So now, our app has authorized access to the Github GraphQL API. Let's see how we can pull some data in `App.tsx`:

First, we need a couple of Apollo dependencies:

```javascript
import { graphql } from "react-apollo"
import { gql } from "apollo-boost"
```

Next, we'll add a basic query and wrap our `App` export with the `graphql` HOC (this is _after_ the end of the `App` component:

```javascript
const octoQuery = gql`
  {
    viewer {
      login
      name
      repositories(first: 50) {
        edges {
          node {
            nameWithOwner
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`

export default graphql(octoQuery)(App)
```

You may get a Typescript error here regarding the `data` prop. we just need to type our props like this:

```javascript
class App extends React.Component<{ data?: any }, {}> {
```

Now, our `App` component will receive a `data` prop containing the results of our query from the GraphQL API. 

Let's do something with in our `render` method. Delete the entire `header` element and replace it with this `section`:

```javascript
<section>
  <ul>
    {this.props.data.loading ? (
      <li key="loading">Loading</li>
    ) : (
      this.props.data.viewer.repositories.edges.map(
        ({ node: repo }: any) => (
          <li key={repo.nameWithOwner}>{repo.nameWithOwner}</li>
        )
      )
    )}
  </ul>
</section>
```

This should get you a rather ugly list of your repositiories displayed in your browser. _(I never said this post was about making stuff pretty)_

## What Now?

If you only needed to know how to include authentication when connection to a GraphQL API, go make whatever killer app you were thinking about.

If you're new to GraphQL and/or want a more comprehensive tutorial on using it, check out the [How To GraphQL React Apollo Tutorial](https://www.howtographql.com/react-apollo/0-introduction/).

If you're adventurous, but don't feel like building a backend just to play with GraphQL, you could probably pick any GraphQL course/tutorial out there and use the Github API instead of whatever jankified custom GQL backend they have you build.

Hope you enjoyed this post. If so, drop me a line on social media somewhere and catch you later.
