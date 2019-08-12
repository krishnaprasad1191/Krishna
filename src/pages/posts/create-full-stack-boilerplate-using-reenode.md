---
title: "Create full-stack boilerplate using reenode"
date: "08-12-2019"
---

## Problems with creating fullstack boilerplate:

Creating a starter kit for full-stack applications need a lot of effort and sometimes it becomes a headache. A small mistake in the initialization of the starter project can break your whole code and then you see a huge pile of console errors.

When I was learning to create full-stack applications then every time I code application from sketch and repeat that huge pile of code again and again that becomes a headache for me sometimes and if I did something wrong in setup of the application, my whole application got breaks.

Making mistake can be one reason but the main reason is that its very time consuming like every time you need to install packages, configure webpack, babel, eslint, prettier, etc and sometimes that makes me sick. Then I created some boilerplate like [simple-react-boilerplate](https://github.com/praveen-me/simple-react-boilerplate), [MERN-boilerplate](https://github.com/praveen-me/MERN-boilerplate), [react-redux-ssr](https://github.com/praveen-me/react-redux-ssr) and when I need to create a project I simply clone that repository and start working.
But still, the problem is that there are different repositories for every purpose i.e sometimes I don't need node but sometimes I do.

So, that's why I create `reenode`, a CLI for generating boilerplates with all the necessary minimal configuration to code a full-stack applications.

## What is actually `reenode` is ?

`reenode` is a simple CLI that generates starter code for full-stack applications without all pain that you'll have when you write that from scratch. `reenode` also have custom options for creating different boilerplates. The best part is that it's time-saving and your starter code will be ready in just a couple of minutes.

## How to use it?

For that first you need to install it globally by just typing: <br/>
`npm install -g reenode` or `yarn add global reenode`.

That's so simple. 😃

**reenode** provides `create` command to create a project. For that you just need to run:

```bash
reenode create project-name
```

After that terminal prompt will ask some questions:
![](./../../images/reenode.gif)

That's all you need to do. 🚀 <br/>
You can get help typing `reenode --help` and version of CLI by `reenode --version`.

Checkout the whole documentation of reenode from here: <br/>
NPM Link: https://www.npmjs.com/package/reenode <br/>
Github Link: https://github.com/praveen-me/reenode

**REQUEST**: If you feel issue using it then please comment down here or you can add issue at **reenode's** GitHub repo.

---

Follow me on [Twitter](https://twitter.com/am_pra_veen) and [Github](https://github.com/praveen-me).
