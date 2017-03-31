var clientID = status.info.clientID

var status = {
  name: 'john',
  info: {
    secrets: ['once made out with his cousin'],
    clientID: '15536'
  },
  showName: function() {
    console.log(this.name)
  }
}
