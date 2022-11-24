// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ICryptoDevsNFT.sol";
import "./IFakeNFTMarketplace.sol";

contract CryptoDevsDAO is Ownable {
    struct Proposal {
        uint256 nftTokenId;
        uint256 deadline;
        uint256 yayVotes;
        uint256 nayVotes;
        bool executed;
        mapping(uint256 => bool) voters;
    }

    mapping(uint256 => Proposal) public proposals;

    uint256 public numProposals;

    IFakeNFTMarketplace nftMarketplace;
    ICryptoDevsNFT cryptoDevsNFT;
}
