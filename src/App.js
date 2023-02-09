import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return(
    <ChatEngine 
      height='100vh'
      projectID='8822d250-bdc7-4291-8b24-7b49fd59698c'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  )
}

export default App;