# [Mark Scott] Building Business Applications with Vue.js and MongoDB [ENG, Jul 2018]

<br/>

**I dislike this course and I do not recommend it for start study vue for beginners.**

<br/>

**Host**

    $ lsb_release -a
    No LSB modules are available.
    Distributor ID:	Ubuntu
    Description:	Ubuntu 14.04.5 LTS
    Release:	14.04
    Codename:	trusty

<br/>

    $ docker -v
    Docker version 18.06.0-ce, build 0ffa825

<br/>

**Inside container:**

<br/>

    $ node -v
    v10.7.0

<br/>

    $ npm -v
    6.2.0

<br/>

**Final project packages**

<br/>

    $ npm list -g --depth=0
    /usr/local/lib
    +-- npm@6.2.0
    `-- vue-cli@2.9.6

<br/>

    $ cd /project/client

    $ npm list --depth=0
    client@1.0.0 /project/client
    +-- autoprefixer@7.2.6
    +-- axios@0.18.0
    +-- babel-core@6.26.3
    +-- babel-eslint@8.2.6
    +-- babel-helper-vue-jsx-merge-props@2.0.3
    +-- babel-loader@7.1.5
    +-- babel-plugin-syntax-jsx@6.18.0
    +-- babel-plugin-transform-runtime@6.23.0
    +-- babel-plugin-transform-vue-jsx@3.7.0
    +-- babel-preset-env@1.7.0
    +-- babel-preset-stage-2@6.24.1
    +-- bcryptjs@2.4.3
    +-- chalk@2.4.1
    +-- copy-webpack-plugin@4.5.2
    +-- css-loader@0.28.11
    +-- eslint@4.19.1
    +-- eslint-config-standard@10.2.1
    +-- eslint-friendly-formatter@3.0.0
    +-- eslint-loader@1.9.0
    +-- eslint-plugin-import@2.13.0
    +-- eslint-plugin-node@5.2.1
    +-- eslint-plugin-promise@3.8.0
    +-- eslint-plugin-standard@3.1.0
    +-- eslint-plugin-vue@4.7.0
    +-- extract-text-webpack-plugin@3.0.2
    +-- file-loader@1.1.11
    +-- friendly-errors-webpack-plugin@1.7.0
    +-- html-webpack-plugin@2.30.1
    +-- node-notifier@5.2.1
    +-- optimize-css-assets-webpack-plugin@3.2.0
    +-- ora@1.4.0
    +-- portfinder@1.0.13
    +-- postcss-import@11.1.0
    +-- postcss-loader@2.1.6
    +-- postcss-url@7.3.2
    +-- rimraf@2.6.2
    +-- semver@5.5.0
    +-- shelljs@0.7.8
    +-- uglifyjs-webpack-plugin@1.2.7
    +-- url-loader@0.5.9
    +-- vue@2.5.16
    +-- vue-loader@13.7.2
    +-- vue-router@3.0.1
    +-- vue-style-loader@3.1.2
    +-- vue-template-compiler@2.5.16
    +-- vuetify@1.1.8
    +-- vuex@3.0.1
    +-- webpack@3.12.0
    +-- webpack-bundle-analyzer@2.13.1
    +-- webpack-dev-server@2.11.2
    `-- webpack-merge@4.1.3

<br/>

    $ cd /project/server/

    $ npm list --depth=0
    server@1.0.0 /project/server
    +-- body-parser@1.18.3
    +-- cors@2.8.4
    +-- eslint@5.2.0
    +-- eslint-config-standard@11.0.0
    +-- eslint-plugin-import@2.13.0
    +-- eslint-plugin-node@7.0.1
    +-- eslint-plugin-promise@3.8.0
    +-- eslint-plugin-standard@3.1.0
    +-- express@4.16.3
    +-- mongoose@5.2.5
    +-- morgan@1.9.0
    `-- nodemon@1.18.3

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

![Application](/img/pic2-1.png?raw=true)

<br/>

    {
        "isActive": true,
        "email": "user1@test.com",
        "first": "User1",
        "last": "Test",
        "password": "test111"
    }

<br/>

![Application](/img/pic2-2.png?raw=true)

<br/>

Possible data. Need to replace userId:

    [
        {
                "userId": "5b5b5df1333e8500dddc37b3",
                "transactionDate": "2018-05-14T00:00:00.000Z",
                "transactionType": "Opening Balance",
                "description": "Equity Line Initial Opening Balance",
                "charge": "12378.0",
                "deposit": "0.0",
                "notes": ""
            },
            {
                "userId": "5b5b5df1333e8500dddc37b3",
                "transactionDate": "2018-05-15T00:00:00.000Z",
                "transactionType": "Credit Card",
                "description": "Amazon - Whey Protien",
                "charge": "23.45",
                "deposit": "0.0",
                "notes": ""
            },
            {
                "userId": "5b5b5df1333e8500dddc37b3",
                "transactionDate": "2018-05-15T00:00:00.000Z",
                "transactionType": "Reward",
                "description": "New account first charge reward deposit",
                "charge": "0.0",
                "deposit": "100.0",
                "notes": ""
            },
            {
                "userId": "5b5b5df1333e8500dddc37b3",
                "transactionDate": "2018-05-15T00:00:00.000Z",
                "transactionType": "Credit Card",
                "description": "Tex-mex lunch",
                "charge": "12.33",
                "deposit": "0.0",
                "notes": ""
            },
            {
                "userId": "5b5b5df1333e8500dddc37b3",
                "transactionDate": "2018-05-15T00:00:00.000Z",
                "transactionType": "Deposit",
                "description": "May 15 Payroll Deposit",
                "charge": "0.0",
                "deposit": "1000.0",
                "notes": ""
            },
            {
                "userId": "5b5b5df1333e8500dddc37b3",
                "transactionDate": "2018-05-16T00:00:00.000Z",
                "transactionType": "Credit Card",
                "description": "Quick Trip - gas and car wash",
                "charge": "38.12",
                "deposit": "0.0",
                "notes": "Gas for the Acura. Got a car wash too."
            },
            {
                "userId": "5b5b5df1333e8500dddc37b3",
                "transactionDate": "2018-05-16T00:00:00.000Z",
                "transactionType": "Credit Card",
                "description": "Optics World - Vortex Scope",
                "charge": "833.0",
                "deposit": "0.0",
                "notes": "My wife is going to kill me when she see this!"
            }
        ]

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

<br/>

## 08 - Manage application state with vuex

    $ cd /project/client/
    $ npm install --save vuex

<br/>

![Application](/img/pic8.png?raw=true)

<br/>

## 09 - Getting data from the api

    $ cd /project/client/
    $ npm install --save axios

    $ cd /project/server/
    $ npm install --save cors

<br/>

## 10 - Finalizing the demo application

    $ cd /project/client/
    $ npm install --save bcryptjs

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
