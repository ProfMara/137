import axios from "axios";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
} from "react-native";

export default class Detalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalhes: {},
      imgPath: "",
    };
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

  render() {
    const { detalhes, imgPath } = this.state;
    if (detalhes != undefined) {
      return (
        <ImageBackground
          source={require("../imgs/bg.png")}
          style={styles.container}
        >
          <Image source={imgPath} style={styles.img} />
          <Text style={styles.txt}>Distância da Terra: 0 anos luz</Text>
          <Text style={styles.txt}>Gravidade: 0 m/s²</Text>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          source={require("../imgs/bg.png")}
          style={styles.container}
        >
          <Text style={styles.txt}>Carregando...</Text>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  nome: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    width: "80%",
    alignSelf: "center",
    fontFamily: "monospace",
  },
  txt: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontFamily: "monospace",
  },
  img: {
    height: 250,
    width: 250,
    marginTop: 50,
    alignSelf: "center",
  },
  container2: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
