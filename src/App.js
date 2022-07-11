import logo from './logo.svg';
import 'antd/dist/antd.css'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Ballance from './components/Wallet/Ballance';
import ListExpenses from './components/Wallet/ListExpenses';
import Modal from './components/Wallet/Modal';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Product from './components/Product/Product';
import Paginate from './components/Paginate/Paginate';
import axios from 'axios';
import TestLeve1 from './components/Test/TestLeve1';
import ProviderContext from './context/ProviderContext';

function App() {

    const [listUser, setListUser] = useState([]);
    const [Amount, setAmount] = useState(0);
    const [Expenses, setExpenses] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(0);
    const [data, setData] = useState([]);

    console.log(24, listUser);
    
    function registerNewUser (username, password) {
        setListUser([...listUser, {username, password}]);
    }
    useEffect(function(){
        var total = 0
        Expenses.forEach(function(value){
            total += value.money * 1;
        })

        setAmount(total);
    }, [Expenses])

    useEffect(function(){
        axios.get('https://www.nodemy.vn/api/bootcamp-1-s')
        .then(function(res){
            setData(res.data);
        })
        .catch(function(err){
            console.log(err);
        })
    },[])

    function showModal (){
        setIsShow(true);
    }

    function hideModal(){
        setIsShow(false);
    }

    function createExpense(content, money){
        setExpenses([...Expenses, {content, money}]);
    }

    function deleteExpense (index){
        const clone = [...Expenses];
        clone.splice(index, 1);
        setExpenses(clone);
    }

    function updateExpense (content, money){
        const clone = [...Expenses]
        clone[updateIndex] = {content, money}
        setExpenses(clone)
    }

    function selectToUpdate (index){
        setUpdateIndex(index)
    }

    return (
        <div>
            <BrowserRouter>
                <ProviderContext data={data}>
                    <Link to='register'>register</Link>
                    <Header/>
                    

                    <Routes>
                        <Route path='/test' element={<TestLeve1/>} />
                        <Route path='/register' element={<Register registerNewUser={registerNewUser}/>}/>
                        <Route path='/login' element={<Login registerNewUser={registerNewUser}/>}/>
                        <Route path='/profile' element={<Profile/>} />
                        <Route path='/' element={<Home listUser={listUser}/>} />
                        <Route path='/product' element={<Product/>} />
                        <Route path='/wallet' element={
                            <div className="App">
                                <Ballance Amount={Amount}/>
                                <ListExpenses Expenses={Expenses} deleteExpense={deleteExpense} showModal={showModal} selectToUpdate={selectToUpdate}/>
                                <div>
                                    <button onClick={showModal}>+</button>
                                </div>
                                <Modal isShow={isShow} createExpense={createExpense} hideModal={hideModal} updateExpense={updateExpense}/>
                            </div>
                        } />
                        <Route path='/paginate' element={<Paginate/>}/>
                        <Route path='*' element={<h1>404 Error not found</h1>}/>
                    </Routes>

                    <Footer/>
                </ProviderContext>
            </BrowserRouter>
        </div>
    );
}

export default App;
