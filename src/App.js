import React from "react";
import "./App.css";
import Header from "./components/Header";
import Comment from "./components/Comment";

function App() {
  const comment1 = {
    date: new Date(),
    text: "Hi, I have a good idea, we can talk here together!!!!",
    author: {
      name: "Fransin",
      avatarUrl: "https://v1.spb.ru/gallery/foto-na-dokumenty/usefulinfo/photo1.jpg"
    }
  }

  const comment2 = {
    date: new Date(),
    text: "It is very convenient",
    author: {
      name: "Stan",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoCERGJMP--GcM8pK-Mna37GEyq-g73ooxFcKhl8deqVncQpX"
    }
  }

  const comment3 = {
    date: new Date(),
    text: "How to get out of here? Why did you add me?!!!!!",
    author: {
      name: "Rojer",
      avatarUrl: "http://fotosimf.ru/images/%D1%84%D0%BE%D1%82%D0%BE_%D0%BD%D0%B0_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%BD%D0%B0_%D0%BF%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82.jpg"
    }
  }

  return (
    <div className="App">
      <Header title = "Your messages"/>
      <div className="App-content">
        <Comment author={comment1.author} date={comment1.date} text={comment1.text} />
        <Comment author={comment2.author} date={comment2.date} text={comment2.text} />
        <Comment author={comment3.author} date={comment3.date} text={comment3.text} />
      </div>
    </div>
  );
}

export default App;
