const createPeerServerListeners = (peerServer)=>{
    peerServer.on('connection',(client)=>{
        console.log('successfully connected to peerjs service ')
        console.log(client.id)
    })
}

module.exports={
    createPeerServerListeners
}  