import React from "react";
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { Text, Header } from "../../Common";
import { NumBackArrow, DownArrow, Avatar, FaceId } from '../../Assets/Icons';
import { SvgXml } from "react-native-svg";

const SignInWithEmail = () => {
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar barStyle={'light-content'}/>

            <Image style={styles.avatar} source={Avatar} />

            <Text style={styles.midtxt}>Charlie Smith</Text>
            <Text style={styles.midtxtBtm}>Not me</Text>

            <View style={styles.codeDotView}>
                <View style={styles.codeDotFill} />
                <View style={styles.codeDotFill} />
                <View style={styles.codeDotFill} />
                <View style={styles.codeDotEmp} />
            </View>




            <View style={{ alignItems: 'center' , flex : 1 }}>

                <View style={styles.numbermainView}>
                    <View style={styles.numberRow}>
                        <TouchableOpacity style={styles.numberView}><Text style={styles.numbertxt}>1</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.numberView, styles.middleNumber]}><Text style={styles.numbertxt}>2</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.numberView}><Text style={styles.numbertxt}>3</Text></TouchableOpacity>
                    </View>
                    <View style={styles.numberRow}>
                        <TouchableOpacity style={styles.numberView}><Text style={styles.numbertxt}>4</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.numberView, styles.middleNumber]}><Text style={styles.numbertxt}>5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.numberView}><Text style={styles.numbertxt}>6</Text></TouchableOpacity>
                    </View>
                    <View style={styles.numberRow}>
                        <TouchableOpacity style={styles.numberView}><Text style={styles.numbertxt}>7</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.numberView, styles.middleNumber]}><Text style={styles.numbertxt}>8</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.numberView}><Text style={styles.numbertxt}>9</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.numberRow, { borderBottomWidth: 0, }]}>
                        <TouchableOpacity style={styles.numberView}><Text style={[styles.numbertxt, {  fontSize: 15 }]}>Forgot ?</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.numberView, styles.middleNumber]}><Text style={styles.numbertxt}>0</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.numberView}><Text style={styles.numbertxt}> <SvgXml xml={NumBackArrow} /> </Text></TouchableOpacity>
                    </View>
                </View>
            </View>




            <View style={styles.bottomView}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.btmtxt}>Create a new account</Text>
                    <SvgXml xml={DownArrow} />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    avatar: { alignSelf: 'center', marginVertical: 20  , height : 80 , width : 80  },
    midtxt: { textAlign: 'center', color: '#484848', fontSize: 15, },
    midtxtBtm: { textAlign: 'center', color: '#998CFF', fontSize: 17, marginTop: 15 },
    codeDotView: { marginTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    codeDotEmp: { width: 12, height: 12, backgroundColor: '#C7C7C7', borderRadius: 30, marginHorizontal: 10, },
    codeDotFill: { width: 12, height: 12, backgroundColor: '#998CFF', borderRadius: 30, marginHorizontal: 10, },
    btmtxt: { color: '#484848', marginBottom: 10, fontSize: 17 },
    bottomView: { margin: 10,  alignItems: 'center', },


    numbermainView: {marginTop:20, justifyContent: 'center', padding: 10, borderRadius: 20,  width: 300, height: 340 },
    numberRow: { flexDirection: 'row', justifyContent: 'space-around' },
    numberView: {  width: 55, height: 70, flex: 1, justifyContent: 'center', alignItems: 'center', },
    numbertxt: { fontSize: 35, color: '#484848', },
   


})
export default SignInWithEmail;