import { MyserviceService } from '../myservice.service';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/userModel';

export class DuplicateEmailCheck {
    static checkEmail(_serviceObj: MyserviceService): AsyncValidatorFn {
        return (c: AbstractControl): Observable<{ [key: string]: boolean } | null> => {

            if (c.value != null && c.value != '') {
                return _serviceObj.getAllUsers().pipe(

                    map((res: UserModel[]) => {
                        console.log('**********************Service Call*********************');
                        console.log(res);

                        if (res.length != 0) {
                            let matched: boolean = false;
                            
                            for (let index = 0; index < res.length; index++) {

                                console.log(res[index].email)

                                if (res[index].email == c.value) {
                                    matched = true;
                                    break;
                                }
                            }

                            if (matched) {
                                return { duplicateEmail: true };
                            } else {
                                return null;
                            }

                        } else {
                            return null;
                        }

                    })
                );
            }

            return of(null);
        };
    }

}


