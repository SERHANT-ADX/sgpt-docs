# Serhant GPT API

# 📁 Collection: Creating content

## End-point: Create social post

Create text content for a social media post

### Method: POST

> ```
>https://us-central1-serhant-gpt.cloudfunctions.net/createSocialPost
>```

### Body (**raw**)

```json
{
  "platformPrompt": "Twitter Post",
  "model": "davinci3",
  "temperature": 0.5,
  "max_tokens": 500,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "promptAdjective": "casual",
  "propertyID": "1322RX-10881037"
}
```

### Response: text/plain; charset=utf-8

```text
Check out this amazing condo in the Palm Greens community! This immaculate 1st floor unit has 2 beds/2 baths and has been owned by only one person since the complex was built. The condo dues are competitive and include water, cable, roof/exterior maintenance, and lawn care. Plus, the clubhouse offers 9 Har-Tru tennis courts, a pool, hot tub, fitness center, billiards, pickleball, and more. Plus, downtown Delray Beach is less than 6 miles away! Don't miss out on this opportunity! #realestate #palmgreens #delraybeach
```

### Bad Request: propertyId is not present
```json
{
  "platformPrompt": "Twitter Post",
  "model": "davinci3",
  "temperature": 0.5,
  "max_tokens": 500,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "promptAdjective": "casual"
}
```

### Response: text/html; charset=utf-8
```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Error</title>
</head>

<body>
	<pre>Bad Request</pre>
</body>

</html>
```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Editing images

## End-point: Start generating new image

Starts generating new images using Midjourney

### Method: POST

> ```
>https://us-central1-serhant-gpt.cloudfunctions.net/midJourneyImagine
>```

### Body (**raw**)

**msg** is string that contains:
1. link to image
2. prompt
3. additional parameters for generating images

```json
{
  "msg": "https://photos.prod.cirrussystem.net/1609/91785ba5f3fb0744f774ceca789c551c/3386902367.jpeg Redesign the exterior or interior of your building with the timeless and classic charm of Traditional architecture.. how it should not look like: --aspect 1:1 --chaos 0 --quality 1 --seed 0 --version 5.2 --weird 0"
}
```

### Response: json

```json
{
  "success": true,
  "messageId": "b4QvuAJjf18xiHixNonX",
  "createdAt": "2023-09-14T09:15:24.343Z"
}
```


### Bad Request: no msg
```json
{}
```

### Response: application/json
```json
{
  "message": "Request failed with status code 500",
  "name": "AxiosError",
  "stack": "AxiosError: Request failed with status code 500\n    at settle (/workspace/node_modules/axios/dist/node/axios.cjs:1909:12)\n    at IncomingMessage.handleStreamEnd (/workspace/node_modules/axios/dist/node/axios.cjs:2989:11)\n    at IncomingMessage.emit (node:events:526:35)\n    at IncomingMessage.emit (node:domain:552:15)\n    at endReadableNT (node:internal/streams/readable:1359:12)\n    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)",
  "config": {
    "transitional": {
      "silentJSONParsing": true,
      "forcedJSONParsing": true,
      "clarifyTimeoutError": false
    },
    "adapter": ["xhr", "http"],
    "transformRequest": [null],
    "transformResponse": [null],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": null,
    "env": {},
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "Authorization": "Bearer 767a03c8-8f4c-44a1-a148-9f340f35202c",
      "User-Agent": "axios/1.4.0",
      "Content-Length": "2",
      "Accept-Encoding": "gzip, compress, deflate, br"
    },
    "method": "post",
    "url": "https://api.thenextleg.io/v2/imagine",
    "data": "{}"
  },
  "code": "ERR_BAD_RESPONSE",
  "status": 500
}
```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get image generating result

Gets the result of generated images process

### Method: GET

> ```
>https://us-central1-serhant-gpt.cloudfunctions.net/midJourneyGetMessage
>```

### Body (**raw**)

```json
{
  "messageId": "sDQ3JguFBP8CLOCo68Vt"
}
```

### Response: json

```json
{
  "progress": 100,
  "response": {
    "accountId": "Vnj1grR8m40Y2fJ4RMEL",
    "createdAt": "2023-09-14T09:15:17.689Z",
    "originatingMessageId": "rFMbPWMolcn1eJ50kaxt",
    "buttons": ["U1", "U2", "U3", "U4", "🔄", "V1", "V2", "V3", "V4"],
    "imageUrl": "https://cdn.discordapp.com/attachments/1133555744776659075/1151808381141655602/Cadenza_Redesign_the_exterior_or_interior_of_your_building_with_ed818ea1-798b-4333-9d4d-8ce6a9e7b6ff.png",
    "imageUrls": [
      "https://cdn.midjourney.com/ed818ea1-798b-4333-9d4d-8ce6a9e7b6ff/0_0.png",
      "https://cdn.midjourney.com/ed818ea1-798b-4333-9d4d-8ce6a9e7b6ff/0_1.png",
      "https://cdn.midjourney.com/ed818ea1-798b-4333-9d4d-8ce6a9e7b6ff/0_2.png",
      "https://cdn.midjourney.com/ed818ea1-798b-4333-9d4d-8ce6a9e7b6ff/0_3.png"
    ],
    "responseAt": "2023-09-14T09:15:18.069Z",
    "description": "",
    "type": "imagine",
    "content": "<https://s.mj.run/djPA53htdRI> Redesign the exterior or interior of your building with the timeless and classic charm of Traditional architecture.. how it should not look like: --aspect 1:1 --chaos 0 --seed 0 --version 5.2 --weird 0",
    "buttonMessageId": "vODHDizXERkllzpwu7dg"
  }
}
```

