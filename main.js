

Moralis.start({ serverUrl: "https://spkiamxzjop9.usemoralis.com:2053/server", appId: "njHtJQL2DgiFjpbZb0LHKQo8IfzJ6BN5iBVFytVy" });


function fetchNFTMetadata(NFTs){
    for(let i = 0; i < NFTs.length; i++){
        const nft = NFTs[i];
        let id = nft.token_id;
        fetch()
    }
}


async function initializeApp(){
    let currentUser = Moralis.User.current();
    if(!currentUser){
        currentUser = await Moralis.Web3.authenticate();
    }
    

    const options = { address: "0x3a24fd6133d278828d4675c3dab3616a98e9ff83", chain: "rinkeby" };
    const NFTs = await Moralis.Web3API.token.getAllTokenIds(options);

    const metaData = await Moralis.Web3API.token.getNFTMetadata(options);

    console.log(metaData);
}

initializeApp();