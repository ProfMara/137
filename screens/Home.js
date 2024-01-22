import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default class Home extends Component {
  constructor() {
    super();
    this.state = { lista: [] };
  }

  definirDetalhes = (detalhes) => {
    var tipo = detalhes.tipo;
    let imgPath = "";
    switch (tipo) {
      case "Gas Giant":
        imgPath = require("../imgs/Gas_Giant.png");
        break;
      case "Terrestrial":
        imgPath = require("../imgs/Terrestrial.png");
        break;
      case "Super Earth":
        imgPath = require("../imgs/Super_Earth.png");
        break;
      case "Neptune-Like":
        imgPath = require("../imgs/Neptune-like.png");
        break;
      default:
        imgPath = require("../imgs/Gas_Giant.png");
        break;
    }
    this.setState({
      detalhes: detalhes,
      imgPath: imgPath,
    });
  };

  escolherCor = (i) => {
    var cor = ["#fbffd5", "#ffefff", "#ede5ff", "#eafff4"];
    var n = i % 4;
    return cor[n];
  };

  renderItem = ({ item, index }) => {
    this.definirDetalhes(item);
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Detalhes")}
        style={[styles.listItem, { backgroundColor: this.escolherCor(index) }]}
      >
        <Image source={this.state.imgPath} style={styles.cardImage} />
        <View style={styles.nameCardPlanet}>
          <Text style={styles.title}> </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    var { lista } = this.state;
    if (lista.length > 0) {
      return (
        <ImageBackground
          source={require("../imgs/bg.png")}
          style={styles.container}
        >
          <View style={styles.upperContainer}>
            <Text style={styles.headerText}>Mundo dos Planetas</Text>
          </View>
          <View style={styles.lowerContainer}>
            <FlatList
              data={lista}
              renderItem={this.renderItem}
              numColumns={2}
            />
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          source={require("../imgs/bg.png")}
          style={styles.container}
        >
          <Text style={styles.headerText}>Carregando...</Text>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  upperContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "monospace",
  },
  lowerContainer: {
    flex: 0.9,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainerText: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "monospace",
    textAlign: "center",
  },
  listContainer: {
    backgroundColor: "#eeecda",
  },
  listItem: {
    padding: 15,
    margin: "2.5%",
    width: "45%",
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    opacity: 0.7,
  },
  cardImage: {
    width: 100,
    height: 100,
    paddingTop: 5,
    alignSelf: "center",
    alignItems: "center",
  },
  nameCardPlanet: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
  },
});
