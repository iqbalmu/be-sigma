# Peminjaman API
- Peminjaman Inventory

## Peminjaman
Endpoint : PUT /api/v1/peminjaman/:idInventory

Headers :
- Authorization : token

Request Body :
```json
{    
    "userId": "12433",
    "startDate": "12/12/2023",   
    "endDate": "16/12/2023",                
    "description": "description...",     
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "loan was successful",
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "loan failed",
}
```