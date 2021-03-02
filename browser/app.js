import MyWallet from  "./myWallet.js"
import * as api from "./api.js"

function App($app) {
    this.$target = $app
    this.$target.innerHTML = '<div id="my-wallet"></div>'

    const myWallet = new MyWallet({
        $myWallet: this.$myWallet,
        }
    )

    this.render = async () => {
        const updateAccount = await api.apiCall()
        myWallet.render(updateAccount)
    }

    this.render()
}

new App(document.querySelector("#app"))