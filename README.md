# jest-service-map-api

## API

### Technologies

- Express,
- NodeMailer,
- JsonToXls

### TODO

1. Photo upload, endpoint POST /photo (body jsonService: photo url, service employee, location, time),
2. Save photo on server with date_location.extension,
3. Save jsonService on server photo url, service employee, location, time,
4. Add record to XLS file on region page that contains photo url, service employee, location, date,
5. On specific time export file to cdn with date_region,
6. Then send to specified email,
7. Get photo from link GET /photo/date/location

## Web app

1. Photo upload with service employee, location and date -> POST /photo,
2. Photo display -> JWT
