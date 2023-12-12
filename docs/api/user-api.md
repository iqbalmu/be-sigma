# User API
- Get data user     : user detail
- Update data user  : update profile

## Get Data User

Endpoint : GET /api/v1/user/:id

Headers :
- Authorization : token

Response Body Success :
```json
{
    "status": 200,
    "message": "get user success",
    "data" : {
        "id" : 1,
        "roleId": "2",
        "profile": {
            "username": "username 1",
            "firstName": "firstName 1",
            "lastName": "lastName 1",
            "email": "email@samp.le",
            "phone": "089998989898",
            "address": "address ...",
            "birthDate": "03/03/2003",
        }
    }
}
```

Response Body Error :
```json
{
    "status": 404,
    "message": "user not found",    
}
```

## Update Data User

Endpoint : PUT /api/v1/user/:id

Headers :
- Authorization : token

Request Body :
```json
{
    "id": 12938491,
    "username": "new update username",      //opsional
    "password": "secret",                   //opsional
    "profile" : {
        "firstName": "new update firstName",    //opsional
        "lastName": "new update lastName",      //opsional
        "email": "new update email",            //opsional
        "phone": "new update phone",            //opsional
        "address": "new update address",        //opsional
        "birthDate": "new update birthDate",    //opsional
    }
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "Update user success",
    "data" : {
        "id": 12938491,
        "username": "new update username",      //opsional
        "password": "secret",                   //opsional
        "profile" : {
            "firstName": "new update firstName",    //opsional
            "lastName": "new update lastName",      //opsional
            "email": "new update email",            //opsional
            "phone": "new update phone",            //opsional
            "address": "new update address",        //opsional
            "birthDate": "new update birthDate",    //opsional
        }  
    },            
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "Update user failed",    
}
```