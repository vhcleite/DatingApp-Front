import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/User.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-detailed',
  templateUrl: './member-detailed.component.html',
  styleUrls: ['./member-detailed.component.css']
})
export class MemberDetailedComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private alertifyService: AlertifyService) { }

  user: User;

  ngOnInit() {
    this.loadUser();
  }

  private loadUser() {
    this.userService.getUser(this.route.snapshot.params['id']).subscribe(user => {
      this.user = user;
    }, error => {
      this.alertifyService.error(error);
    })
  }

}
