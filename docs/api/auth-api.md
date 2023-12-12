# Auth API
- login
- logout

## Login User

Endpoint : PUT /api/v1/auth/login

Request Body :
```json
{
    "id": 12938491,    
    "password": "secret",    
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "Login success",
    "data" : {
        "token" : "12312312341safgwesdfaSG"
    },            
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "Login failed",    
}
```

## Logout User

Endpoint : PUT /api/v1/auth/logout

Response Body Success :
```json
{
    "status": 200,
    "message": "Logout success"
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "Logout failed",    
}
```