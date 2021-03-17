import {f} from '../main.js';

export default class Showcase extends HTMLElement {

    connectedCallback() {
        this.getHtml()
            .then(res => this.innerHTML = res.innerHTML);
    }

    async getHtml() {
        let products = await this.getProducts();
        const div = document.createElement('div');
        products.forEach(el => {
            let item = document.createElement('div');
            item.classList.add('product');
            item.innerHTML = `<b>${el.name}</b><hr><span>${el.description}</span>`;
            div.append(item);
        });
        return div;
    }

    async getProducts() {
        return await f('products');
    }
}