### Bad Request: incorrect messageId in the body
```json
{
  "messageId": "random thing, not the id"
}
```

### Response: application/json; charset=utf-8
```json
{
  "message": "Request failed with status code 400",
  "name": "AxiosError",
  "stack": "AxiosError: Request failed with status code 400\n    at settle (/workspace/node_modules/axios/dist/node/axios.cjs:1909:12)\n    at IncomingMessage.handleStreamEnd (/workspace/node_modules/axios/dist/node/axios.cjs:2989:11)\n    at IncomingMessage.emit (node:events:526:35)\n    at IncomingMessage.emit (node:domain:552:15)\n    at endReadableNT (node:internal/streams/readable:1359:12)\n    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)",
  "config": {
    "transitional": {
      "silentJSONParsing": true,
      "forcedJSONParsing": true,
      "clarifyTimeoutError": false
    },
    "adapter": [
      "xhr",
      "http"
    ],
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": null,
    "env": {},
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Authorization": "Bearer 767a03c8-8f4c-44a1-a148-9f340f35202c",
      "User-Agent": "axios/1.4.0",
      "Accept-Encoding": "gzip, compress, deflate, br"
    },
    "method": "get",
    "url": "https://api.thenextleg.io/v2/message/dgdgdgdg"
  },
  "code": "ERR_BAD_REQUEST",
  "status": 400
}
```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Listings

## End-point: Get listings

Gets listings filtering them by parameters in the body 

### Method: POST

> ```
>https://us-central1-serhant-gpt.cloudfunctions.net/getListings
>```

### Body (**raw**)

Every field of the body is obligatory.

```json
{
  "isApartment": false,
  "isCoOp": false,
  "isCondo": false,
  "isDuplex": false,
  "isMixedUse": false,
  "isMultiFamily": false,
  "isOffice": false,
  "isSingleFamilyResidence": false,
  "isTownhouse": false,
  "isTriplex": false,
  "maxBaths": 0,
  "maxBeds": 0,
  "maxPrice": 0,
  "maxSquareFeet": 0,
  "minBaths": 0,
  "minBeds": 0,
  "minPrice": 0,
  "minSquareFeet": 0,
  "regionsSelected": []
}
```

### Response: json

```json
[
  {
    "BathroomsFull": 2,
    "BedroomsTotal": 2,
    "City": "Westport",
    "Id": "1609118603",
    "Latitude": 41.154333,
    "ListPrice": 1995000,
    "ListingKey": "16098401164486159223",
    "LivingArea": 1300,
    "Longitude": -73.366424,
    "Media": [
      "https://perchwell-static-assets.s3.amazonaws.com/serhant/placeholder1x.png",
      "https://photos.prod.cirrussystem.net/1609/91785ba5f3fb0744f774ceca789c551c/2196200385.jpeg",
      "https://photos.prod.cirrussystem.net/1609/91785ba5f3fb0744f774ceca789c551c/3386902367.jpeg",
      "https://photos.prod.cirrussystem.net/1609/91785ba5f3fb0744f774ceca789c551c/3891223290.jpeg",
      "https://photos.prod.cirrussystem.net/1609/91785ba5f3fb0744f774ceca789c551c/3341529283.jpeg"
    ],
    "PostalCode": "06880",
    "PropertySubType": "Condominium",
    "StateOrProvince": "CT",
    "UnparsedAddress": "41 Richmondville Ave 303"
  },
  {
    "BathroomsFull": 2,
    "BedroomsTotal": 2,
    "City": "Westport",
    "Id": "1609118605",
    "Latitude": 41.154333,
    "ListPrice": 2875000,
    "ListingKey": "16098241080228295092",
    "LivingArea": 1760,
    "Longitude": -73.366424,
    "Media": [
      "https://perchwell-static-assets.s3.amazonaws.com/serhant/placeholder1x.png",
      "https://photos.prod.cirrussystem.net/1609/57b674e5a67742faabac06e0c124dac4/992155570.jpeg",
      "https://photos.prod.cirrussystem.net/1609/57b674e5a67742faabac06e0c124dac4/1053198703.jpeg",
      "https://photos.prod.cirrussystem.net/1609/57b674e5a67742faabac06e0c124dac4/1117027940.jpeg"
    ],
    "PostalCode": "06880",
    "PropertySubType": "Condominium",
    "StateOrProvince": "CT",
    "UnparsedAddress": "41 Richmondvill Ave 208"
  }
]
```

### Bad Request: regionsSelected is not present
```json
{
  "isApartment": false,
  "isCoOp": false,
  "isCondo": false,
  "isDuplex": false,
  "isMixedUse": false,
  "isMultiFamily": false,
  "isOffice": false,
  "isSingleFamilyResidence": false,
  "isTownhouse": false,
  "isTriplex": false,
  "maxBaths": 0,
  "maxBeds": 0,
  "maxPrice": 0,
  "maxSquareFeet": 0,
  "minBaths": 0,
  "minBeds": 0,
  "minPrice": 0,
  "minSquareFeet": 0
}
```

### Response: text/plain; charset=utf-8
```text
Internal Server Error
```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get listing item by id

Get listing item by id

### Method: POST

> ```
>https://us-central1-serhant-gpt.cloudfunctions.net/callProxySLAPI?id=1609117948
>```


### Query Params

| Param | value      |
|-------|------------|
| id    | 1609117948 |

### Response: json

