import "./App.css";
import Welcome from  "./Welcome.js";
import Info from "./Info.js";
import Ders from "./Ders.js";
import Navi from "./Navi.js";
import ProductList from "./ProductList.js";
import CategoryList from "./CategoryList";
import {PropTypes} from "prop-types"; 
import {Container,Row,Col} from 'reactstrap';
import React, { Component, useState } from 'react';


export default class App extends Component {
  
    state = {
    currentCategory  : ""
        };
  
  changeCategory = (category)=>{
    this.setState({currentCategory:category.categoryName})
}
  render() {
    let categoryInfo = {title:"CategoryList"};
    let productInfo = {title:"ProductList"}
  return(
    <div>
    <Container>
      <Row> 
      <Navi /> 
      </Row>
      <Row>
      <Col xs="3">
      <CategoryList currentCategory = {this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
      </Col>
      <Col xs="9"> <ProductList currentCategory = {this.currentCategory} info={productInfo}/>
      </Col>  
      </Row>
    </Container>  
    <ButonDurum></ButonDurum>
    <Info></Info>
  </div>);
   }
  }

  function ButonDurum()
  {
    const  [baslik,setBaslik] = useState("")
    const [sayac,setSayac] = useState(0)

    const baslikVer = ()=>{
      setBaslik("Bu Yeni bir Baslik")
    }

    const sayacArttir = ()=>{
      setSayac(sayac + 1)
    }

    return(
      <div>
        <p> Baslik : {baslik}</p>
        <p> Sayac : {sayac} </p>
        <button onClick={baslikVer}> Baslik Ver</button>
        <button onClick={sayacArttir}>Sayac Yukari</button>
      </div>
    );
  }


  function ButtonState()
  {
    const [title,setTitle] = useState("");
    const [counter,SetCount] = useState(0);
    
    const titleUpdate = ()=>{
        setTitle("Yeni Baslik"); 
    }

    const counterUpdate = ()=>{
      SetCount(counter +1); 
    }

    return(
      <div>
            <p> Title : {title}</p>
            <p> Counter : {counter}</p>
            <button onClick={titleUpdate}> Set Title </button>
            <button onClick={counterUpdate}> Counter Up </button>
      </div>
    );
  }


function App2() {
  return(
    <div>
      <Test/>
    <Welcome name="Omer" title="VMYO Vezirkopru"/>
    <Welcome name="Ahmet" />
    <Welcome name="Ayse" />
    <Isim isim="test" sayi = {23}/>
    <Isim />
    <Isim isim="deneme"/>
    <Ders ders="true"> </Ders>
  </div>
  );

}


function Test(){
  return <div>
    <button>Test</button>
  </div>
}



function Isim(props) {
 // props.sayi = 55;
  //const deger = isim
  //const sayi = props.sayi
  return <form>
    <Info />
    <input type="text" value={props.isim} />
    <p> {props.sayi} </p>
  </form>;
}

Isim.defaultProps = {
   sayi : 100,
   isim : "Bilinmeyen"
}

Isim.propTypes = {
  sayi : PropTypes.number,
  isim : PropTypes.string,
}


