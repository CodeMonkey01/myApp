import { createStore } from 'vuex';
import axios from 'axios';
const dataURL = "https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/";


axios.get(dataURL).then(res => this.produkte = res.data.products.name)
        

const store = createStore(
{
    state(){
       return {
    produkte: [ { id: "1",
        title: "good stuff 1",
        description: "nice",
        image: "https://png.pngitem.com/pimgs/s/43-434613_best-organic-spa-products-hd-png-download.png"
        },
        { id: "2",
        title: "good stuff 2",
        description: "better",
        image: "https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-milk-glass-products-bottle-png-png-image_3255150.jpg"
        }]
       ,
    getters: {
        produkte(state){
            return state.produkte;
        },
        product(state){
            return(productId) => {
                return state.products.find((product) => product.id === productId);
            }
        }
    }
}
}
});

export default store;