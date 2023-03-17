import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavParent extends NavigationMixin(LightningElement) {
    @track item1=false
    @track item2=false
    @track item3=false
    handleClick1(){
        this.item1 = true
        this.item2 = false
        this.item3 = false
    }
    handle2(){
        this.item2 = true
        this.item1 = false
        this.item3 = false

    }
    handle3(){
        this.item3 = true
        this.item1 = false
        this.item2 = false
    }
}