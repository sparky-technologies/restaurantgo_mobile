import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Image,
  TextInputProps,
} from "react-native";

interface Props extends TextInputProps {
  label: string;
  icon?: any;
  placeholder: string;
  secureTextEntry?: boolean;
  setSecureTextEntry?: (value: boolean) => void;
}

const InputField = ({
  label,
  icon,
  placeholder,
  secureTextEntry = false,
  setSecureTextEntry,
  ...props
}: Props) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableOpacity onPress={Keyboard.dismiss}>
      <View className={"my-2 w-full"}>
        <Text className="text-[16px] font-StratosMedium mb-3">{label}</Text>
        <View className="flex flex-row justify-start items-center px-2 relative bg-neutral-100 rounded-md border-[1px] border-primary">
          <TextInput
            placeholder={placeholder}
            className="w-full px-2 py-2 text-sm flex-1 font-StratosMedium"
            secureTextEntry={secureTextEntry}
            {...props}
          />
          {icon && (
            <TouchableOpacity
              onPress={() =>
                setSecureTextEntry && setSecureTextEntry(!secureTextEntry)
              }
            >
              <Image source={icon} className="w-6 h-6 ml-4" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);

export default InputField;
