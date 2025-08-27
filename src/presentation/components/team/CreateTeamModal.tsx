import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import { globalColors } from '../../../config/theme/global-theme';
import { Button, Text, TextInput } from 'react-native-paper';
import { useCreateTeam } from '../../hooks/team/useCreateTeam';
import { IconButton } from '../shared';

export const CreateTeamModal = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const { mutateAsync } = useCreateTeam();

  const handleSend = async () => {
    setLoading(true);
    try {
      if (name.trim().length === 0) return;
      await mutateAsync({ name });
      setVisible(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setName('');
      setLoading(false);
    }
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <IconButton name="add" onPress={() => setVisible(true)} />

      <Modal
        isVisible={visible}
        onBackdropPress={onClose}
        onSwipeComplete={onClose}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        useNativeDriver
        useNativeDriverForBackdrop={false}
        backdropTransitionOutTiming={0.1}
        backdropOpacity={0.5}
        style={styles.modal}
        avoidKeyboard
      >
        <View
          style={[
            {
              backgroundColor: globalColors.secondary,
            },
            styles.modalContent,
          ]}
        >
          <View style={styles.handle} />

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={80}
          >
            <Text variant="titleLarge" style={styles.title}>
              Add a new team
            </Text>
            <Text
              variant="bodySmall"
              style={{
                color: globalColors.white,
                marginBottom: 10,
              }}
            >
              Team name:
            </Text>
            <TextInput
              style={{
                backgroundColor: globalColors.secondary,
                height: 40,
              }}
              outlineStyle={{
                borderWidth: 0,
              }}
              contentStyle={{
                backgroundColor: globalColors.white,
                borderRadius: 10,
                fontSize: 12,
              }}
              placeholder="Ej: Mutantes"
              value={name}
              mode="outlined"
              onChangeText={setName}
            />
            <View style={styles.actions}>
              <Button
                style={{
                  borderRadius: 10,
                  width: '100%',
                }}
                loading={loading}
                disabled={loading}
                onPress={handleSend}
                buttonColor={globalColors.accent}
                textColor="white"
                mode="contained"
              >
                Create team
              </Button>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 15,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    color: globalColors.white,
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  buttonCancel: {
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonSend: {
    backgroundColor: '#883001',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
  },
  buttonTextCancel: {
    color: '#883001',
  },
});
