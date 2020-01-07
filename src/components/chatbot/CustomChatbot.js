import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  const theme = {
    background: "white",
    fontFamily: "Nunito, Josefin Sans, sans-serif",
    headerBgColor: "#b28451",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#b28451",
    botFontColor: "#fff",
    userBubbleColor: "#101d2c",
    userFontColor: "#fff"
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to Eric's Website",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please enter your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to do"
    },
    {
      id: "Asking options to do",
      message:
        "Hi {previousValue}, Please chose what you want to know about me!",
      trigger: "Displaying options to know"
    },
    {
      id: "Displaying options to know",
      options: [
        {
          value: "Web Developer",
          label: "Web Developer",
          trigger: "About Web Developer"
        },
        {
          value: "Android Developer",
          label: "Android Developer",
          trigger: "About Android Developer"
        }
      ]
    },
    {
      id: "About Web Developer",
      message:
        "I am a full stack developer with two years of experience in ReactJs.",
      trigger: "Asking Anything else"
    },
    {
      id: "About Android Developer",
      message: "I have one year in developing Android App.",
      trigger: "Asking Anything else"
    },
    {
      id: "Asking Anything else",
      message: "Is there anything else you want to know?",
      trigger: "Anything else"
    },
    {
      id: "Anything else",
      options: [
        {
          value: "Yes, I want",
          label: "Yes, I do",
          trigger: "Displaying options to know"
        },
        {
          value: "No, that's enough",
          label: "No, that's enough",
          trigger: "Done"
        }
      ]
    },
    {
      id: "Done",
      message: "Thank You, Have a great day !!",
      end: true
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default CustomChatbot;
