import type { HostComponent, ViewProps } from 'react-native';
import { requireNativeComponent } from 'react-native';
import type { NativeEventsProps } from './types';

type NativeCoordinate = number[];

export interface MapboxNavigationViewProps extends ViewProps, NativeEventsProps {
  mute?: boolean;
  separateLegs?: boolean;
  distanceUnit?: string;
  startOrigin: NativeCoordinate;
  waypoints?: {
    latitude: number;
    longitude: number;
    name?: string;
    separatesLegs?: boolean;
  }[];
  destinationTitle?: string;
  destination: NativeCoordinate;
  language?: string;
  showCancelButton?: boolean;
  shouldSimulateRoute?: boolean;
  showsEndOfRouteFeedback?: boolean;
  hideStatusView?: boolean;
  travelMode?: string;
}

export default requireNativeComponent<MapboxNavigationViewProps>(
  'MapboxNavigationView',
  {
    nativeOnly: {}
  }
) as HostComponent<MapboxNavigationViewProps>;
