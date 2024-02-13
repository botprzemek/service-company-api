import { RaportRow } from '../models/row.model'

export const jsonService: Record<string, RaportRow[]> = {
  Śląsk: [
    {
      time: '08:30:00',
      operator: 2,
      photoURL: `http://localhost:3002/files/photos/${new Date().toLocaleDateString('pl-PL').split('/').join('_')}/photo`,
      markerURL: `https://www.google.com/maps/search/?api=1&query=`,
      long: '23.2345243',
      lati: '45.1345344',
    },
    {
      time: '08:15:00',
      operator: 1,
      photoURL: `http://localhost:3002/files/photos/${new Date().toLocaleDateString('pl-PL').split('/').join('_')}/photo`,
      markerURL: `https://www.google.com/maps/search/?api=1&query=`,
      long: '50.3012105',
      lati: '18.5672164',
    },
  ],
}
