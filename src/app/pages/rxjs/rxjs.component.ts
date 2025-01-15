import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs!: Subscription;

  constructor() {

    // this.retornoObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('Subs', valor),
    //   (err) => console.warn('Error', err),
    //   () => console.info('Obs Terminado')
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe( console.log );


  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(500)
            .pipe(
              map( valor =>  (valor + 1)),
              filter( valor => (valor % 2 === 0) ? true : false ),
              // take(10),
            );

  }

  retornoObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>( observer => {

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if( i === 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if( i === 2 ) {
          observer.error('i llegó al valor de 2');
        }

      }, 1000)

    } );

    return obs$;

  }

}
