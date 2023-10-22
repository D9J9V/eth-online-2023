// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// *(10 **18)

contract Accounting is ERC20, ERC20Burnable, Ownable{
    IERC20 private _token;
    mapping (string => Item_inventory) inventory;
    constructor(
        string memory name,
        string memory symbol
    ) ERC20(name, symbol) {_token = IERC20(this);}

    struct Item_inventory {
        string item_name;
        uint256 cost;
        uint256 price;
        uint256 stock_available;
    }

    modifier check_Funds (address acc, uint256 amount) {
        require(_token.balanceOf(acc) >= amount, "Insufficient funds in account.");
        _;
    }

    function money_In(uint256 amount) public onlyOwner {
        // Cash
        _mint(0x48E61d95512fd55b4a53D9aba07143c1374F9E19, amount);
        // Equity
        _mint(0xf8c6815d8B15461615EF54445f7cE464163b1A4D, amount);
    }

    // Transfer from the Cash account to the Inventory account
    function buy_Inventory(string calldata name_item, uint256 stock_purchased, uint256 unitary_cost, uint256 price_tag) public onlyOwner 
        check_Funds(0x48E61d95512fd55b4a53D9aba07143c1374F9E19, unitary_cost*stock_purchased){
        // Cash to Inventory
        _token.transferFrom(0x48E61d95512fd55b4a53D9aba07143c1374F9E19, 
                            0x53dfc625c56F281D9D6cDe98A0c5C886924899ae, unitary_cost*stock_purchased);
        // Update inventory
        if(inventory[name_item].stock_available == 0){
            Item_inventory memory item;
            item = Item_inventory(name_item, unitary_cost, price_tag, stock_purchased);
            inventory[name_item] = item;
        } else{
            inventory[name_item].stock_available = inventory[name_item].stock_available + stock_purchased;
        }
    }

    function sale(string calldata name_item, uint256 stock_sold, uint256 unitary_price) public onlyOwner{
        uint256 amount = unitary_price*stock_sold;
        // Inventory to COGS
        _token.transferFrom(0x53dfc625c56F281D9D6cDe98A0c5C886924899ae, 
                            0x7De730E2B090BEfC8C7Ee5Ed172Cc79170712b69, 100);
        // Cash
        _mint(0x48E61d95512fd55b4a53D9aba07143c1374F9E19, amount);
        // Sales Rev
        _mint(0x5e64Fd316d35Bce9464018e7F9B3360246fdDD10, amount);
        // Update inventory
        inventory[name_item].stock_available = inventory[name_item].stock_available - stock_sold;
    }

    function return_Sale(string calldata name_item, uint256 stock_returned, uint256 unitary_cost) public onlyOwner{
        uint256 amount = unitary_cost*stock_returned;
        // COGS to Inventory
        _token.transferFrom(0x7De730E2B090BEfC8C7Ee5Ed172Cc79170712b69, 
                            0x53dfc625c56F281D9D6cDe98A0c5C886924899ae, amount);
        // Burn Cash 
        burnFrom(0x48E61d95512fd55b4a53D9aba07143c1374F9E19, amount);
        // Burn Sales Revenue
        burnFrom(0x5e64Fd316d35Bce9464018e7F9B3360246fdDD10, amount);
        // Update inventory
        inventory[name_item].stock_available = inventory[name_item].stock_available + stock_returned;       
    }

}