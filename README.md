# jest-service-map-api

## API

### Technologies
- Express,
- NodeMailer,
- JsonToXls

### TODO
1. Photo upload, endpoint POST /photo (body data: photo url, service employee, location, time),
3. Save photo on server with date_location.extension,
4. Save data on server photo url, service employee, location, time,
5. Add record to XLS file on region page that contains photo url, service employee, location, date,
6. On specific time export file to cdn with date_region,
7. Then send to specified email,
8. Get photo from link GET /photo/date/location

## Web app

1. Photo upload with service employee, location and date -> POST /photo,
2. Photo display -> JWT
