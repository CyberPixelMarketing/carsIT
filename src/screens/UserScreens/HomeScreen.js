import { Dimensions, FlatList, Image, ImageBackground, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../constant/color'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import CustomButton from '../../components/CustomButton';
import { colorList, servicesImg, slider } from '../../constant/data'
import SvgExport from '../../constant/SvgExport'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [newCarModal, setNewCarModal] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const [isShowPlateNo, setIsShowPlateNo] = useState(false)

    const renderItems = ({ item, index }) => {
        return (
            <View style={{ marginRight: 22, marginBottom: 20 }}>
                <ImageBackground borderRadius={5} source={item?.img} style={{ width: 105, height: 140 }} >
                    <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 5 }}>
                        <View style={styles.overlay} />
                        <Text style={{ color: "#fff", fontWeight: "700", textAlign: "center" }}>{item?.text}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const addNewCar = () => {
        setModalVisible(false)
        setNewCarModal(true)
    }

    const numColumns = 4;
    const groupedData = [];

    for (let i = 0; i < colorList.length; i += numColumns) {
        groupedData.push(colorList.slice(i, i + numColumns));
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerBox}>
                <Image source={require('../../asset/images/carItt.png')} style={{ width: 100, height: 50, marginLeft: "auto", marginRight: "auto" }} />
                <TouchableOpacity onPress={() => navigation.navigate('SelectVehicle')}>
                    <Ionicons name='reorder-three' size={32} color={"#000"} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchBox}>
                <TextInput
                    placeholder='Search For a Car Service'
                    placeholderTextColor={colors.plcHolder}
                    style={styles.inputTxt}
                />
                <Ionicons name='search' size={24} color={'#00000050'} />

            </View>

            <View style={{ marginBottom: -5 }}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={4}
                    autoplayLoop
                    index={2}
                    showPagination
                    data={slider}
                    paginationStyleItem={{ width: 10, height: 10, backgroundColor: "green" }}
                    paginationStyle={{ marginBottom: -30 }}
                    paginationStyleItemActive={{ backgroundColor: '#000' }}
                    paginationStyleItemInactive={{ backgroundColor: '#e3e2e4' }}
                    renderItem={({ item }) => (
                        <View style={[styles.child, { backgroundColor: item }]}>
                            <ImageBackground borderRadius={5} source={item} style={{ flex: 1 }} >
                                <View style={styles.carouselBox}>
                                    <Text style={styles.carouselTxt}>Car Services and {'\n'}Maintainance</Text>
                                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.bookNowTxt}>
                                        <Text style={{ color: "#000" }}>Book Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>

                        </View>
                    )}
                />
            </View>

            <Text style={styles.titleTxt}>Our Services</Text>
            <FlatList
                style={{ marginTop: 20 }}
                numColumns={3}
                data={servicesImg}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItems}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)} >
                    <View style={[styles.centeredView, { alignItems: 'center', }]}>
                        <View style={[styles.modalView, { width: "65%", alignItems: 'center', }]}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ alignSelf: "flex-start" }}>
                                <Ionicons name={'close-outline'} size={20} color={'#000'} />
                            </TouchableOpacity>

                            <Text style={{ fontSize: 18, fontWeight: "600", }}>Choose Your Vehicle</Text>

                            <Image source={require('../../asset/images/modalCar.png')} style={{ width: 160, height: 120, marginVertical: 15 }} />

                            <Text style={styles.modalText}>Select a Vehicle from your {'\n'} list or add new one </Text>

                            <View style={styles.addVehicleBtn} />
                            <TouchableOpacity
                                onPress={addNewCar}
                                style={{ paddingVertical: 15, width: "100%" }}
                            >
                                <Text style={styles.textStyle}>Add a New Vehicle</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={newCarModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setNewCarModal(!newCarModal);
                }}>

                <TouchableWithoutFeedback onPress={() =>
                    setNewCarModal(false)

                }>


                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.keyboardAvoidingView}
                    >

                        <ScrollView contentContainerStyle={styles.scrollViewContent}>


                            <View style={[styles.modalView, { paddingBottom: 40 }]}>
                                {
                                    isShowPlateNo ?
                                        <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>

                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <TouchableOpacity onPress={() => setIsShowPlateNo(false)}>
                                                    <Ionicons name={'arrow-back-outline'} size={20} />
                                                </TouchableOpacity>

                                                <Text style={styles.plateTitle}>Genesis - G80</Text>

                                            </View>

                                            <Text style={styles.subPlate}>Enter Plate Number</Text>


                                            <View style={styles.searchContainer}>
                                                <View style={styles.innerSearchBox}>
                                                    <Text style={styles.plateTxt}>Dubai</Text>
                                                    <View style={styles.iconContainer}>
                                                        <Entypo name='triangle-down' size={18} style={{ paddingRight: 8, color: "#000" }} />
                                                    </View>



                                                    <View style={{ flexDirection: "row", width: width / 1.4, justifyContent: "space-evenly" }}>
                                                        <TextInput
                                                            placeholder='A'
                                                            style={styles.singleText}
                                                            maxLength={1}
                                                            placeholderTextColor={colors.plcHolder}

                                                        />


                                                        <TextInput
                                                            placeholder='12345'
                                                            style={styles.fixedBottomInput}
                                                            maxLength={5}
                                                            placeholderTextColor={colors.plcHolder}

                                                        />
                                                    </View>
                                                </View>
                                            </View>

                                            <CustomButton
                                                title={'Save'}
                                                onPress={() =>
                                                    { 
                                                    setNewCarModal(false)
                                                    ,setIsShowPlateNo(false)}}
                                            />
                                        </View>



                                        :
                                        <View>


                                            <TouchableOpacity onPress={() => setNewCarModal(!newCarModal)} style={{ alignSelf: "flex-start" }}>
                                                <Ionicons name={'close-outline'} size={20} color={"#000"} />
                                            </TouchableOpacity>

                                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>Car Brand</Text>


                                            <View style={[styles.searchBox, {}]}>
                                                <TextInput
                                                    placeholder='Enter Your Car Brand Here'
                                                    placeholderTextColor={colors.plcHolder}
                                                    style={styles.inputTxt}
                                                />
                                                <Ionicons name='search' size={24} color={'#00000050'} />

                                            </View>



                                            <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>Car Model</Text>

                                            <View style={[styles.searchBox, { marginTop: 5, marginBottom: 0 }]}>
                                                <TextInput
                                                    placeholder='Enter Your Car Model Here'
                                                    placeholderTextColor={colors.plcHolder}
                                                    style={styles.inputTxt}
                                                />

                                            </View>


                                            {
                                                groupedData?.map((item, index) => {
                                                    return (
                                                        <View style={styles.row} key={index}>
                                                            {item.map((img, index) => (
                                                                <TouchableOpacity onPress={() => setSelectedColor(img?.colorCode)} style={styles.itemContainer} key={index}>
                                                                    <View style={{ width: 65, height: 50, backgroundColor: img?.colorCode, borderRadius: 5 }} />
                                                                    <Text>{img?.colorTxt}</Text>

                                                                    {
                                                                        selectedColor == img?.colorCode &&
                                                                        <View style={{ position: "absolute", backgroundColor: "gray", padding: 3, borderRadius: 50, right: 10, top: -7, zIndex: 10 }}>
                                                                            <Ionicons name={'checkmark-sharp'} color={'#fff'} />
                                                                        </View>
                                                                    }

                                                                </TouchableOpacity>
                                                            ))}
                                                        </View>
                                                    )
                                                })


                                            }








                                            <View style={{ borderWidth: 0.5, width: "110%", marginVertical: 15, borderColor: "#00000020" }} />
                                            <CustomButton
                                                title={'Next'}
                                                onPress={() => setIsShowPlateNo(true)}
                                            />


                                        </View>
                                }
                            </View>

                        </ScrollView>

                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>

            </Modal>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: Platform.OS == 'android' ? 20 : 40,
        paddingHorizontal: 15
    },
    headerBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: "#fff",
        height: 45,
        paddingHorizontal: 10,
        marginVertical: 15,
        borderRadius: 5
    },
    inputTxt: {
        fontSize: 15,
        width: "90%",
        color: "#000"
    },
    child: {
        width: width,
        justifyContent: 'center',
        height: height / 6,
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center'
    },
    carouselBox: {
        marginLeft: 30,
        marginTop: 20,
    },
    carouselTxt: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    },
    bookNowTxt: {
        backgroundColor: "#fff",
        alignSelf: "baseline",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 30,
        borderRadius: 3
    },
    titleTxt: {
        marginTop: 40,
        fontSize: 19,
        fontWeight: "700",
        color: "#000"
    },








    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
        backgroundColor: "#00000070"

    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingTop: 10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        color: "#000"
    },
    modalText: {
        textAlign: "center",
        fontSize: 16,
        color: colors.plcHolder
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,

    },
    plateTitle: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 17,
        fontWeight: "600",
        color: "#000"
    },
    subPlate: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 17,
        color: colors.plcHolder,
        marginTop: 20
    },
    searchContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "#fff",
        elevation: 5,
        height: 50,
        justifyContent: "center",
        paddingLeft: 15,
        marginBottom: 35,
        marginTop: 40,
    },
    singleText: { borderBottomWidth: 1, borderColor: colors.plcHolder, height: 40, color: "#000" },
    fixedBottomInput: {
        borderBottomWidth: 1,
        width: 50, // Fixed width for the bottom border
        textAlign: 'center',
        borderColor: colors.plcHolder,
        height: 40,
        color: '#000'
    },
    innerSearchBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    plateTxt: {
        marginRight: 15,
        fontSize: 17,
        fontWeight: "500",
        color: "#000"
    },
    iconContainer: {
        borderRightWidth: 1,
        height: 50,
        justifyContent: "center",
        borderColor: colors.plcHolder?.concat(80)
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    addVehicleBtn: {
        borderWidth: 0.5,
        width: "110%",
        marginTop: 15,
        borderColor: "#00000020"
    },







    keyboardAvoidingView: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        marginTop: Platform.OS == 'ios' ? 40 : 0,
        backgroundColor: "#00000050"
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
})