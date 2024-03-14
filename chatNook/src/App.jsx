import './App.css'
import Message from './components/chatMessage';
import ChatHeader from './components/chatHeader';
import ChatFooter from './components/chatFooter';
function App() {

  return (
    
   <div className='bg-white h-screen w-3/4 ms-auto'>
    <ChatHeader/>
    <Message/>
    <Message/>
    <ChatFooter/>
   </div>
  )
}

export default App
