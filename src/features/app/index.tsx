import { Text } from "react-native";
// import { uuid } from "utils";
import { uuid } from "utils/test";

export default function App() {
  return <Text style={{ marginTop: 100 }}>{`Hello ${uuid()}`}</Text>;
}
