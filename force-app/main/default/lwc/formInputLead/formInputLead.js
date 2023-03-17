import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import NAME_FIELD from  '@salesforce/schema/Lead.Name'
import COMPANY_FIELD from '@salesforce/schema/Lead.Company'
import PHONE_FIELD from '@salesforce/schema/Lead.Phone'
import EMAIL_FIELD from '@salesforce/schema/Lead.Email'
export default class FormInputLead extends LightningElement {
    objectApiName = LEAD_OBJECT;
    fields = [NAME_FIELD,COMPANY_FIELD,PHONE_FIELD,EMAIL_FIELD]

    handleSuccess(event){
    const toastEvent = new ShowToastEvent(
        {
            title: "Đã lưu",
            message: "Thông tin đã được lưu",
            variant: "success"
        }        
    )       
    this.dispatchEvent(toastEvent)
    }
}