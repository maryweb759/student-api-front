import { FormControl, ValidationErrors } from "@angular/forms";

export class SpaceValidator {
    static elimaneSpace(controlor:FormControl):ValidationErrors {
      if(controlor != null && controlor.value.trim().length == 0 ) {
          return {'elimaneSpace': true}
      } else {
          return null;
      }
    }
}
