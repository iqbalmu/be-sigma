# Inventory API
- List data inventory
- Get data inventory

## List Data Inventory

Endpoint : GET /api/v1/inventories

Headers :
- Authorization : token

Response Body Success :
```json
{
    "status": 200,
    "message": "get inventories success",
    "data" : [
        {
            "id" : 1,
            "name": "name 1",
            "address": "address 1",
            "description": "description 1",
            "category": "category 1",
            "images": "images 1",
            "status": "status 1",
        },
        {
            "id" : 2,
            "name": "name 2",
            "address": "address 2",
            "description": "description 2",
            "category": "category 2",
            "images": "images 2",
            "status": "status 2",
        },
    ]
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "get list inventories failed",    
}
```

## Get Data Inventory

Endpoint : GET /api/v1/inventories/:id

Headers :
- Authorization : token

Response Body Success :
```json
{
    "status": 200,
    "message": "get inventories success",
    "data" : {
        "id" : 1,
        "name": "name 1",
        "address": "address 1",
        "description": "description 1",
        "category": "category 1",
        "images": "images 1",
        "status": "status 1",
    }
}
```

Response Body Error :
```json
{
    "status": 404,
    "message": "inventory not found",    
}
```