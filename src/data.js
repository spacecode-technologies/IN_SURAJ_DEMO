


const Data={
    "status": true,
    "message": "Fetch Successful",
    "page": {
      "hasNextPage": false,
      "totalCount": 65,
      "currentPage": 1,
      "filterCount": 1,
      "totalPage": 1
    },
    "data": [
      {
        "_id": "61681a555ea26345102139b3",
        "code": "BS-DR-0012",
        "createdBy": [],
        "updatedBy": [],
        "name": "Manage",
        "path": null,
        "urlEndPoint": null,
        "level": 1,
        "icon": "fa fa-tasks",
        "type": null,
        "drawer-code": "BS-DR-0005,BS-DR-0006,BS-DR-0007,BS-DR-0008,BS-DR-0009,BS-DR-0010,BS-DR-0011",
        "collectionName": null,
        "sequence": 7,
        "isActive": 1,
        "drawerId": [
          {
            "_id": "61681a555ea26345102139b0",
            "code": "BS-DR-0009",
            "createdBy": "6166c93c852b412ec899056c",
            "updatedBy": "6166c93c852b412ec899056c",
            "name": "User",
            "path": "/dashboard/manage/user",
            "urlEndPoint": "/user",
            "level": 2,
            "icon": null,
            "type": "manage",
            "drawer-code": null,
            "collectionName": "user",
            "sequence": null,
            "isActive": 1,
            "createdAt": "2021-10-14T11:53:57.479Z",
            "updatedAt": "2021-10-14T11:53:57.479Z"
          },
          {
            "_id": "61681a555ea26345102139b1",
            "code": "BS-DR-0011",
            "createdBy": "6166c93c852b412ec899056c",
            "updatedBy": "6166c93c852b412ec899056c",
            "name": "Recipient",
            "path": "/dashboard/manage/recipient",
            "urlEndPoint": "/recipient",
            "level": 2,
            "icon": null,
            "type": "manage",
            "drawer-code": null,
            "collectionName": "recipient",
            "sequence": null,
            "isActive": 1,
            "createdAt": "2021-10-14T11:53:57.480Z",
            "updatedAt": "2021-10-14T11:53:57.480Z"
          }
        ],
        "createdAt": "2021-10-14T11:53:57.487Z",
        "updatedAt": "2021-10-14T11:53:57.487Z"
      },
      {
        "_id": "61681a555ea26345102139aa",
        "code": "BS-DR-0045",
        "createdBy": [],
        "updatedBy": [],
        "name": "Location",
        "path": "/dashboard/location",
        "urlEndPoint": "/location",
        "level": 1,
        "icon": "fa fa-get-pocket",
        "type": "Dynamic",
        "drawer-code": null,
        "collectionName": "location",
        "sequence": 5,
        "isActive": 1,
        "createdAt": "2021-10-14T11:53:57.469Z",
        "updatedAt": "2021-10-14T11:53:57.469Z",
        "drawerId": []
      },
      {
        "_id": "61681a555ea26345102139b3",
        "code": "BS-DR-0012",
        "createdBy": [],
        "updatedBy": [],
        "name": "drawer",
        "path": null,
        "urlEndPoint": null,
        "level": 1,
        "icon": "fa fa-tasks",
        "type": null,
        "drawer-code": "BS-DR-0005,BS-DR-0006,BS-DR-0007,BS-DR-0008,BS-DR-0009,BS-DR-0010,BS-DR-0011",
        "collectionName": null,
        "sequence": 7,
        "isActive": 1,
        "drawerId": [
          {
            "_id": "61681a555ea26345102139b0",
            "code": "BS-DR-0009",
            "createdBy": "6166c93c852b412ec899056c",
            "updatedBy": "6166c93c852b412ec899056c",
            "name": "User",
            "path": "/dashboard/manage/user",
            "urlEndPoint": "/user",
            "level": 2,
            "icon": null,
            "type": "manage",
            "drawer-code": null,
            "collectionName": "user",
            "sequence": null,
            "isActive": 1,
            "createdAt": "2021-10-14T11:53:57.479Z",
            "updatedAt": "2021-10-14T11:53:57.479Z"
          },
          {
            "_id": "61681a555ea26345102139b1",
            "code": "BS-DR-0011",
            "createdBy": "6166c93c852b412ec899056c",
            "updatedBy": "6166c93c852b412ec899056c",
            "name": "Recipient",
            "path": "/dashboard/manage/recipient",
            "urlEndPoint": "/recipient",
            "level": 2,
            "icon": null,
            "type": "manage",
            "drawer-code": null,
            "collectionName": "recipient",
            "sequence": null,
            "isActive": 1,
            "createdAt": "2021-10-14T11:53:57.480Z",
            "updatedAt": "2021-10-14T11:53:57.480Z"
          }
        ],
        "createdAt": "2021-10-14T11:53:57.487Z",
        "updatedAt": "2021-10-14T11:53:57.487Z"
      }
    ],
    
    "error": null
  }

  // Data.data.drawerId.map((x)=>{  })
  // function find_data(data){
  //   data.map((x)=>{
  //     console.log(x.name);
  //     if(x.includes("drawerId")){
  //      find_data(x.drawerId)
  //     }else{
        
  //     }
  //   })
  // } 
  // console.log((find_data(Data["data"]))

  export default Data