# Building Business Applications with Vue.js and MongoDB

[Mark Scott] Building Business Applications with Vue.js and MongoDB [ENG, Jul 2018]

<br/>

### 16 - Demo - vue-cli

    # npm install -g vue-cli

    # vue --version
    2.9.6

    $ cd /project/

    $ vue init webpack client
    $ cd client
    $ npm run dev

<br/>

![Application](/img/pic1.png?raw=true)

<br/>

## Developing the api with node and express

    $ cd /project/server/
    $ npm init -y

    $ npm install --save-dev nodemon
    $ npm install --save mongoose
    $ npm install --save eslint
    $ node ./node_modules/eslint/bin/eslint.js --init

    $ npm install --save express
    $ npm install --save morgan
    $ npm install --save body-parser

    $ npm run start

<br/>

![Application](/img/pic2.png?raw=true)

<br/>

    {
        "isActive": true,
        "email": "user1@test.com",
        "first": "User1",
        "last": "Test",
        "password": "user111"
    }

<br/>

## UI development with vuejs and vuetify

<br/>

### 34 - Demo - Testing the Baseline Setup

    $ cd /project/client/
    $ npm run dev

<br/>

![Application](/img/pic3.png?raw=true)

<br/>

### 36 - Demo - Add Vuetify to the Project

    $ cd /project/client/
    $ npm install --save vuetify

https://vuetifyjs.com/en/examples/layouts/googleContacts

    $ npm run lint --fix
    $ npm run dev

<br/>

![Application](/img/pic4.png?raw=true)

<br/>

![Application](/img/pic5.png?raw=true)

<br/>

### 38 - Using Vuetify Components

<br/>

![Application](/img/pic6.png?raw=true)

<br/>

login: user1@test.com  
pass: test111

<br/>

### 39 - Review Vuetified Components

<br/>

![Application](/img/pic7.png?raw=true)

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
