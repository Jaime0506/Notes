import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
    scrollRef = React.createRef();

    constructor(props){
        super(props);

        this.state = {
            selectedIndex: 0
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({ selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1 }),
            () => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex,
                })
            })
        }, 3000)
    }

    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;

        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({ selectedIndex })
    }

    render () {
        const { images } = this.props; 
        const { selectedIndex } = this.state;

        return (
            <View style={styles.containerCorousel}>
                <ScrollView 
                    horizontal 
                    pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}>
                    {images.map(image => (
                        <Image
                            key={image}
                            source={{ uri: image}}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image, index)  => (
                        <View 
                            key={image}
                            style={[styles.whiteCircle, {opacity: index === selectedIndex ? 0.5 : 1}]}
                        />
                    ))}
                </View>
            </View>
        )
    }
}

export {BackgroundCarousel};

const styles = StyleSheet.create({
    containerCorousel: {
        height: 260, 
        width: "55%",  
    },
    image: {
        height: "100%",
        width: DEVICE_WIDTH,
    },
    circleDiv: {        
        bottom: 20,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff",
    },
})
