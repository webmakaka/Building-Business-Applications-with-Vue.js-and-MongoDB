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

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
