export default class Postcard extends Component {

    render() {
    
    return (
    
    <View style={styles.container}>
    
    <View style={styles.cardContainer}> <View style={styles.authorNameContainer}> 
    <Text style={styles.authorNameText}> {this.props.post.author}
    
    </Text>
    
    </View>
    
    <Image
    source={require('../assets/verao.jpg')} style={styles.postImage}
    />
     <Image
    source={require('../assets/cidade-luz.jpg')} style={styles.postImage}
    />
     <Image
    source={require('../assets/aventura.jpg')} style={styles.postImage}
    />
     <Image
    source={require('../assets/viagem.jpg')} style={styles.postImage}
    />
     <Image
    source={require('../assets/explorar.jpg')} style={styles.postImage}
    />
    
    <View style={styles.captionContainer}> 
    <Text style={styles.captionText}> 
    {this.props.post.caption}
    
    </Text>
    
    </View>
    
    </View>
    
    </View>
    
    );
    
    }
    
    }

    const styles = Stylesheet.create({ 

        container: {
            flex: 1,
        },
           
        cardContainer: { 
            margin: 10, 
            backgroundColor: "white",
            borderRadius: 10, 
            padding: 15
        
        }, 

        authorNameContainer: { 
            flex: 0.85,
            justifyContent: 'center'
         },
        
        
        authorNameText: { 
            fontSize: 20
        
        },

        postImage: {
        
        marginTop: 10, 
        resizeMode: "contain", 
        width: '100%', 
        alignself: 'center', 
        height: 275
        
        }, 
        captionText: {
            paddingTop: 10
        } 
        
    });
        
        
