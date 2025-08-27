import { Alert, Platform } from 'react-native';
import { useState } from 'react';
import { biometricAdapter } from '../../../config/adapters/biometric-adapter';
export const useBiometric = () => {
  const [success, setSuccess] = useState(false);

  const onAuthenticate = async () => {
    if (Platform.OS !== 'android') return;

    if (Platform.OS === 'android') {
      const { available } = await biometricAdapter.isAvailable();
      if (!available) {
        Alert.alert('Error', 'No biometrics available');
        return;
      }
      const { success } = await biometricAdapter.authenticate(
        'Authenticate to create a team',
        true,
      );
      setSuccess(success);
    }
  };

  return {
    success,
    onAuthenticate,
  };
};
