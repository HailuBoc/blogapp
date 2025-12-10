import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
            <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', width: '100%'}}>
                <h1 style={{margin:0}}><Link to="/" style={{color:'#fff', textDecoration:'none'}}>My Blog</Link></h1>
                <nav>
                    <Link to="/" style={{color:'#fff', textDecoration:'none', marginRight: '15px'}}>Home</Link>
                    <Link to="/create" style={{color:'#e0d8d8ff', textDecoration:'none'}}>Create Post</Link>
                </nav>
            </div>
        </header>
        <main style={{paddingTop: '20px'}}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
