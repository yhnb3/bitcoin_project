export default function MyWallet(params) {
    this.$myWallet = params.$myWallet
    this.account = {}

    this.setState = (updateAccount) => {
        this.account = updateAccount
        this.render()
    }

    this.render = (account) => {
        console.log(account)
    }
    
}
