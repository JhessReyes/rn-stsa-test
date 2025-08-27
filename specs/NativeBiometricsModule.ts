import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type BiometryType = 'none' | 'biometric' | 'faceID' | 'touchID';

export interface AuthenticateResponse {
  success: boolean;
  code?: string;
  error?: string;
}

export interface isAvailableResponse {
  available: boolean;
  biometryType: BiometryType;
}

export interface Spec extends TurboModule {
  isAvailable(): Promise<isAvailableResponse>;
  authenticate(
    reason?: string,
    allowDevicePasscode?: boolean,
  ): Promise<AuthenticateResponse>;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeBiometricsModule',
) as Spec;
