# Reproduction steps

- run `npm install && npm run serve`
- go to the app in the browser
- Inspect the vuex store with the Vue dev tools
- reload the page
- An error should appear with the console saying the previously inspected module does not exist. For example:

![](Screenshot%202022-12-14%20at%2021.34.47.png)

## Context

After changing the name of a module, the vue devtools seem to keep track of the previous module names, causing an error when it cannot find a module anymore. 

This process is reproduced here by changing the namespace of a module every second. 
