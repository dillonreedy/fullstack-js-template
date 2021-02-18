So originally we pulled this project down.

## Find full stack template on Github
I found the project 'simple-fullstack-react' application on github, and so I just pulled the project down

## At least start a local git repo
Just to track how your project moves

## Use npm tools to do major upgrades on all the npm packages
The first thing we did was updated all the npm packages
using 'npm outdated' and a tool

## Added component library
This was done to give us access to buttons, textboxes, etc.

## Replaced Material UI with React Bootstrap
Because that component library doesn't even include a nav bar component

## Added in recharts
This was done to create a page that could display a chart

## Added in React Router
This was done to be able to navigate in between pages

## Created API to connect to pages
Certain components were needing their state populated so backend APIs were made to pass this data

## Put in architectural diagrams 
Using the tool draw.io we were able to put in diagrams to better understand when to use React state and Redux

## Attempted exploring Node.js Typescript and Webpack
The moral of the story is, don't ever try to blend these three, there are so many things that can go wrong.

## Implemented a live feed using Socket.IO
We learned that you can implement two-way communication between the server and the client using socket.io and socket.io-client, this can be super useful for live streaming data into a chart component.