```json
{
  "@odata.count": 1,
  "@odata.totalCount": 1,
  "@odata.nextLink": null,
  "value": [
    {
      "AboveGradeFinishedArea": null,
      "Appliances": null,
      "ArchitecturalStyle": null,
      "AssociationFee": null,
      "AssociationFee2": null,
      "AssociationFee2Frequency": null,
      "AssociationFeeFrequency": null,
      "AssociationName": null,
      "AssociationPhone": null,
      "AssociationYN": null,
      "AttachedGarageYN": null,
      "Basement": null,
      "BathroomsFull": 12,
      "BathroomsHalf": 4,
      "BedroomsTotal": 12,
      "BuildingAreaTotal": 18000,
      "BuyerAgentFullName": null,
      "BuyerAgentKey": null,
      "BuyerAgentMlsId": null,
      "BuyerOfficeKey": null,
      "BuyerOfficeMlsId": null,
      "City": "New Canaan",
      "CloseDate": null,
      "ClosePrice": null,
      "ConstructionMaterials": null,
      "Cooling": null,
      "Country": null,
      "CountyOrParish": "Fairfield",
      "CreatedAt": "2023-04-18T23:00:21.567Z",
      "DaysOnMarket": 1,
      "DerivedAssociationFeeMonthly": null,
      "DerivedCloseDate": null,
      "DerivedOnMarketTimestamp": "2023-04-10T21:22:16.000Z",
      "DerivedPriceChangeTimestamp": null,
      "DerivedStatusChangeTimestamp": "2023-04-10T05:00:00.000Z",
      "Directions": "Merrit to South Ave to Main Street to Oenoke Ridge",
      "ElementarySchool": "Out of Town",
      "EntityEventSequenceNumeric": null,
      "ExteriorFeatures": null,
      "FireplacesTotal": 13,
      "GarageSpaces": 4,
      "Heating": null,
      "HighSchool": "Out of Town",
      "Id": "1609117948",
      "InteriorFeatures": null,
      "InternetAddressDisplayYN": null,
      "Latitude": 41.163158,
      "LeaseAmount": null,
      "LeaseAmountFrequency": null,
      "LeaseTerm": null,
      "ListAgentFullName": "Ryan Serhant",
      "ListAgentKey": "16098958644675857174",
      "ListAgentMlsId": "serhantr",
      "ListAOR": null,
      "ListingContractDate": null,
      "ListingId": "117948",
      "ListingKey": "16092772160500747519",
      "ListingKeyNumeric": null,
      "ListOfficeMlsId": "o702007",
      "ListOfficeName": "Serhant Connecticut LLC",
      "ListPrice": 14900000,
      "LivingArea": 18000,
      "Longitude": -73.510361,
      "LotFeatures": null,
      "LotSizeAcres": 6.26,
      "MajorChangeType": null,
      "MiddleOrJuniorSchool": "Out of Town",
      "MlsStatus": "Active",
      "ModificationTimestamp": "2023-04-12T01:02:10.000Z",
      "OffMarketTimestamp": null,
      "OnMarketDate": "2023-04-10T00:00:00.000Z",
      "OnMarketTimestamp": "2023-04-10T20:08:46.000Z",
      "open_houseOpenHouseKey": null,
      "OriginalListPrice": 14900000,
      "OriginatingSystemName": "Greenwich",
      "ParcelNumber": null,
      "ParkingFeatures": null,
      "ParkingTotal": null,
      "PatioAndPorchFeatures": null,
      "PendingTimestamp": null,
      "PhotosChangeTimestamp": "2023-04-11T14:22:19.000Z",
      "PhotosCount": 129,
      "PoolFeatures": null,
      "PostalCode": "06840",
      "PriceChangeTimestamp": null,
      "PropertyCondition": null,
      "PropertySubType": "Single Family Residence",
      "PropertyType": "Residential",
      "PublicRemarks": "Orchard's End, built in 1929 designed by New York architect William B. Tubby, his outstanding designs include Waveny House in New Canaan,Dunnellen Hall in Greenwich & William H. Childs House in Brooklyn. In 2014 the current owners retained world renowned architect Dinyar Wadia to embark on a 3-year $6MM renovation perfecting the already expansive 10,000 square foot addition completed by the previous owners. The main residence improved & expanded upon a brand new 2,000 square foot 4-bedroom guest house, along with a custom designed 5,000 square foot wellness center, a custom pool with spa and new terraces transformed Orchard's End into a true masterpiece. In an interview Dinyar stated he believes in today's market the main house alone would cost in excess of $25 million to replicate.",
      "RawMlsBathroomsTotal": 14,
      "RawMlsModificationTimestamp": "2023-04-11T22:54:16.000Z",
      "RawMlsPhotosChangeTimestamp": "2023-04-11T13:18:13.000Z",
      "RawMlsPhotosCount": null,
      "Roof": null,
      "RoomsTotal": null,
      "SecurityFeatures": null,
      "Sewer": null,
      "StandardStatus": "Active",
      "StateOrProvince": "CT",
      "StatusChangeTimestamp": "2023-04-10T04:00:00.000Z",
      "StreetName": "Oenoke",
      "StreetNumber": "544",
      "StreetNumberNumeric": 544,
      "StreetSuffix": "Ridge",
      "TaxAnnualAmount": "87810.000000000000000000000000000000",
      "TaxAssessedValue": null,
      "TaxOtherAnnualAssessmentAmount": null,
      "TaxYear": null,
      "UnitNumber": null,
      "UnparsedAddress": "544 Oenoke Ridge",
      "UpdatedAt": "2023-06-13T20:37:30.233Z",
      "Utilities": null,
      "VirtualTourURLUnbranded": "http://www.newcanaangreatestate.com/mls",
      "WaterSource": null,
      "WindowFeatures": null,
      "YearBuilt": 1927,
      "Zoning": null
    }
  ]
}
```


