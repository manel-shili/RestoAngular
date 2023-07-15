import { FormGroup } from "@angular/forms";

export function MustMatch( controlName : string , matchingControlName : string){
    return (FormGroup : FormGroup) => {
        //const control = signupForm.controls[fname]
        const control = FormGroup.controls[controlName];
        const matchingControl = FormGroup.controls[matchingControlName];
        if(control.value !== matchingControl.value){
            matchingControl.setErrors({MustMatch : true})

        }else{
            matchingControl.setErrors(null)
        }
    }

}