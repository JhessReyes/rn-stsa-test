import NativeBiometricsModule from '../../../../specs/NativeBiometricsModule';
export const useBiometric = () => {
  const isAvailable = async () => {
    return await NativeBiometricsModule.isAvailable();
  };

  const authenticate = async ({
    reason,
    allowDevicePasscode,
  }: {
    reason: string;
    allowDevicePasscode: boolean;
  }) => {
    return await NativeBiometricsModule.authenticate(
      reason,
      allowDevicePasscode,
    );
  };

  return {
    isAvailable,
    authenticate,
  };
};
