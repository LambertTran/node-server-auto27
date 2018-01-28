## Server of Car Deal Website 
#### Front-End can be found [here](https://github.com/LambertTran/reactjs-auto27-web)
#### This server was built on Nodejs with a CMS that allows admin user to manage their car inventory and customer images.
#### You can check you the live version at [link](http://ec2-52-52-42-92.us-west-1.compute.amazonaws.com:8080/auto27)

#### If you want to run this project locally, you need to add AWS S3 Credentials for it to work properly

```
|-- identity
    |-- aws.js
```

**First**, you need to create a folder called **identity**

**Then**, create a JS file **aws.js** where you define your AWS S3 credentials as following

```
const awsCredentials = {
  secretAccessKey: your-secret-access-key,
  accessKeyId: your-access-key-ID,
}
module.exports = awsCredentials
```


