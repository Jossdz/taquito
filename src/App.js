import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTaco } from './redux/actions'
import ReactMarkdown from 'react-markdown'

function App() {
  const { taco, loadingTaco } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTaco())
  }, [])

  return (
    <div >
      {!loadingTaco ? <ReactMarkdown source={taco.base_layer?.recipe} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
