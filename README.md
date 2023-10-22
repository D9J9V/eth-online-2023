
# **Geppetto: Decentralized Accountant with Web 3 embedded**

📖 **TL;DR**

Accountability software system designed for enterprises, entrepreneurs and small businesses alike. The software enables employees, managers and directors to record and track both internal and external transactions or business day to day operations by simply sending messages to a chat. 

This innovative program has the ability to understand the information contained in the messages written in natural language, and seamlessly transform it into an accounting entry. How does this work? The program detects the different financial statement accounts, quantities, dollar amounts and types of business transactions/operations from the messages sent. This triggers recording of transactions to the blockchain according to the information given in the accounting entries, and  updates financial statements in real time. 

☑️ **Functionalities and Capabilities**

Geppetto is an interactive assistant designed to simplify and streamline the way businesses handle their accounting. The interface is reminiscent of a chat between the user and Geppetto, making complex processes feel natural and intuitive.

🔹 **Recording Transactions**: Users can relay transactions that have taken place in real life related to their venture. Geppetto then utilizes this information not only to record the suitable accounting entries onto the blockchain but also to construct comprehensive financial statements according to the International Financial Recording Standards, and to General Accepted Accounting Principles.

🌍 **Why Geppetto? The Genesis**

As entrepreneurs, we've tasted the bitter pill of a startup's demise due to opaque processes and poor accounting management. This issue doesn't just affect profitability; it creates barriers to financial inclusion. In a world driven by technological advancements, we believed it was time for an even playing field.

**Geppetto's Architecture**

https://www.notion.so/d9j9v/What-is-Geppetto-1151ef3b64ee4eb19cce4aea968bebff?pvs=4#770733fe3bfd4473856962a0e71c4357
https://www.notion.so/d9j9v/What-is-Geppetto-1151ef3b64ee4eb19cce4aea968bebff?pvs=4#d30d9d0f5411421490245ce98adb1052
![image](https://github.com/D9J9V/eth-online-2023/assets/81653270/377961d8-0cd3-4818-89b0-446081c893d1)


**The Promise of Decentralized Accounting**

Utilizing Smart Contracts, Geppetto establishes decentralized accounting contracts, bringing reliability and transparency to the forefront. Our metric of success aligns with the cost-efficiency principle, emphasizing that accounting costs shouldn't impede a business's efficacy. To this end, our modern technological stack leverages L2 EVM-compatible solutions and off-chain decentralized tables, ensuring Geppetto is fast, efficient, and scalable.

🚧 **Work In Progress**

🔹 **Business Inquiries**: A business is a dynamic entity, and stakeholders often need quantitative insights on the fly. Whether it's inquiring about stock levels or monthly sales metrics, Geppetto is equipped to provide accurate and timely answers. Due to our architecture this is as simple as checking an address (0x….N) balance of our token. Currently we are not displaying it

🔹 **Dashboard** Beyond the chat interface, a visually appealing and insightful dashboard allows users to gauge performance metrics and KPIs. Be it tracking Month-on-Month revenue or understanding sales trends, the dashboard serves as a business's analytical cockpit.

The idea of using the EVM as a State Machine of the firm, as a subset of the State Machine of the world isn’t new, but it hasn’t been exploited due to several factors such as:

- Accounting can be hard, intricate and elaborate on it’s own. You must adhere to certain principles of recording transactions, and in order for them to be coded they must be exhaustively analized in an algorithmic manner, take for example the review made by Chi- Chun Chou, Taiwei Wang, et. al. in 2021 for American Accounting Association (Journal of Information Systems, vol. 35 no. 3)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4027ff6a-d19b-42ff-a4b0-ad2dc64522bc/b800eb86-a7c3-4a95-bad5-e98a5d2f36f3/Untitled.png)

- Even if firms can act pseudo-anonymously, it’s important to preserve privacy as this information should not be for public reach if not wanted to. This also leads to the role of permissioning even between firm members.
- There’s a lack of smart contracts that adhere to the accounting standards in a reputable manner.
- Some proponents in the blockchain sphere argue for the use of private blockchains as the solution.

Our approach is different. Instead of using a private blockchain, we leverage several foundational aspects of the EVM, ERC-20, and cryptography to tackle the previously mentioned issues, to ensure privacy, accuracy, and low costs.

### Homomorphic Encryption

One of the mainstays of our project is the application of Homomorphic Encryption. This mathematical principle allows for the preservation of sums under elliptical transformation. In simpler terms, it permits the validation of accounting balances without revealing the values of individual transactions. This is depicted in the equation:
a + b = c vs Encr(a) + Encr(b) = Encr(c)

### Deployment on Mantle

For deployment purposes, we utilize Mantle. It requires a unique identifier that will accompany both the contract and the repository.

### Wormhole Messaging

Our journey commences in the abstract chain realm. When there arises a need to send a token to the tangible world – say, a blockchain compatible with ENS, USDC, or another token – Wormhole messaging comes into play.

