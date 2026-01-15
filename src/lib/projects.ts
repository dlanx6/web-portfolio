import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "DocChain",
    description: "A blockchain-based transcript verification system developed as part of an undergraduate thesis project, leveraging Solidity and ERC-721 NFTs to provide tamper-proof academic transcript authentication using Keccak256 for cryptographic hashing.",
    links: {
      web: "https://doc-chainv2.vercel.app/",
      repo: "https://github.com/KingNoran/DocChainv2"
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    features: [""],
    thumbnail: "./assets/doc-chain-thumbnail.png",
  },
  { 
    title: "Connect PH",
    description: "A real-estate marketplace web application developed as a showcase project for school event.",
    links: {
      web: "https://connectph-market.vercel.app/",
      repo: "https://github.com/dlanx6/connect-ph"
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    features: [""],
    thumbnail: "./assets/connect-ph-thumbnail.png",
  },
  { 
    title: "DocChain Transcript Verifier",
    description: "",
    links: {
      web: "https://zksync-sepolia.blockscout.com/address/0x37D18Cc18404d27D096AcD70D518c2a74cBC85d2",
      repo: "https://github.com/dlanx6/DocChain-Transcript-Verifier"
    },
    technologies: ["Solidity", "Foundry", "ERC-721", "ZKSync"],
    features: [""],
    thumbnail: "./assets/verifier-contract-thumbnail.png",
  },
]