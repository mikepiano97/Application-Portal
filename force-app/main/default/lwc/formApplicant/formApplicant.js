import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Application__c';
import CONTACT_FULLNAME from '@salesforce/schema/Application__c.Full_Name__c';
import CONTACT_NICKNAME from '@salesforce/schema/Application__c.Nickname__c';
import CONTACT_DOB from '@salesforce/schema/Application__c.Date_of_Birth__c';
import CONTACT_PHONE from '@salesforce/schema/Application__c.Phone__c';
import CONTACT_EMAIL from '@salesforce/schema/Application__c.Email__c';


export default class FormApplicant extends LightningElement {
    objectName = CONTACT_OBJECT
    fields = {
        contactName: CONTACT_FULLNAME, 
        contactNickname: CONTACT_NICKNAME,
        contactDOB: CONTACT_DOB,
        contactPhone: CONTACT_PHONE,
        contactEmail: CONTACT_EMAIL
    }
    successHandler(e){
        console.log(e.detail.id);
        const toastEvent = new ShowToastEvent({
            title: "Account Created",
            message:"Record ID:" + e.detail.id,

        })
        this.dispatchEvent(toastEvent);
    }
}