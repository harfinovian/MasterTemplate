
class modal extends Component {
    constructor(props) {
      super(props);
      this.state = {isShowingText: true};
  
      // Toggle the state every second
      setInterval(() => {
        this.setState(previousState => {
          return { isShowingText: !previousState.isShowingText };
        });
      }, 1000);
    }
  
    render() {
      let display = this.state.isShowingText ? this.props.text : ' ';
      return (
        <Text>{display}</Text>
      );
    }
  }

export function viewModal(content) {
    
    return <Modal avoidKeyboard={Platform.OS === "ios" ? true : false} isVisible={this.state.isModalVisible} onBackButtonPress={this._hideModal} onBackdropPress={this._hideModal} backdropOpacity={0.5}>
        <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}>
            {modalContent}
        </View>
    </Modal>
}