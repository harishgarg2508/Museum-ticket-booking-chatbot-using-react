import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: 'yellow',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: 'white',
  botFontColor: 'blue',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const ChatbotComponent = ({ steps, floating }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={floating} />
    </ThemeProvider>
  );
};

export default ChatbotComponent;