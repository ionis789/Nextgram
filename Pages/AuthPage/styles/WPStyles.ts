import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // *LogFormik*
  textInput: {
    margin: 5,
    borderWidth: 1,
    borderBottomColor: '#79F1A1',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
  },
  // *LogFormik*
  animatedButton: {
    padding: 10,
    backgroundColor: '#98EEA8',
  },
  defaultText: {
    color: '#fff',
  },
  textInputContainer: {
    // width: '50%',
  },

  submitButtonContainer: {
    width: '30%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#79F1A1',
  },

  submitButton: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // *WelcomePage*
  container: {
    backgroundColor: '#000',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    minWidth: '50%',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#79F1A1',
  },
  topFormContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    gap: 16,
  },
  topFormContainerTextRegisterPressed: {
    borderTopLeftRadius: 20,
    borderRadius: 5,
    backgroundColor: '#79F1A1',
  },
  topFormContainerText: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#79F1A1',
  },
  headerTextPressed: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerText: {
    padding: 5,
    fontSize: 16,
    fontWeight: '600',
    color: '#79F1A1',
    opacity: 0.8,
  },
  topFormContainerTextLoginPressed: {
    borderTopRightRadius: 20,
    borderRadius: 5,
    backgroundColor: '#79F1A1',
  },
  // *WelcomePage*
});
