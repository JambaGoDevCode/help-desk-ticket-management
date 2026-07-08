export abstract class ValueObject<T> {


   protected readonly props: T;



   constructor(
      props: T
   ) {

      this.validate(props);

      this.props = Object.freeze(props);

   }



   protected abstract validate(
      props: T
   ): void;



   equals(
      vo?: ValueObject<T>
   ): boolean {


      if (!vo) {
         return false;
      }


      return JSON.stringify(
         this.props
      )
         ===
         JSON.stringify(
            vo.props
         );

   }



   get value(): T {

      return this.props;

   }


}