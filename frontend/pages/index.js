import { Contract, providers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";

import {
  CRYPTODEVS_DAO_ABI,
  CRYPTODEVS_DAO_CONTRACT_ADDRESS,
  CRYPTODEVS_NFT_ABI,
  CRYPTODEVS_NFT_CONTRACT_ADDRESS,
} from "../constants";
import styles from "../styles/Home.module.css";

export default function Home() {

  const [treasuryBalance, setTreasuryBalance] = useState("0");

  const [numProposals, setNumProposals] = useState("0");

  const [proposals, setProposals] = useState([]);

  const [nftBalance, setNftBalance] = useState(0);

  const [fakeNftTokenId, setFakeNftTokenId] = useState("");
  // One of "Create Proposal" or "View Proposals"
  const [selectedTab, setSelectedTab] = useState("");

  const [loading, setLoading] = useState(false);

  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();


  const connectWallet = async () => {
      try {
        await getProviderOrSigner();
        setWalletConnected(true);
      } catch (error) {
        console.error(error);
      }
    };

   const getDAOTreasuryBalance = async () => {
    try {
      const provider = await getProviderOrSigner();
      const balance = await provider.getBalance(
        CRYPTODEVS_DAO_CONTRACT_ADDRESS
      );
      setTreasuryBalance(balance.toString());
    } catch (error) {
      console.error(error);
    }
  };


  const getNumProposalsInDAO = async () => {
      try {
        const provider = await getProviderOrSigner();
        const contract = getDaoContractInstance(provider);
        const daoNumProposals = await contract.numProposals();
        setNumProposals(daoNumProposals.toString());
      } catch (error) {
        console.error(error);
      }
    };


return()
}
