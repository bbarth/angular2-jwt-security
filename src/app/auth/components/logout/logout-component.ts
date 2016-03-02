import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {AuthService} from '../../auth-service';

@Component({
  selector: 'logout',
  template: '',
  providers: [AuthService]
})

export class Logout {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.authService.logout();
    this.authService.isAuth();
    this.router.navigate(['Login']);
  }

}
