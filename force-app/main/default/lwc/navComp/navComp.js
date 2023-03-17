import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavComp extends NavigationMixin(LightningElement) {
    @track showComponentA = false;
    @track showComponentB = false;

    get componentAClass() {
        return this.showComponentA ? 'slds-nav-vertical__action slds-is-active slds-theme_shade' : 'slds-nav-vertical__action';
    }

    get componentBClass() {
        return this.showComponentB ? 'slds-nav-vertical__action slds-is-active slds-theme_shade' : 'slds-nav-vertical__action';
    }

    get componentACurrent() {
        return this.showComponentA ? 'page' : 'false';
    }

    get componentBCurrent() {
        return this.showComponentB ? 'page' : 'false';
    }

    navigateToComponentA() {
        this.showComponentA = true;
        this.showComponentB = false;
    }

    navigateToComponentB() {
        this.showComponentA = false;
        this.showComponentB = true;
    }
}
