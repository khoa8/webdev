**Student Name**:  Khoa Nguyen

**NetID**: sq9943

# Homework #8 Solutions

## Question 1 
### (a) Confidentiality

(i) Confidentiality refers to protecting information from being accessed by unauthorized parties. In other words, only the people who are authorized to do so can gain access to sensitive data. (from lecture and MDN)

(ii) An example
Capital One has announced that nearly 106 million customer accounts and credit card applications have been compromised.

Breach announced: August 4, 2019

Breach Period: 2005-March 23, 2019

Description of the breach: Capital One has announced that many of their customers’ Social Security numbers, Canadian Social Insurance numbers, bank account numbers, names, addresses, credit scores, credit limits, and account balances have been compromised. No login credentials were exposed in the breach.

(iii) A breach of confidentiality

### (b) Integrity

(i) We need to ensure that software is not altered, and that the source of the software is genuine.

(ii) To assure the integrity of some of the open source software:

- Using digital signature
- Using File Integrity Monitoring software to monitor changes in files.



### (c) Availability

(i) Denial-of-service attack (DoS attack)

(ii) Yes. Because it can disrupt the service.

## Question 2
### (a)

(i) Credential stuffing is a type of cyberattack where stolen account credentials typically consisting of lists of usernames and/or email addresses and the corresponding passwords are used to gain unauthorized access to user accounts through large-scale automated login requests directed against a web application. (from Wiki)

Users should not use the same passwords for different websites because if one of these website is attacked, hacker can use the user data from that website to gain access to other websites. 

### (b)

(i) Two-factor authentication is a security process in which the users provide two different authentication factors to verify themselves.

Example: when withdrawing of money from an ATM, user must use a correct bank card (something the user has) and a correct PIN (something the user knows).

It is not hackproof. It just provides stronger authentication.

### (c)

(i) Example: CSUEB BlackBoard. This system has the access control for different roles: admin, student, teacher, grader, staffs. Each role has specific views and access level.

(ii) Role Based Access Control (RBAC) is a method of restricting network access based on the roles of individual users within an enterprise. RBAC lets users have access rights only to the information they need to do their jobs and prevents them from accessing information that doesn't pertain to them. (from techtarget.com)

### (d)

It is important to keep logs of various activities associated with the web app because it's helpful in identifying critical network issues, malicious attacks on the system, or some other suspicious system activities like unauthorized logins, login failures, and errors on network devices.

## Question 3
### (a)

```code
hashedUsers = users.map(data =>{
    let salt = bcrypt.genSaltSync(nRounds);
    let passHash = bcrypt.hashSync(data.password, salt);

    return {
        "firstName": data.firstName,
        "lastName" : data.lastName,
        "email": data.email,
        "password": passHash,
        "role": data.role
    };
 
});
```

```code
{
    "firstName": "Arlen",
    "lastName": "Melton",
    "email": "sided1830@outlook.com",
    "password": "$2a$10$wLw5wfjKqOuyQUgj9V6BLORXXaih.3FwMYNbCMwvwqn4ZOrYRF8C.",
    "role": "admin"
  },
  {
    "firstName": "Luna",
    "lastName": "Munoz",
    "email": "sylvan2059@live.com",
    "password": "$2a$10$4SEhyH8knJg5kaA6z7zeROg2UVw6fAYhtzsDy2dzHc6MPj35P9k32",
    "role": "customer"
  }
```

### (b)

![3b](images/3b.png)

## Question 4
### (a)

```code
const data = require('./userTourHash.json');
const bcrypt = require('bcryptjs');

app.post('/login', function (req, res) {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    let user = data.find( u => {
        return u.email === email
    });
    if (user) {
    	let verified = bcrypt.compareSync(password, user.passHash);
    	if (verified) {
    	res.json({
        "firstName": user.firstName,
        "lastName" : user.lastName,
        "email": user.email,
        "role": user.role
    });
        res.end();
    } else {
        res.status(401).json({error: true, message: "User/Password error"});
    	}
	}
    else {
        res.status(401).json({error: true, message: "User/Password error"});
    }
    
});
```
## Question 5

### (a)

```code

const fetch = require("node-fetch");

fetch("http://127.43.43.8:1111/login", {
    method: 'POST',
    body: JSON.stringify({email: "sided1830@outlook.com", password: 'C}m8\"L,F'}),
    headers: { "Content-Type": "application/json" }
  }).then((res) => res.json())
  .then((data) => {
    console.log('');
    console.log('Good email, good password: ');
    console.log(data);
  })
  .catch((err) => console.log(err))

fetch("http://127.43.43.8:1111/login", {
    method: 'POST',
    body: JSON.stringify({email: "sided1830@outlook.com", password: 'KC}m8\"L,F'}),
    headers: { "Content-Type": "application/json" }
  }).then((res) => res.json())
  .then((data) => {
    console.log('');
    console.log('Good email, incorrect password: Code 401: ')
    console.log(data);
  })
  .catch((err) => console.log(err))

fetch("http://127.43.43.8:1111/login", {
    method: 'POST',
    body: JSON.stringify({email: "Ksided1830@outlook.com", password: 'C}m8\"L,F'}),
    headers: { "Content-Type": "application/json" }
  }).then((res) => res.json())
  .then((data) => {
    console.log('');
    console.log('Bad email (user not found): Code 401: ')
    console.log(data);
  })
  .catch((err) => console.log(err))
```
![5](images/5.png)
