import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import styles from "./ChooseSeat.screen.styles";
import Grid_input from "./Grid_1/Grid_1";
import IonicIcon from "react-native-vector-icons/Ionicons"
import { Input } from "native-base";
import React from "react";
import Header from "../../components/Header/Header";
import { useNavigation } from "@react-navigation/native";


export default function ChooseSeat({ route }){
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [ userIDCardNumber, setUserIDCardNumber] = React.useState<string>("");
    const [selectedSeats, setSelectedSeats] = React.useState<string[]>([]);

    const tripDetail = route.params.tripDetails
    const navigation = useNavigation();
    console.log(tripDetail);

    function handleSelectSeat(seat : string){

        if(selectedSeats.includes(seat)){
            setSelectedSeats(selectedSeats.filter((c)=> c !== seat));
        }
        else {
            setSelectedSeats(prevState => [...prevState, seat])
            console.log("Added seat: ", seat);
        }
    }

    function handleModalOpen(){
        setIsModalOpen(prevState => !prevState)
    }

    const sitLeftRow = [
        "H3","H4","H5",
        "G3","G4","G5",
        "F3","F4","F5",
        "E3","E4","E5",
        "D3","D4","D5",
        "C3","C4","C5",
        "B3","B4","B5",
    ]

    const sitRightRowTop = [
        "H7","H8",
        "G7","G8",
        "F7","F8"
    ]

    const sitRightRowBottom = [
        "D7","D8",
        "C7","C8",
        "B7","B8",
        
    ]
    const bottomSits = [
        "A3","A4","A5","A7","A8","A9"
    ]


    console.log(selectedSeats);
    const Box = (props : {color : string}) => {
        return (
            <View>
                <View style={[styles.square, {backgroundColor: `${props.color}`}]}>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <Header title="Choose Seat"/>
            <View style={styles.buswindscreenContainer}>
                <Image source={require("../../assets/bus_windscreen.png")} style={styles.buswindscreenStyle}/>
            </View>

            <View style={styles.headerStyles}>
                <View style={styles.headerBox}>
                    <Box color={"#021526"}/>
                    <Text>Available</Text>
                </View>

                <View style={styles.headerBox}>
                    <Box color={"#CCCCCC"}/>
                    <Text>Unavailable</Text>
                </View>

                <View style={styles.headerBox}>
                    <Box color={"#02385A"}/>
                    <Text>Selected</Text>
                </View>
            </View>

            {/* Sits Configuration Container */}
            <View>
                <View style={styles.sitsSubMainContainer}>
                    <View style={styles.sitContainer}>
                        {
                            sitLeftRow.map((sit, index)=> {
                                return (
                                    <Grid_input text={sit} key={index} onPress={()=>handleSelectSeat(sit)}/>
                                )
                            })
                        }
                    </View>

                    <View>
                        <View style={[styles.sitContainerRight, styles.rightTop]}>
                            {
                                sitRightRowTop.map((sit, index)=> {
                                    return (
                                        <Grid_input text={sit} key={index} onPress={()=>handleSelectSeat(sit)}/>
                                    )
                                })
                            }
                        </View>

                        <View style={styles.sitContainerRight}>
                            {
                                sitRightRowBottom.map((sit, index)=> {
                                    return (
                                        <Grid_input text={sit} key={index} onPress={()=>handleSelectSeat(sit)}/>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
                <View style={styles.bottomSits}>
                    {
                        bottomSits.map((sit, index)=> {
                            return (
                                <Grid_input text={sit} key={index} onPress={()=>handleSelectSeat(sit)}/>
                            )
                        })
                    }
                </View>
            </View>
            
            <View style={styles.btnMainContainer}>
                <View>
                    <Text style={styles.textStyles}>Cancel</Text>
                </View>

                <Pressable style={styles.btnContainer} onPress={handleModalOpen}>
                    <Text style={styles.btnText}>Ok</Text>
                </Pressable>
            </View>

            <Modal
                transparent={true}
                visible={isModalOpen}
                animationType ='slide'
            >
                <View>
                    <Pressable style={styles.ModalExitMainContainer} onPress={handleModalOpen}></Pressable>
                    <View style={styles.ModalSubMainContainer}>
                        <View style={styles.ModalTopMainContainer}>
                            <View style={styles.ModalHeaderContainer}>
                                <View>
                                    <IonicIcon name="location-outline" size={30} color={"#021526"} />
                                </View>
                                <View>
                                    <Text style={styles.destinationText}>{tripDetail.tripStart} to {tripDetail.destination}</Text>
                                </View>
                            </View>

                            <View style={styles.detailsMainContainer}>
                                <View style={styles.detailMainBox}>
                                    <Text style={styles.detailStaticText}>Date</Text>
                                    <Text style={styles.detailUserText}>20 Nov</Text>
                                </View>

                                <View style={styles.detailsBox}>
                                    <Text style={styles.detailStaticText}>Time</Text>
                                    <Text style={styles.detailUserText}>{tripDetail.departureTime}</Text>
                                </View>

                                <View style={styles.detailMainBox}>
                                    <Text style={styles.detailStaticText}>Seats</Text>
                                    <View>
                                        {
                                        selectedSeats.map(seats => {
                                            return <Text style={styles.detailUserText}>{seats}</Text>
                                        })
                                        
                                        }
                                    </View>
                                    
                                    
                                </View>
                            </View>

                            {/* ID card form */}

                            <View style={styles.idCardStyles}>
                                <Input placeholder="ID number" onChangeText={(value)=>setUserIDCardNumber(value)}/>
                            </View>

                            <View >
                                <Text style={styles.luggagesStyles}>Travelling with luggages?</Text>
                            </View>

                            <View style={styles.totalPriceContainer}>
                                <Text style={styles.totalPriceHeaderText}>
                                    Total Price
                                </Text>
                                <View>
                                    <Text style={styles.totalPriceText}>
                                        {(selectedSeats.length) * 6000} XAF
                                    </Text>
                                </View>
                            </View>

                            
                        </View>

                        <Pressable style={styles.payBtn} android_ripple={{color : "#021526"}} onPress={()=> navigation.navigate("TicketDownload")}>
                            <Text style={styles.payBtnText}>Pay Now</Text>
                        </Pressable>
                    </View>
                </View>
                
            </Modal>
        </View>
    )
}