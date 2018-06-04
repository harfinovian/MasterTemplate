import {
    StyleSheet
} from 'react-native';
import { primaryColor } from './Const';

const GlobalStyle = StyleSheet.create({
    headerBox:{
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: '#fff'
    },
    titleText: {
        fontSize: 18,
        color: '#2E2E2E',
        fontWeight: "bold"
    },
    titleRow:{
        flexDirection:'row', 
        marginBottom: 10 
    },
    subtitleText:{
        color: 'rgba(46, 46, 46, 0.9)',
    },
    subtitleRow:{
        flexDirection:'row'
    },
    statusText:{
        fontSize: 14,
        color: 'rgba(46, 46, 46, 0.9)',
        fontWeight: "bold"
    },
    statusTextAlign:{
        flex: 0.5, 
        flexDirection:'row', 
        justifyContent: "flex-end",
    },
    itemTextAlign:{
        flex: 0.5, 
        flexDirection:'row'
    },
    headingText:{
        color: 'rgba(46, 46, 46, 0.9)',
        fontSize: 14,
        fontWeight: "bold"
    },
    listItemHeadingText:{
        color: 'rgba(46, 46, 46, 0.9)',
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 20, 
        marginBottom: 10, 
        textAlign: "center"
    },
    contentText: {
        color: 'rgba(46, 46, 46, 0.9)',
        textAlign: "justify"
    },
    footerTab:{
        backgroundColor: "rgba(62, 62, 62, 1)", 
        flexDirection: "row", 
        justifyContent: 'center'
    },
    rejectButton:{
        flex: 0.3, 
        borderWidth: 2, 
        borderColor: "#E98800", 
        backgroundColor:'rgba(233, 136, 0, 0.07)', 
        minHeight: 40
    },
    rejectButtonText:{
        color: "#E98800", 
        fontWeight: "bold", 
        fontSize: 14
    },
    notSentButton:{
        flex: 0.3, 
        borderWidth: 2, 
        borderColor: "#C52121", 
        backgroundColor:'rgba(197, 33, 33, 0.07)', 
        minHeight: 40
    },
    notSentButtonText:{
        color: "#C52121", 
        fontWeight: "bold", 
        fontSize: 14
    },
    approveButton:{
        flex: 0.3, 
        borderWidth: 2, 
        borderColor: "#37C521", 
        backgroundColor:'rgba(55, 197, 33, 0.1)', 
        minHeight: 40
    },
    approveButtonText:{
        color: "#37C521", 
        fontWeight: "bold", 
        fontSize: 14
    },
    angleRightStyle:{
        fontSize: 20, 
        color:"rgba(46, 46, 46, 0.5)"
    },
    whiteColor:{
        alignSelf:'center',
        color: "#fff",
        fontSize: 28
    },
    modalStyle:{
        backgroundColor: "#fff", 
        padding: 20, 
        borderRadius: 10
    },
    modalTitle:{
        textAlign: "center", 
        fontWeight: "bold", 
        color: '#2E2E2E', 
        marginBottom: 25
    },
    modalContent:{
        textAlign: "center", 
        color: '#2E2E2E', 
        marginBottom: 10
    },
    
    yesButton:{
        marginRight: 10, 
        backgroundColor: primaryColor, 
        flex: 0.5
    },
    noButton:{
        marginLeft: 10, 
        backgroundColor: "rgba(199, 17, 1, 0.65)", 
        flex: 0.5
    },
    buttonText:{
        color: "#fff", 
        fontWeight: "bold", 
        fontSize: 16
    },

    // Passive Tab Style
    tabBarStyle:{
        backgroundColor: primaryColor
    },
    tabTextStyle:{
        color: '#fff'
    },
    tabBarUnderlineStyle:{
        backgroundColor: "#fff"
    },

    // Active Tab Style
    tabActive:{
        backgroundColor: primaryColor
    },
    tabTextActive:{
        color: '#fff'
    }
});

export default GlobalStyle;