import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../interfaces/ILogin.interface';
import { catchError, finalize, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #http: HttpClient = inject(HttpClient);
  #loading: WritableSignal<boolean> = signal<boolean>(false);

  loading: Signal<boolean> = this.#loading.asReadonly();

  login(credentials: ILogin): Observable<Object> {
    this.#loading.set(true);
    return this.#http.post(``, credentials).pipe(
      tap(() => {
      }),
      catchError((err) => {
        throw err;
      }),
      finalize(() => this.#loading.set(false))
    );
  }

}
