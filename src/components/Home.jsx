import React from 'react'
import { useState } from 'react'
import '../style/home.scss'
import {ethers} from 'ethers'


function Home() { 
    const [defaultAccount,setDefaultAccount] = useState(null)
    const [userBalance, setUserBalance] = useState(null)

    
    const connectWallet = () =>{
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
                accountChangeHandler(result[0]);
            })
        }else{
            console.log("error")
        }
    }

    const accountChangeHandler = (newAccount) =>{
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    }

    const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
        if(userBalance <= 0){
            console.log("yönlendirme");
        }
	};



  return (
    <div className="home">
        <div className="homeContent">
            <h1>{defaultAccount}</h1>
            <h1>{userBalance}</h1>
            <button 
            onClick={connectWallet}
            className="homeContent-button"
            >
            Connect Wallet
            </button> 
        </div>
    </div>
  )
}

export default Home