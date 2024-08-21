import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  loading: boolean;
  handlePress: () => void;
  width?: number;
  height?: number;
}

const CustomButton = ({
  title,
  loading,
  handlePress,
  width,
  height,
}: Props) => (
  <TouchableOpacity
    className={` bg-primary rounded-[10px]`}
    style={{ width: width || 312, height: height || 63 } as any}
    onPress={loading ? (null as any) : handlePress}
    activeOpacity={loading ? 1 : 0.7}
  >
    <View className="flex-1 justify-center items-center">
      {loading ? (
        <ActivityIndicator size={25} color="#D33237" />
      ) : (
        <Text className="text-white text-center font-StratosMedium text-[18px]">
          {title}
        </Text>
      )}
    </View>
  </TouchableOpacity>
);
export default CustomButton;
