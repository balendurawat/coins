pragma solidity ^0.8.8;
contract procoin_ico {
    
    // max coins for sale
    uint public max_procoins = 100000;
    
    // usd to procoin conversion rate
    uint public usd_to_procoins = 1000;

    // procoins bought already
    uint public total_procoins_bought = 0;


    mapping(address => uint) equity_procoin;
    mapping(address => uint) equity_usd;

    modifier can_buy_procoin(uint usd_invested) {
        require(usd_invested * usd_to_procoins + total_procoins_bought <= max_procoins);
    }

    function equity_in_procoins(address investor) external constant returns(uint){
        return equity_procoin[investor];
    }


    function equity_in_usd(address investor) external constant returns(uint){
        return equity_usd[investor];
    }



}