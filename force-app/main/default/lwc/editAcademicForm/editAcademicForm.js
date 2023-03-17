import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import APPLICATION_OBJECT from '@salesforce/schema/Application__c';
import COUNTRY from  '@salesforce/schema/Application__c.Country__c';
import PROVINCE from '@salesforce/schema/Application__c.Province__c';
import CITY from '@salesforce/schema/Application__c.City__c';
import HIGH_SCHOOL from '@salesforce/schema/Application__c.High_School__c';
import HIGH_SCHOOL_TYPE from '@salesforce/schema/Application__c.High_School_Type__c';

export default class AcademicInformationForm extends LightningElement {
    applicationObject = APPLICATION_OBJECT
    fields = {
        country: COUNTRY,
        province: PROVINCE,
        city: CITY,
        high_school: HIGH_SCHOOL,
        high_school_type: HIGH_SCHOOL_TYPE
    }
    
    handleReset(){
        const inputFields = document.querySelectorAll('lightning-input-field');
        if (inputFields) {
            Array.from(inputFields).forEach(field => {
                console.log('ra khong')
                field.reset()
            })
        }
    }


    handleSuccess(event){
    const toastEvent = new ShowToastEvent(
        {
            title: "Đã lưu",
            message: "Thông tin đã được lưu",
            variant: "success"
        }        
    )       
    this.dispatchEvent(toastEvent);
    }
}