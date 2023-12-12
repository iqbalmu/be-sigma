# History API
- Get data history

## List Data History User

Endpoint : GET /api/v1/history

Headers :
- Authorization : token

Request Body :
```json
{    
    "userId": "12433",
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "List history user success",
    "data" : [
        {
            "id" : 1,
            "condition": "condition",
            "status": "baik",
            "peminjamanId" : "123",
            "inventory": {
                "name": "inventory name 1",
            }
        },
        {
            "id" : 2,
            "condition": "condition",
            "status": "baik",
            "peminjamanId" : "124",
            "inventory": {
                "name": "inventory name 12",
            }
        },
    ]
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "Something Error",    
}
```
