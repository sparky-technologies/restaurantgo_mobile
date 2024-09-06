import {
  ImageSourcePropType,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

interface ItemProps {
  image: ImageSourcePropType;
  name: string;
  price: string;
  quantity: number;
  handleUpdate: any;
}

const CartItemCard = ({
  image,
  name,
  price,
  quantity,
  handleUpdate,
}: ItemProps) => (
  <View className="flex mb-2 flex-row p-2 items-center w-full h-[131px] border-[1px] border-primary rounded-[10px]">
    {/* Image view */}
    <View className="w-[151px] h-[99px] rounded-[8px]">
      <Image source={image} resizeMode="contain" />
    </View>
    <View className="flex flex-col">
      <Text className="font-StratosLight text-[13px]">{name}</Text>
      <Text className="font-StratosBold text-[12px]">Price: ₦{price}</Text>
      <View className="flex flex-row gap-2 mt-3">
        <TouchableOpacity onPress={handleUpdate}>
          <View className="w-7 h-7 flex justify-center items-center rounded-[7px] bg-white">
            <Entypo name="minus" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View className="flex justify-center items-center">
          <Text className="font-StratosBold text-[16px]">{quantity}</Text>
        </View>
        <TouchableOpacity onPress={handleUpdate}>
          <View className="w-7 h-7 flex justify-center items-center rounded-[7px] bg-primary">
            <Entypo name="plus" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default CartItemCard;
