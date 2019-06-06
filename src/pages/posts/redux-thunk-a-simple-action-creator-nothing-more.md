---
title: "Redux Thunk: A Simple Action Creator Nothing More"
date: "11-18-2018"
---


![](https://images.unsplash.com/photo-1508522109214-4df07c2e9d90)

So, I am going to talk about a really interesting topic i.e **Redux Thunk.** So first, if you are a beginner in redux and want to learn what does actually redux thunk is and why should you use it and by the end of the article you have a good understanding of **Redux Thunk**. So, before moving directly to **redux thunk** let’s just first talk about **Action Creator** in Redux.

## **What is Action Creator?**

So, In Redux **action** is some kind of event that is triggered on a specific situation. Suppose, the user clicks a button then the user just want to perform some action. So, As you know that according to the paradigm of redux whenever you want to perform some action then you have to dispatch that action. And when you are dispatching that action you can send any kind of data with it. So, action creator is a simple function that takes data and dispatch inside itself. And you can import that action creator and map dispatch function to props using connect higher-order component from **react-redux** package. Then all you need is that just handle that event and call that action creator from props and pass the specified data into it. So, that means action creator only need that data you want to send when going to do everything for you.
Now, let’s just talk about what is **Redux Thunk**.

## What is Redux Thunk?

So, as I mentioned **redux thunk** is just an action creator with some extra power that helps us to deal with asynchronous calls. So, before you want to use **redux thunk** you have to know what is it actually. **Redux Thunk** is a middleware (middleware is some kind of code that runs b/w two main phases of **redux paradigm** i.e dispatching an action and taking that action to the reducer) that has a functionality of pausing and resuming the dispatch action. So, what is actually does when we dispatch an action creator it just takes data and perform some async call for that time until it gets the **response** it’s pause the dispatching of that action there and if it gets the **response** and then it going to resuming that dispatching that action and then goes to **reducer**.

## **How to use a Redux Thunk?**

So, if you want to use the **redux thunk** then you have to install a **redux-thunk** package and import **thunk** from it.

```js
    import thunk from "redux-thunk";
```

Now you got the redux thunk. Now you have to import **applyMiddlware,** and **compose** from **redux** package.

```js
    import { createStore, applyMiddleware, compose } from 'redux';
```

Now you have that. So, go to that file where you created your store and pass **compose** as the second parameter besides the **rootReducer** and inside that call **applyMiddlware** and pass **thunk** inside it.

```js
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
```

So, now you just add thunk to your project and you can create your own **thunk** now. I am here making a simple thunk that helps you to make just a better understanding of **thunk**.
So, suppose you want an app where you just gave a Github username and it will give you the whole data when you submit a form.
So, let’s just make a simple thunk i.e a function called **setUserData** that takes the only username when the user is submitting a form.

```js
    const setUserData = (username) => {
      return (dispatch) => {
        fetch(`https://api.github.com/users/${username}`)
          .then(response => response.json())
          .then(data => {
             dispatch({type : "SET_USER_DATA", userData : data});
          }).catch(error => {
             dispatch({type : "SET_USER_ERR", error : error});
         })
        }
    }
```

So, we just make **thunk** so what it does it takes a username and fetch the **userData** and when it has the response it just resuming the dispatching of action.
Now, I made this thunk, how can I use this.
So, All you need is just you have to import the **thunk** in the component you want to send the data.
So, for that, you have to import **connect** higher-order component form **react-redux.**

```js
    import {connect} from 'react-redux';
    import setUserData from './thunk';
```

Then you have to call it like you want to use store in the component to change the view and you have to make a function that map **dispatch **into props.

```js
    function mapDispatchToProps(dispatch) {
       return {
        setUserData : (username) => dispatch(setUserData(username));
       }
    }

    export default connect(null, mapDispatchToProps)(Form);
```

So, now all you need is just call the **setUserData** function from props when you are going to handle that event.
You can do like this.

```js
    handleSubmit = (e) => {
       const userName = this.state.username;
       this.props.setUserData(userName);
    }
```

So, this all we need to apply a **Redux Thunk**.

## Benefits of Using Redux Thunk

So, normally an **action creator** is returning an object but in case of **thunk** it returns and function where you can do some asynchronous work and when that work is done then from that function you can return the object by calling dispatch method. **Thunk** is a middleware that means you can perform anything before the action is going to the reducer but it’s ideal for asynchronous work.

Follow me on [twitter](https://twitter/am_prav_veen).
Follow me on [Github](https://github.com/praveen-me).
