# Tableland Deploy: Currently at Sepolia
Build & deploy using the Studio: create an account, a project, define table(s), and deploy your app within the Tableland Studio web app. Bonus: use the Studio CLI tool to populate tables with data, Only those with the proper on-chain privileges can *write* to a specific table. Table *reads*, however, **do not have an on-chain operation** and use the Tableland gateway.
In the future, we want to implement a Filecoin Virtual Machine receipt/storage + Tableland
https://sepolia.etherscan.io/tx/0x6ca9fa53cac0edcfdda935fe531ea1493134a95b35a493563e47e3783dbff410
https://studio.tableland.xyz/d9j9v/geppetto/deployments/default/income_statements
https://studio.tableland.xyz/d9j9v/geppetto/deployments/default/balance_sheet

# Scroll Deploy: Currently on Sepolia, (p.d. congrats on mainnet!)
🎯Best on Scroll: (3x $2000, 10x $1000)
https://sepolia.scrollscan.com/tx/0xa26c07212f1cc842600a958cb717a1ef126c01464894e05f620f8550a932ac84
(Note: Currently trying to work out Verification, as an import (Regarding ERC721) is not happening correctly on Verification page)

# PolygonZkEVM Deploy: Currently on Testnet
🔀 $2,500 Best use of zkEVM 
https://testnet-zkevm.polygonscan.com/tx/0x25509a568e7abc06504d82333d022167dcb25764fea0132153e94ca24648cf8a

# Mantle Deploy: Currently on 
https://explorer.mantle.xyz/block/16942337/transactions!
https://twitter.com/D9J9V/status/1716048475245215833 

# SAFE

To simulate the accounting environment, we use SAFE. This is possible because its management of multiple abstract accounts on Ethereum and EVM-compatible networks allows us to control multiple accounts from a single smart contract.

With this control, we can transfer and mint ERC-20 tokens between different accounts to simulate accounting entries quickly, efficiently, and accurately.

(Illustrative image of SAFE Wallet, however the SAFE SDK was used)To be eligible, developers must build with one of the following options:

![image](https://github.com/D9J9V/eth-online-2023/assets/81653270/2dd99dce-22ac-4381-85b9-5ddb3a31c56f)


![image](https://github.com/D9J9V/eth-online-2023/assets/81653270/f7824fdb-c388-4a80-9bb6-968b86994461)


[Safe{Core} Protocol](https://github.com/safe-global/safe-core-protocol-specs) (integrating or implementing any part of the Protocol). 

[Safe{Core} Account Abstraction SDK](https://github.com/safe-global/safe-core-sdk) (integrating at least one of the existing kits).

# Noir by Aztec
```
// Noir.
use dep::std::hash::posseidon::bn254; //necesario pa hashear

struct Entry {
    accounts: Vec<u8>,  // Lista de cuentas
    amounts: Vec<u8>,      // Lista de montos
    sum: Field,               // Suma de los montos
}

impl Entry {
    // Constructor que toma las cuentas y montos y calcula la suma automáticamente
    fn new(accounts: Vec<u8>, amounts: Vec<u8>) -> Self {
        let sum = amounts.iter().sum();
        Entry { accounts, amounts, sum }
    }
}
#[test]
fn assert_double_entry(debits: &Entry, credits: &Entry) -> bool {
    // Assert que la suma de los debits es igual a la suma de los credits
    assert(debits.sum = credits.sum)
}

fn main() {
    let debits = Entry::new(vec![00111, 03454], vec![100.0, 200.0]);
    let credits = Entry::new(vec![99910], vec![300.0]);
    if assert_double_entry(&debits, &credits) {
        println!("La partida doble es correcta.");
    } else {
        println!("La partida doble no es correcta.");
    }
}
```
