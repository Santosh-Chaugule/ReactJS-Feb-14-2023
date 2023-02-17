
//import area
import React from 'react';
import ReactDOM from 'react-dom/client';


//Every compaonent have its own data/states
class A extends React.Component {
  //1.Properties



  //2.Constructor
  constructor() {
    super();
    this.state = {
      name: "Anuradha",
      surname: "Patil",
      address: "Karad"
    }//state initialization


  }
  //3.Methods

  render() {

    this.setState({
      ...this.state,
      name: "Swati"
    });
    return <>
      <h1>Oklabs {this.state.name}{this.state.surname}</h1>
      <h1>OKLABS{this.state.address}</h1>
      <h1>{this.props.name}</h1>
      <h1>{this.props.surname}</h1>
      <h1>{this.props.children}</h1>
    </>

  }


}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <A name="Santosh" surname="CHAUGULE">Kolhapur</A>
  </>
);

//public/index.html(view)
//src/index.js(logic)
//package.json(Dependancy)
//How Reactjs project load/start
//npm start--->rect start command execute the index.js file--->public/index.html
//1)webpack bundlar(All Assets bundel into single file)

//2)Babel Compiler(javascript compiler-->New JS code into Old JS code) 