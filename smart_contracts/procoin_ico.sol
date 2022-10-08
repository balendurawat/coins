pragma solidity ^0.8.8;
contract procoin_ico {
    
    // max coins for sale
    uint public max_procoins = 100000;
    
    // usd to procoin conversion rate
    uint public usd_to_procoins = 1000;

    // procoins bought already
    uint public total_procoins_bought = 0;
}