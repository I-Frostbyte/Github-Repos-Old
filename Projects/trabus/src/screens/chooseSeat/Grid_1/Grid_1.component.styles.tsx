import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 40,
    height: 25,
    margin: 2,
    backgroundColor: '#021526',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius : 2,
  },
  checked : {
    backgroundColor : "#02385A",
    color : "white",
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;