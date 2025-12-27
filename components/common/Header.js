import { StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';
import colors from '../../constants/colors';
const Header = (props) => {
    const {navigation, route, options, back} = props;
  return (
    <Appbar.Header style={{backgroundColor: colors.color1}}>
        <Appbar.Action icon="magnify" onPress={() => {}} iconColor="white"/>
        <Appbar.Content title={options.title} color="white"/>
        <Appbar.BackAction onPress={() => {}} iconColor="white" />
    </Appbar.Header>
  )
}

export default Header;

const styles = StyleSheet.create({})