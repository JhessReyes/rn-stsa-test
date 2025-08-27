import NativeBiometricsModule from '../../../specs/NativeBiometricsModule';
export const biometricAdapter = {
  async isAvailable() {
    return await NativeBiometricsModule.isAvailable();
  },
  async authenticate({
    reason,
    allowDevicePasscode,
  }: {
    reason: string;
    allowDevicePasscode: boolean;
  }) {
    return await NativeBiometricsModule.authenticate(
      reason,
      allowDevicePasscode,
    );
  },
};
