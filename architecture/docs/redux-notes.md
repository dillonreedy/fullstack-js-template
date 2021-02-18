https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e article url

An example projects folder structure for handling redux:
public/
  index.html
  client/
    index.js
    modules/
      reducers.js
      users/
        constants.js
        actions/
          user_fetch.js
          user_login.js
          permissions_fetch.js
        reducers/
          index.js
          user.js
          permission.js
      projects/
    routes/
      login/
        index.js
        containers/
          login.js
        components/
          login.js
      logged_in/
      project_list/
      project_view/

This folder structure has the following rules:
1. modules directory is responsible for holding data-related files
1. We have a sub-directory for every facet of your application
1. The modules/users/reducers/index.js file is used to make reducers similar in structure across modules
1. modules/reducers.js includes each modules reducers
1. The modules/reducers.js file can be used to create your redux store
1. The routes folder contains 


react-redux provides wrappers that make working with react much easier