import ReactNativeModal from "react-native-modal";
import { View, Text, Image } from "react-native";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface Props {
  showModal: boolean;
  handleDone: () => void;
  title: string;
  text: string;
  btnTitle: string;
}
const CustomErrorModal = ({
  showModal,
  handleDone,
  title,
  text,
  btnTitle,
}: Props) => (
  <ReactNativeModal isVisible={showModal}>
    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
      <View className="flex justify-center my-3 items-center">
        <MaterialIcons
          name="cancel"
          size={150}
          color={"#EB3134"}
          className="mx-auto"
        />
      </View>
      <Text className="text-2xl text-center font-StratosMedium">{title}</Text>
      <Text className="text-base text-gray-400 font-Stratos-Light text-center mt-2">
        {text}
      </Text>
      <View className="p-4">
        <View className="flex justify-center items-center">
          <CustomButton
            title={btnTitle}
            handlePress={handleDone}
            loading={false}
            width={241}
            height={64}
          />
        </View>
      </View>
    </View>
  </ReactNativeModal>
);

export default CustomErrorModal;