### Bad Request: incorrect id or property with such an id is not present

### Query Params

| Param | value |
|-------|-------|
| id    | badId |


### Response: json
```json
{
  "@odata.count": 0,
  "@odata.totalCount": 0,
  "@odata.nextLink": null,
  "value": []
}
```

# 📁 Collection: Authorization

## End-point: Authorize user in the application

Authorize user in the application

### Method: GET

> ```
> https://us-central1-serhant-gpt.cloudfunctions.net/setUserDetails
>```

### Query Params

| Param       | value  |
|-------------|--------|
| UID         | string |
| accessToken | string |

### Response
The response from this endpoint can vary based on the server's implementation. However, here are some common response scenarios:

- **Success Response**: If the user details are successfully updated, the server may respond with a status code `200 OK` along with a JSON response body indicating the success of the operation.

```json
{
  "user": {
    "uid": "FouaNGyWowRlHl27YEGD8ndRbPL2",
    "email": "aoleksenko@serhant.com",
    "emailVerified": false,
    "displayName": "Alexander Oleksenko",
    "isAnonymous": false,
    "providerData": [
      {
        "providerId": "microsoft.com",
        "uid": "92abccda-29aa-4e31-b0fc-f7a72909d26a",
        "displayName": "Alexander Oleksenko",
        "email": "aoleksenko@serhant.com",
        "phoneNumber": null,
        "photoURL": null
      }
    ],
    "stsTokenManager": {
      "refreshToken": "AMf-vBz6qp3SeD81osa7jemwk_iEXDoeAFRLn6NhHn51LXjmtvhOn_wGB5kZnc0WnevE3BSiFhSS5C3-KgaJQHqI042iC4ttEAloViycCfz9dVc4lG4hYmkd3cW5bNXyyvx_zVctQXeW42etSGL3Lr9Wv0i8wNBPheCtNpwH36pDFRee-W6ai0HYl_ge0PMfcokiUpWNG6L9eW_sbexzRRDCA0KIWVVAMFuLW2sLc_56luoowXg2U-chuHdU5PpAgTHIrhbvwariAsZZA-PSq47F6-9QtG7MJZuLu4lGr2buuna8aEW0QnKVS8hLJE7o7mXKn_Ks06GP",
      "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWxleGFuZGVyIE9sZWtzZW5rbyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zZXJoYW50LWdwdC1kZXYiLCJhdWQiOiJzZXJoYW50LWdwdC1kZXYiLCJhdXRoX3RpbWUiOjE2OTQ2OTY4MzAsInVzZXJfaWQiOiJGb3VhTkd5V293UmxIbDI3WUVHRDhuZFJiUEwyIiwic3ViIjoiRm91YU5HeVdvd1JsSGwyN1lFR0Q4bmRSYlBMMiIsImlhdCI6MTY5NDY5NjgzMCwiZXhwIjoxNjk0NzAwNDMwLCJlbWFpbCI6ImFvbGVrc2Vua29Ac2VyaGFudC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsibWljcm9zb2Z0LmNvbSI6WyI5MmFiY2NkYS0yOWFhLTRlMzEtYjBmYy1mN2E3MjkwOWQyNmEiXSwiZW1haWwiOlsiYW9sZWtzZW5rb0BzZXJoYW50LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Im1pY3Jvc29mdC5jb20ifX0.EQjYcXdSQ74n5WMN-TEYInwfgavWwk5Sie0gyLM0E6qcBXSEPsg50fxRVOl8JhSTQjtB0GabnmpZjU4_2wmq6n04-4vnhi6y1g0mPs7snk07bRnAHBZKdy-ojqtZHsqS75nnhvqeJ4608gogylYyPANa7-e5__gfraI1BxlcBp1LQ7nYS8hzMkXTNEV7RYx0GIw6u5Drrg5TqawDc2okWEFDXsucVga2c_7-NHvgwCs4Nwlolpu07DsGiHHdeBep7q92jA7zWMqFMvizhb2B0wRT5DUh1AEeXVcFaYVa1OgjhdBc0IYpqlsWyVG2AwMnZAyC_loKZ6bFb6bP60C_bw",
      "expirationTime": 1694700430620
    },
    "createdAt": "1693475334620",
    "lastLoginAt": "1694696830703",
    "apiKey": "AIzaSyCUg38lX2qVQeY45DzaC7b-RRrROth_5aI",
    "appName": "[DEFAULT]"
  },
  "providerId": "microsoft.com",
  "_tokenResponse": {
    "federatedId": "http://microsoft.com/92abccda-29aa-4e31-b0fc-f7a72909d26a",
    "providerId": "microsoft.com",
    "email": "aoleksenko@serhant.com",
    "emailVerified": false,
    "firstName": "Alexander",
    "fullName": "Alexander Oleksenko",
    "lastName": "Oleksenko",
    "localId": "FouaNGyWowRlHl27YEGD8ndRbPL2",
    "displayName": "Alexander Oleksenko",
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWxleGFuZGVyIE9sZWtzZW5rbyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zZXJoYW50LWdwdC1kZXYiLCJhdWQiOiJzZXJoYW50LWdwdC1kZXYiLCJhdXRoX3RpbWUiOjE2OTQ2OTY4MzAsInVzZXJfaWQiOiJGb3VhTkd5V293UmxIbDI3WUVHRDhuZFJiUEwyIiwic3ViIjoiRm91YU5HeVdvd1JsSGwyN1lFR0Q4bmRSYlBMMiIsImlhdCI6MTY5NDY5NjgzMCwiZXhwIjoxNjk0NzAwNDMwLCJlbWFpbCI6ImFvbGVrc2Vua29Ac2VyaGFudC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsibWljcm9zb2Z0LmNvbSI6WyI5MmFiY2NkYS0yOWFhLTRlMzEtYjBmYy1mN2E3MjkwOWQyNmEiXSwiZW1haWwiOlsiYW9sZWtzZW5rb0BzZXJoYW50LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Im1pY3Jvc29mdC5jb20ifX0.EQjYcXdSQ74n5WMN-TEYInwfgavWwk5Sie0gyLM0E6qcBXSEPsg50fxRVOl8JhSTQjtB0GabnmpZjU4_2wmq6n04-4vnhi6y1g0mPs7snk07bRnAHBZKdy-ojqtZHsqS75nnhvqeJ4608gogylYyPANa7-e5__gfraI1BxlcBp1LQ7nYS8hzMkXTNEV7RYx0GIw6u5Drrg5TqawDc2okWEFDXsucVga2c_7-NHvgwCs4Nwlolpu07DsGiHHdeBep7q92jA7zWMqFMvizhb2B0wRT5DUh1AEeXVcFaYVa1OgjhdBc0IYpqlsWyVG2AwMnZAyC_loKZ6bFb6bP60C_bw",
    "context": "",
    "oauthAccessToken": "eyJ0eXAiOiJKV1QiLCJub25jZSI6Inh4U1VOOUJXbWNXVzlPZzdUczlmOE13a2ZXcVRHdUtsRHI0WUpldnZ5NnciLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ODUzM2M2YS03MDUwLTQyZTAtODFlNy1jMjFmY2FiNmJmMTYvIiwiaWF0IjoxNjk0Njk2NTMwLCJuYmYiOjE2OTQ2OTY1MzAsImV4cCI6MTY5NDcwMDk3NiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQWpTN1AvcUlJNXFKeU1GWnpCSU1DNkZsejVyNExrK0JvbWFtbVRxRFVTVEMraVVTTDJ3S3Zwa2hySTduWE9ldnoiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IlNFUkhBTlQgR1BUIERFViIsImFwcGlkIjoiMDFjYzIzYWYtNjk2NC00YTUyLThhNzQtZjY1ZWU0ODUzNzU1IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJPbGVrc2Vua28iLCJnaXZlbl9uYW1lIjoiQWxleGFuZGVyIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTc4LjIxMi4yNDIuMjYiLCJuYW1lIjoiQWxleGFuZGVyIE9sZWtzZW5rbyIsIm9pZCI6IjkyYWJjY2RhLTI5YWEtNGUzMS1iMGZjLWY3YTcyOTA5ZDI2YSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0zNzQ2Mjk4MjkyLTc4MzcxMjg0MC05MTYzNjk5MDktMTY1NjA0IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAyQjJDMUIwRjgiLCJyaCI6IjAuQVVZQWFqeFRlRkJ3NEVLQjU4SWZ5cmFfRmdNQUFBQUFBQUFBd0FBQUFBQUFBQUJHQVAwLiIsInNjcCI6ImVtYWlsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlAxYVdmR1hidDZUYmJ5ZEE3N084eXNFTVFKSEJvUlN2U0hRcldkeGZlUlkiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiI3ODUzM2M2YS03MDUwLTQyZTAtODFlNy1jMjFmY2FiNmJmMTYiLCJ1bmlxdWVfbmFtZSI6ImFvbGVrc2Vua29AU2VyaGFudC5jb20iLCJ1cG4iOiJhb2xla3NlbmtvQFNlcmhhbnQuY29tIiwidXRpIjoiVS11R1RfR2lQMHlzbUdBRXAwOElBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJDbkt1QzNKZUFLaEpSa013R0w0UTc1RDAxd0FtbHhTNlRKYUpjZHYwb25FIn0sInhtc190Y2R0IjoxNTczMzEyMzE4fQ.JVEEXacJUSHP0VudcN3CP-qn6z3Ht7XqeQ7S9bmPtI_pcHCvISHg-jajwFlXwMLHgqzHJD0Sm_SLu3j3brgWs_k_JY7b4LIVi4RVbDILIFDaUdkz41nztLCnlcA4WLb0r682KqS4tFvGINK57CgBNZDSgXFdfrsOyvOQnm83KT63dx81r5Z7jcb7gOYjuGoCdqadb_gOBPapys8KNH5bKMqBcaXrtTcm8XxyFN2Gxa6tYd-G_sHZbOzBEC1rjGmEnlsnRCMr4NU8RnMryvph2voB84N9qwfckZ9bIB6YoFVJk86W3-ZIUgMNB_Kak-bNAJihnHkC8F5ioF6E2YfNzw",
    "oauthExpireIn": 4145,
    "refreshToken": "AMf-vBz6qp3SeD81osa7jemwk_iEXDoeAFRLn6NhHn51LXjmtvhOn_wGB5kZnc0WnevE3BSiFhSS5C3-KgaJQHqI042iC4ttEAloViycCfz9dVc4lG4hYmkd3cW5bNXyyvx_zVctQXeW42etSGL3Lr9Wv0i8wNBPheCtNpwH36pDFRee-W6ai0HYl_ge0PMfcokiUpWNG6L9eW_sbexzRRDCA0KIWVVAMFuLW2sLc_56luoowXg2U-chuHdU5PpAgTHIrhbvwariAsZZA-PSq47F6-9QtG7MJZuLu4lGr2buuna8aEW0QnKVS8hLJE7o7mXKn_Ks06GP",
    "expiresIn": "3600",
    "oauthIdToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMWNjMjNhZi02OTY0LTRhNTItOGE3NC1mNjVlZTQ4NTM3NTUiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vNzg1MzNjNmEtNzA1MC00MmUwLTgxZTctYzIxZmNhYjZiZjE2L3YyLjAiLCJpYXQiOjE2OTQ2OTY1MzAsIm5iZiI6MTY5NDY5NjUzMCwiZXhwIjoxNjk0NzAwNDMwLCJhaW8iOiJBVFFBeS84VUFBQUFpOEpHR3ZMV1hRUzBFOTRFelNYK0xTVDF0UTJpQUJSbGc1d1h3RTdBcDFDQVdmYzFLQ1U3d0QzVjFURkJ3RCtFIiwiZW1haWwiOiJhbGV4Lm9AU2VyaGFudC5jb20iLCJuYW1lIjoiQWxleGFuZGVyIE9sZWtzZW5rbyIsIm9pZCI6IjkyYWJjY2RhLTI5YWEtNGUzMS1iMGZjLWY3YTcyOTA5ZDI2YSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFvbGVrc2Vua29AU2VyaGFudC5jb20iLCJyaCI6IjAuQVVZQWFqeFRlRkJ3NEVLQjU4SWZ5cmFfRnE4anpBRmthVkpLaW5UMlh1U0ZOMVZHQVAwLiIsInN1YiI6IkNuS3VDM0plQUtoSlJrTXdHTDRRNzVEMDF3QW1seFM2VEphSmNkdjBvbkUiLCJ0aWQiOiI3ODUzM2M2YS03MDUwLTQyZTAtODFlNy1jMjFmY2FiNmJmMTYiLCJ1dGkiOiJVLXVHVF9HaVAweXNtR0FFcDA4SUFBIiwidmVyIjoiMi4wIn0.A8ktruepBGqO4WA8DmGg8-AqoDOB4hFAd8drN0w0Ynln2grOiA_ox-t6Ejo3lUPV5jmlSniZv59EGON0LA3RPnMdxuOiRCg26efLKY7dM_r5QFW3cPTQdPLDEDyl6LeGRrNGW3BqD95lr4F2h7nLAZiIhpvIaf4mZYJeY0RPBgusyXTm1bMTT8YxuRTFVA9-t3D7Wj8INtflAbOepX6zl9-_rmM6lVaaZdpejVPvEMlilhKHYqzXZO6UssAjbwIGYajx9XoC9Ctmi2fyGqdq8hJyZPem7d-yTufxzmJfpcD5fFAvImxMwqGZGTsH_KMQg0y2h8G-vJ42ZjMy9YEq7w",
    "rawUserInfo": "{\"businessPhones\":[],\"preferredLanguage\":null,\"mail\":\"alex.o@Serhant.com\",\"mobilePhone\":null,\"officeLocation\":null,\"displayName\":\"Alexander Oleksenko\",\"surname\":\"Oleksenko\",\"givenName\":\"Alexander\",\"jobTitle\":\"Front-end Developer\",\"@odata.context\":\"https://graph.microsoft.com/v1.0/$metadata#users/$entity\",\"id\":\"92abccda-29aa-4e31-b0fc-f7a72909d26a\",\"userPrincipalName\":\"aoleksenko@Serhant.com\"}",
    "kind": "identitytoolkit#VerifyAssertionResponse",
    "pendingToken": "AMzJoSnbHwMTwl0Voz3BdQMe9Ra59r6u19dPN9D90W4iZ33wj0bHNhdR1-7hRt5lCuRfdUv7jY1r5HVHYm4Q-XpwPmAcjxIW28tnPmbYeqHfBSUw0gRwzL7NaZdriNzJmZjTIRaklIboLY6zTBumxsgBDvDLgvwUxx0Lb15f2U-wcSIYHRTSmFqZo-SQvnOpDMsJPZQIZvxGgLmI7D_-k3Y-yDmWOCKg-rUiC2LaPl02FLE7lpfrWXRJLNA9fNU-mRF-sVae6RaY31Nac4MJhQuQAKPvb6-o4cJsRg2i-xu9F_eBzyzpC9pu435JOgYn_4PYonln1a_-xY8UqjJ9Mnh6IpKS-KJv6A3Da2bSCqGH7Mw7RuYbZjbhu19qYfVN5beUT3kLHjDp_nYp3ZpBZxje2Iz2_VeBwR6keOMlLrq_kaAtYIWmN3WhZjmN7viZJliP-m5jqB5RGkeoxYuyE5AxxJu4A_8m6vy3akrt-nDeaWvpvNrrKoKixhTRpswA0dsL6WGYHQdR845tj-OVABPjJ-NKbA2NKyxAwsJctIh5Tyjffy4PvjIsp5K4Cesx7WJJZN_Oz8HFNbtPlt_Vmoks0BD4luNmngzwcMVHmUamO3QfnTZ5IHY2S6kJmZVk3Il9nJi7ykWh5GOPorwblh6UJYXbnwQyF2KHjwVo61H34L5u432bKU9kUl10Mb1WxhR_cf39UT2xO8Ce5sjU48cgQk78yb7UulBLfTILdKPSMLK_etjIgDFEYrKriHcHzGTkNl6oH3kJxzV1TnIJtjWb0PfLruNl5GHrcIfiZu9D1bf2OGhHi8iMzmfW34DSCluMHBvVvD-7gPWwFOgPKz8KzFP-crvSkopERXGvhvHUwGwpca6risF9IKJrQQa3nruiR8A4IwWlsmuuOA8V8zsZ7b-t1nVyTFKn1bSaQShZlLAce4iWTkc3CsPywDYaZfIhsixMEd5AdoBDDn-HO_q5OQjJSBhbPYmyoYpt9ySMDsmuQjWnNV5Omijoy-0mLPG_z06pJw_10faGMl9iJr_I34Fk_nxKRVTqMR4aRT2naOfe0krHjx7mF5hha_WyOntF9IQdSnKjeD0RhTSZwZjWWqy7x6-bGSUiA1LuS-zws0SVCIFtT33VY9AEsONtUWD-FrV39-yFhgca77g9LjegL5MAfgPsZL8TfZUACfT2HCpx_rnQT5oAUeY8-E4RjxS9ZF9rd9gqS0B4smO_nEiWgu_tnLPpKR6rPUeyVLYSFR16JCZDNjfxMv1GxBeqdy1GtaQcJ8r1Wi6FKSqTNCn93DOxapXvWcBc2Wq7CDsUga-cgDE9cEG8Bq6HqV20rvb4dn1KvhJ0l9Ge92NfWjP6cYLjbx9rQ9I-3aTtww5JDHffkGd5CUuw4j2Ceo0R9iyxnNs7qlnBZtvAQojDTVjSIc6K6WVD1g-IG6Ltcn_d4wdnjQrvjQIl2OwdcwFYtk7RGwoZYFX0wMX-MtEU6anePiiKC8NEtwbK_fOLGIQDmB-j3VFVaGK9DBUlNHJwmyg83fC3cdE2LEmj9x_W_ySGHJm4jep8zENV6G9XegsAl1kp8CeGkEBMoZNmkt34NMeb1JLAZpNCYCIYQ_WnwVTU0sVgqfRRKkQSwCZ_K2IOzqguWgcaPthQrRDHhh6abtTfbPa_bhGJGIEu43MJ70yJQlGxTkFb2h_zJVJGG23M7iSxhB636Kdn6YnOytKMrkTlN_AMSZ9SBunCQZnf7gYtVhWSkwF9GnLg3DRuVUdRUeYojo8VSDPx1qG8cQXb4NOiHLWvbmsDueIUSN4Pqd-idXWOR4eCZauKptSX3U0Zyn-sjJFbjNomU8_JaDGs6LzYLJS1IgKrqZaGilItqKjvwdbPTgRxW6PZ1bAFzr1YT_BHdXKKdk2bbTjKVYO7EmLuNOja5EPDI9ZOU7o43qiscf7IW1hM_x8DXDzmEeiGfOPuBXRGsexftC3yVqiyiIqflyuvCBvaG0BwW7Ycmqn8hteEQQ98v00dDQmYZUsKVe2WEN-qI6VbeidjReeOaAlKev75uNzBhvrNY_UcpiQZ7hmKZiszNvtZY6CBShNm_U5mVK2RO6SjdPM1fSsMjwhZcTMUD4FHA1u1EE2Ua9IdFQF4TzaYKMvt7QOdURM_Xmm6U33k_0LFW8PjWknZWjgT7uzc9iAhSxfDRU6ZIbxggC-eD1rxMNkkFw5MXRICAeY9HCrewKjRAugqAMqe0GlFqmbiDhjymyXdMFjLmWppAE9ZAPtKMeCqUhnMdhbm5Bf2Z-69U1a7DZ1Urab_I0ARnAsJ25yelAk-FpFizflcgixN35uSWy6IwhkSie7N7VCfmFtnr8eOm80586m2O4CnxuTUVX_kUw3O3kbQ_TJ1gSS_MlBpGX_c87GDEP4NgHfkwwxUGOu3nGvA3cFLanQJLpx1w7pgMaoul-CKBHhA6XGgvvC3fhymVlTeiNVjgiHKbTxxUedQO-mEeg2hEfWfcR0wXuR60sCt3RYLhl_q9qdsfOCeMamaig58T9tbyDAKwjXG0Dmai5g98wimw6sGWa93OOpgjweZKZ9qc7q1uQM6Jg0yu13Kj02g-zSx043az-8aBK_AaQYm1en77oReAzcAaCkUOW_2H3R3LBOWRykTcYvVG5rrKwqUY7i9j79_WZVbFHAtE0unQmCmU4w5SZqL7SpSvxWrHO8GmTzvVHLFs4OcBPmcWLR60TG5bUkClgO6IXB9SxhUOIwjt4wY29d9Ignm1eFrP1IT_Bx-H-G3glzB3SrYHAHlZDgRfRQ4FsFy-hWF-rmZu3-apShsCkR2sC2HlbTEW_Qa3VPjCkOq4eF4WGoFMGW2n-Ff2MJtTSb7sxUvjhKfWvnhBjnR6iA14Ur10NGpzSR4aIWWDu5kl17Cak9QiiH41wH4mpdHOrtLFHyGgp0IpWAmkGlH7pUfXQVDQ3fh4cqaoKW88sE0tyxo7SA5SlUzR6Eql-swkVS6JW8wKxbbFdpy9q7i-IYAqxzK55OGx3Dt3T0ycmP0qMEKsUNWhP8ougX57z5OmluXqgMUUJZwX0U9KVSQyyN9MKVkxNdgdSuLh5-GM_84zQdceWUQ7zzZ4XFjzZFz9D0vqIjeR5zIc0DTixGCd3zFRz_hINfoQ8pvsTaxKvGCN058otdNjyH4FYbgpXxb3m1vPPvK3AQHcLbZ_1WOSH1Z98OYE17_xGPU045c_8bvlbhR5CktGExCBVteCbSI4mZdBrQiEAOU0TJGdvKagOuRYWhs9hW6yc1mZXKL0sVNDTN7VcK1VoebRH87-PVTaPsQ_2zL1WbyXWw8Jzi0GGvprlhxRO4UIM_Ma1E39E78sUvcd9cpcD1AdNcs_AqOqUz7pTh2ZpqmZ3keHR_iWOxvRW1aJGacWUqjv-hvvVKT323D5FgffqU9v_TiSp8cm1nANTmgsHUcohHvgeVi32VszJKiOsZgkYXwrk4uxICRCbprD45sHkRiP9f00jDLVow2PIsKjrT7BFOnS_3lu7wgGk8bxPtyXfGnumMEow19gC6bP8KtJmdEXCAtcyoX5CX7Qk1LY1VW1-VwYgQl0qg9p8ofQiWHbgIgTK3s196-cthEJYUzA7N9qMUcI1m-z0uz0VNMNaatAGnq07sZNLiF6z03DvJoJvD7Tf5w06ytVmggwiOcizVuNOr6TOqocIlxAGvlpAAsc2qSTDXxOAIjC7SwzfauaI-FjSMDmdcSrJ1Zp7koVpueiMHPSFJ0bJASho8INPJjgJrU2ti3KKDUdayWDdP-Blsc2Lg9C2aZmiCILRZ3Oa3phiqGHOOH7Oq7fPFSHktte0QA_X6Jxe6qlUF9_Ki2Sy_f3K-IF45EJBWNpqtA-3yy6CbPJgfFS1Ob5m3yl3bhihPt-rGAY0E4Rwg7Tl1_OR5g_v6e-OO_6-avSGwTUZq7CELwO7iAary65SUhgfzi9vogMgg_FTY2XJiPSA8rd0GOjDaBx6BSTjJVlyLdcSI_76R0JRG2Y1oGq66labCJWzA2uXfe6tF1X_I4C81Me1iDy0bLZSLaP8Hc_OPfF8oUHyRfPvzDxK9makdOWJDeATiL5jR7hXNEpIusEwzM7V8Wz0drrsuNVOfMHUzeOVfz_mWHex2F0WUOATH_clKjcfKfuqHkt8IqH1-UWXpVPb-bqjMufpg97Uq6CRpRHjL9d34KscRNp2R1Wi0jLWknHKuI0jpJNGBeR005Kutoy0ySe43mfTWRkQFy0l033GCI2FuDzm5tpmfQC3Qdg-8F53lHwee8qULO8J0Ls7np0TjbdZIufHONc0XUk5z45lhZm0uHNOhetE0kNT0uVEMtiOtXWYDFOO21OZWlOrv_7ogzWaWD4EMRzrnkidj-U92zbL0lBYgu7S0UzamXM13LBAlGB-4swfAGs5glAiCAsUAjoIgIQLJtIkc0k5NsBcUSiwwPOzfh-2JS9foFC4f-UvU1Tv7Nh3HHpD8wKayYx0SJHY0WcRQrr_4NRk6FpQvZsJ71aPbhlpc5latdtDg-n6ruOsM0kFBLmMT4TBk2_xNxCPfKfvr9CiaSZoxX3vUBo3NBpU7qcJhMrY_QiCPNeUPQvwLnM31nnFEoO_YQ9ajazgtuf2mVjVq3OxjHesQO4unn5HDlvTFAWGVPdmELp9hyb_2xpC93fenrKH9rA_9FyFPPAIoY0gdKSS9uJ2vWvCt0cy9K48LtTA2ufGMJvtJDsFzHxawdJonq03MSfGmDxFCq4HHKOuq0Ectpr3oAC0sLmdVGwxOtr0gbC_d_im45We7pFuLV8XsA4uOsazgFf65jbw2MOfupZy4tlCEOpakeK-KsQX-lE30auc8vMfpLNZR1jEE0vuyBltAiskH_QIV2rYJ5_GC8NgOTB9LzJEi0B5BQ-k5fXootfbE9nwn4APXjqbL_HpmXx4XyvtiSXK2M_mXrThTxaviGGzHjRf56gqm9pcXjEZNmrwpQEiP3KKHhlcldZ4tMpg910ye5UCa9AE6S6vW0QkM4ts32rPHZehlj4nNnbqoBTPPMCyKJRbVbD7bp8fx9a9e5czWozRQGn2Y4tfIh7U5ZdSzMjGbPCaZwpgyMl-WOUC1cqpYyjEgdRiTPCSZcbVR2kK1JSgjfc01uDQDkzhKF5Mo8LGL3A9GNnATAUkOTLVtVI02wO7XWkZton8tXRQ3J1tTDtksSnrfUUA6JDAHa-z9NvjPu0ycPIG8P-Cq5HKlcOG8nvfWEa86GRbIgyZD0LxYtUgJ4Vz7L9OrAo09mgGLdEpajg4IGRBHgOADCeXTLM3MHQPdqtihIV3zIxi8fgms4hfQE3LXVYx-Ff85K7jEwtNTUK4lBMdKWGiePbhJMCLOHH_fcBAGb2-DDcplFWyq-RkHQT5SOu0ZKdj-U96o4jFkTAtD2IefnrHw"
  },
  "operationType": "signIn"
}
```

### Usage
This endpoint is typically used when you need to update or modify user-specific information, such as profile data, preferences, or settings. It requires proper authentication, usually through an access token, to ensure that only authorized users can make updates.

#### Example Request
```jsx static
fetch(
  `https://us-central1-serhant-gpt.cloudfunctions.net/setUserDetails?UID=${UID}&accessToken=${accessToken}`,
  {
    method: 'GET',
    redirect: 'follow',
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```
