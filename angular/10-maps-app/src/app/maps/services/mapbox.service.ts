// mapbox.service.ts
import mapboxgl from 'mapbox-gl';

export function setMapboxAccessToken(token: string) {
  mapboxgl.accessToken = token;
}
