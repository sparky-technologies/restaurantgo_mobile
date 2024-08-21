import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";


interface Props {
    title: string;
    loading: boolean;
    handlePress: () => void;
}

const CustomButton = ({ title, loading, handlePress }: Props) => (
    <TouchableOpacity className="w-[312px] h-[63px] bg-primary rounded-[10px]" onPress={handlePress}>
       <View className="flex-1 justify-center items-center">
         <Text className="text-white text-center font-StratosMedium text-[18px]">{title}</Text>
        {loading && (
            <ActivityIndicator size="small" color="#D33237" />
        )}

       </View>

    </TouchableOpacity>
)
export default CustomButton;