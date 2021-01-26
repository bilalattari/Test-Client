import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Colors, Typography } from "../../Styles";
import { BackArrow, } from '../../Assets/Icons';
import { Text } from "../../Common";
import { SvgXml } from "react-native-svg";

const Header = ({navigation}) =>
(
    <View style={styles.main}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.backTou}>
            <SvgXml xml={BackArrow} />
        </TouchableOpacity>
        <Text style={styles.signintxt}>Sign in</Text>
    </View>
)



const styles = StyleSheet.create({
    main:{ padding:10, paddingTop:20,},
    signintxt:{marginTop:20, color:Colors.LIGHTPURPLE, fontSize:46, fontFamily:Typography.FONT_FAMILY_BOLD}
})

export default Header;