export class DomainError
   extends Error {


   constructor(
      message: string
   ) {

      super(message);

      this.name =
         "DomainError";
   }



}


export class EntityNotFoundError
   extends DomainError {


   constructor(
      entity: string
   ) {

      super(
         `${entity} not found`
      );

      this.name =
         "EntityNotFoundError";
   }

}



export class InvalidDomainStateError
   extends DomainError {


   constructor(
      message: string
   ) {

      super(message);

      this.name =
         "InvalidDomainStateError";
   }

}



export class BusinessRuleViolationError
   extends DomainError {


   constructor(
      message: string
   ) {

      super(message);

      this.name =
         "BusinessRuleViolationError";
   }

}