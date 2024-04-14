import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { delay, Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator{

    // validate(control: AbstractControl): Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     console.log('Dispara Validación asíncrona')
    //     console.log(email);
    //     return of({
    //         emailTaken: true,
    //     }).pipe(
    //         delay(2000)
    //     )
    // }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;
        const httpCallObservable = new Observable<ValidationErrors|null>((subscriber) => {
            console.log('Dispara Validación asíncrona')
            console.log({email})
            if (email === 'felipe@prueba.cl') {
                subscriber.next({emailTaken: true});
                subscriber.complete();
            }

            subscriber.next(null);
            subscriber.complete();
        }).pipe(
            delay(4000)
        );
        
        return httpCallObservable;
    }
}