import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
 
import { User } from '../models/user.model';
 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	private currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;
	user: User;
 
constructor() {
	this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
	this.currentUser = this.currentUserSubject.asObservable();
}
 
public get currentUserValue(): User {
	return this.currentUserSubject.value;
}
 
// login(email: string, password: string): Observable<User>{
// 	// return this.http.post<any>(`auth/login`, { email, password })
// 	// .pipe(map(user => {
// 	// if (user && user.token) {
// 	// 	// store user details in local storage to keep user logged in
// 	// 	localStorage.setItem('currentUser', JSON.stringify(user.result));
// 	// 	this.currentUserSubject.next(user);
// 	// }
//  	this.user = new User();
//  	this.user.email = email;
//  	this.user.password = password;
//  	this.user.firstName = 'aaa';
//  	localStorage.setItem('currentUser', JSON.stringify(this.user));
// 	this.currentUserSubject.next(this.user);
// 	return of(this.user);
// 	};


login(_newUser: User): Observable<User>{
	// return this.http.post<any>(`auth/login`, { email, password })
	// .pipe(map(user => {
	// if (user && user.token) {
	// 	// store user details in local storage to keep user logged in
	// 	localStorage.setItem('currentUser', JSON.stringify(user.result));
	// 	this.currentUserSubject.next(user);
	// }
 	if(_newUser.firstName === undefined){
 		_newUser.firstName = 'Andy';
 		_newUser.lastName = 'Smith';
 		_newUser.phone = '(029) 123-45-67';
 		_newUser.id = 1;
 		_newUser.role = 1;
 	}
 	if(_newUser.email === "admin@admin"){
 		_newUser.firstName = 'Admin';
 		_newUser.role = 2;
 	}
 	localStorage.setItem('currentUser', JSON.stringify(_newUser));
	this.currentUserSubject.next(_newUser);
		return of(_newUser);
	};
 
logout() {
	// remove user data from local storage for log out
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
	}
}