### Workflow

We plan to use a specific diagram as a workflow guide. It's imperative that we insert an initial step, which will act as an intermediary between the frontend and the interaction with the Tableland contract. This step will:

1. Encrypt our entries.
2. Formulate the transaction parameters that the Safe will relay on our behalf. This involves a combination of Regular Expressions and a Python handler for account cataloging, which ultimately feeds into the Safe CLI.

For instance:
**Input:** "Purchased 2 Santa Cruz frames, model 9182, for $7,000 and paid with my BBVA card."
**Output:**

```
{
C: Inventory (Frames) 7000
D: Accounts Payable (BBVA) 7000
}

```

### XMTP Messaging

Our project also garnered the "Best Encrypted Messages Hack with Lit" prize worth $1,500. It enables sending encrypted messages to email/SMS users using Lit's "Claimable Keys" feature. The experience is tailored such that a user can securely send a message via AGivenDapp by simply inputting the recipient's email or phone number.

### Tableland Prizes

Our team also participated in the Tableland challenge, where we built and deployed our application using the Tableland Studio web application.

### ZK Code Implementation

For the ZK component, we used the Noir library. Our code ensures that double-entry bookkeeping adheres to its primary principle – that debits and credits must always equal each other. We incorporated the Poseidon hash function from the dep::std::hash::posseidon::bn254 library for necessary hashing operations.

### Other Collaborations

- Scroll’s Sepolia Testnet.
- Best utilization of Polygon zkEVM.
- Integration with the Safe{Core} Protocol and Safe{Core} Account Abstraction SDK.

In essence, our project brings together diverse technologies to address the twin challenges of permissioning and privacy in blockchain accounting. It's a harmonious blend of traditional accounting principles with cutting-edge cryptographic techniques, all aimed at ensuring transparency and trustworthiness in the blockchain space.

Also, the user (employee, manager, or director) is enabled to search for data points or specific financial statements in the same way: with natural language sent messages in the chat format. In this way the software will, again, find categorized variables or accounting accounts, the database, or final dashboard and metric and give the output to the user.

## Conceptual Framework

The importance and greatness of Onchain accounting can be explained in a structured manner by first introducing the foundational concepts, presenting their advantages, and then addressing potential challenges and solutions. 

1. **Introduction and Historical Context**:
    - The term ‘‘smart contract’’ was first introduced in 1994 by Nick Szabo and refers to self-automated computer programs that can carry out the terms and conditions of any real-world contract (Szabo 1997).

2. **Smart Contracts and Their Significance**:
    - The results show that smart contracts can be created to fully address complex revenue recognition scenarios according to the Generally Accepted Accounting Principles (GAAPs).
    - Financial assets can be transmitted, and legal ownership of assets can be transferred from one party to another using smart contracts under Ethereum.
  
3. **Ethereum and its Contribution**:
    - Ethereum depends on smart contracts to collect local states and stores the history of the state changes of transactions recorded on it. 
    - Ethereum: The World State Machine. A function call from a smart contract often ends a stage and then transits the contract into the next stage at a certain point in time (Solidity 2020). This resembles the business process of state transition. Once a transaction is confirmed and stored on Ethereum, it automatically becomes a part of the world state machine, performing functions similar to banks or exchanges but on a broader scale.

4. **The Importance of Shared Ledgers in Blockchain Networks**:
    - Allows every participant to own and share a replicated copy of the ledger as well as the programs (i.e., smart contracts) that update the ledger. This contrasts the traditional system where private programs are used to update private ledgers.
    - Reducing information asymmetry: In an ideal world, the degree of information asymmetry would be mitigated with most transactions stored on the blockchain.

5. **Advanced Tokenization and its Nuances**:
    - “Abstract Chain”: The amount of revenue, measured by a dollar amount, does not carry purchase power.
    - As suggested by Chow, Hwang, et. al. Geppetto is publishing specific smart contracts like ERC-20. The distinction between tradable and non-tradable tokens ensures proper representation of data elements, like the revenue number.

6. **Benefits in Audit and Verification**:
    - Audit Trails: Every transaction generated by a contract will be referenced back to the contract, demonstrating the technical feasibility of the DAC model and ensuring transparency and traceability.

7. **Challenges and Concerns**:
    - Confidentiality issues: Despite using public key infrastructure to mask identities, there's potential for advanced technologies to break encryption. The role of technologies like Big Data analytics and quantum computing in connecting identities to asset addresses raises concerns over confidentiality.

8. **Looking Forward**:
    - It is vital for researchers to explore confidentiality issues further, given the potential risks. Future endeavors should focus on ensuring the safety and confidentiality of transactions on blockchain networks.

This structure first establishes the foundational concepts and gradually builds on their significance, applications, and challenges. The narrative progression allows readers to understand the historical context, applications, and future concerns of Onchain accounting.
