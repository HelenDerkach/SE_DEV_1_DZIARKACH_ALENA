import {Component} from "@angular/core"
import {Router} from "@angular/router";
//import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: "login-page",
  templateUrl: "./login-page.component.html"
})
export class LoginPageComponent {

  constructor(private _router: Router,
              //private lss: LocalStorageService
              ) {}

  onSubmit(event) {
    console.log(event);
    //this.lss.setItem("credentials", JSON.stringify(event));
    this._router.navigate(["/home"]);
  }
}
