// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Migrations is Ownable {
    uint public last_completed_migration;

    constructor() Ownable(msg.sender) {}

    function setCompleted(uint completed) public onlyOwner {
        last_completed_migration = completed;
    }
}